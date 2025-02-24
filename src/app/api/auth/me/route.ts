import { headers } from 'next/headers';

import { verify } from 'src/utils/jwt';
import { STATUS, response } from 'src/utils/response';

import prisma from 'src/lib/prisma';
import { JWT_SECRET } from 'src/config-global';

// ----------------------------------------------------------------------

export async function GET() {
  try {
    const headersList = headers();
    const authorization = headersList.get('authorization');

    if (!authorization || !authorization.startsWith('Bearer ')) {
      return response('مجوز وجود ندارد یا نامعتبر است', STATUS.UNAUTHORIZED);
    }

    const accessToken = `${authorization}`.split(' ')[1];
    const data = await verify(accessToken, JWT_SECRET);

    // Find the user by phone
    const user = await prisma.user.findUnique({
      where: { id: data.userId },
    });

    if (!user) return response('مجوز نامعتبر است', STATUS.UNAUTHORIZED);

    return response({ user }, 200);
  } catch (error) {
    console.error('[Auth - me]: ', error);
    return response('خطای سرور داخلی', STATUS.ERROR);
  }
}
