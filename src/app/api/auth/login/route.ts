import type { NextRequest } from 'next/server';

// eslint-disable-next-line import/no-extraneous-dependencies
import bcrypt from 'bcrypt';
import { sign } from 'src/utils/jwt';
import { STATUS, response } from 'src/utils/response';

import prisma from 'src/lib/prisma';
import { JWT_SECRET, JWT_EXPIRES_IN } from 'src/config-global';

// ----------------------------------------------------------------------

export async function POST(req: NextRequest) {
  try {
    // ------------------------- BODY -------------------------
    const { phone, password } = await req.json();

    if (!phone || !password) {
      return response({ message: 'موبایل و رمز عبور لازم است' }, STATUS.BAD_REQUEST);
    }

    // Find the user by phone
    const user = await prisma.user.findUnique({
      where: { phone },
    });

    if (!user) return response('موبایل یا رمز عبور نامعتبر است', STATUS.BAD_REQUEST);

    // Compare the provided password with the hashed password in the database
    const passwordMatch = bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return response({ message: 'Invalid email or password' }, STATUS.BAD_REQUEST);
    }

    const accessToken = await sign({ userId: user?.id }, JWT_SECRET, {
      expiresIn: JWT_EXPIRES_IN,
    });

    return response({ user, accessToken }, 200);
  } catch (error) {
    console.error('[Auth - sign in]: ', error);
    return response('Internal server error', STATUS.ERROR);
  }
}
