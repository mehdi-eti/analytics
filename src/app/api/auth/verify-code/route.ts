import type { NextRequest } from 'next/server';

import prisma from 'src/lib/prisma';
import { STATUS, response } from 'src/utils/response';

// ----------------------------------------------------------------------

export async function POST(req: NextRequest) {
  try {
    // ------------------------- BODY -------------------------
    const { phone, pin } = await req.json();
    //  ------------------------- Check all params send -------------------------
    if (!phone || !pin) {
      return response('شماره موبایل و کد الزامی است.', STATUS.ERROR);
    }
    // ------------------------- Check Pin -------------------------
    // Find the user by phone number
    const user = await prisma.user.findUnique({
      where: { phone },
    });

    // Check user exist
    if (!user) return response({ message: 'کاربر پیدا نشد' }, STATUS.ERROR);

    // Check if the code matches and is not expired (e.g., valid for 3 minutes)
    const codeExpirationTime = 3 * 60 * 1000; // 3 minutes
    // @ts-ignore
    const codeAge: any = new Date() - new Date(user.verificationCodeSentAt);

    if (user.verificationCode === pin && codeAge <= codeExpirationTime) {
      // Mark the phone as verified
      await prisma.user.update({
        where: { phone },
        data: {
          phoneVerified: true,
          verificationCode: null, // Clear the code
          verificationCodeSentAt: null, // Clear the timestamp
        },
      });

      return response({ message: "'موبایل تایید شد'" }, STATUS.OK);
    }
    return response({ message: 'کد نامعتبر یا منقضی شده است' }, STATUS.BAD_REQUEST);
  } catch (error) {
    console.error('[Auth - verify code]: ', error);
    return response({ message: 'خطایی در سرور رخ داده است' }, STATUS.ERROR);
  }
}
