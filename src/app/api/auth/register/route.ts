import type { NextRequest } from 'next/server';

import prisma from 'src/lib/prisma';
// eslint-disable-next-line import/no-extraneous-dependencies
import UAParser from 'ua-parser-js';

import { STATUS, response } from 'src/utils/response';
import bcrypt from 'bcrypt';

// ----------------------------------------------------------------------

export async function POST(req: NextRequest) {
  try {
    // ------------------------- BODY -------------------------
    const { email, password, firstName, lastName, phone } = await req.json();

    // ------------------------- AGENT -------------------------
    const userAgent = req.headers.get('user-agent');

    if (!userAgent) return response('User-Agent header is missing', STATUS.ERROR);

    // Parse the user-agent string
    // @ts-ignore
    const parser = new UAParser(userAgent);
    const result = parser.getResult();

    // Extract OS, device, and browser information
    const os = result.os.name; // e.g., Windows, macOS, Linux
    const device = result.device.type || 'desktop'; // e.g., mobile, tablet, desktop
    const browser = result.browser.name; // e.g., Chrome, Firefox, Safari

    // ------------------------- USER -------------------------
    // Generate a verification code
    const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
    // Check if the user already exists
    const user = await prisma.user.findFirst({
      where: { phone },
    });

    if (user) {
      if (user.phoneVerified) {
        return response(
          { message: `از قبل یک حساب کاربری با شماره ${phone} وجود دارد.` },
          STATUS.CONFLICT
        );
      }
      // Update the existing user with the new verification code
      await prisma.user.update({
        where: { phone, phoneVerified: false },
        data: {
          verificationCode,
          verificationCodeSentAt: new Date(),
          updated_at: new Date(),
        },
      });
    } else {
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
      // Create a new user
      await prisma.user.create({
        data: {
          email,
          phone,
          verified: false,
          password: hashedPassword,
          displayName: `${firstName} ${lastName}`,
          // Device
          os,
          device,
          browser,
          // Role
          is_sso_user: false,
          is_anonymous: false,
          is_super_admin: false,
          // Verify Code Config
          verificationCode,
          verificationCodeSentAt: new Date(),
          // Date
          created_at: new Date(),
          updated_at: new Date(),
        },
      });
    }

    // Fixme Send the verification code via SMS
    // await sendOtpSms(phone, [{ param: 'Code', value: verificationCode }], 'Ghasedak', user?.id);

    return response({ message: "'کد شما ارسال شد'" }, STATUS.OK);
  } catch (error) {
    console.error('[Auth - sign up]: ', error);
    return response({ message: 'خطایی در سرور رخ داده است' }, STATUS.ERROR);
  }
}
