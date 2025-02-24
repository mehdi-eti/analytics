// @ts-ignore
import Ghasedak from 'ghasedaksms';

import { GHASEDAK_SMS_KEY } from 'src/config-global';

const ghasedak = new Ghasedak(GHASEDAK_SMS_KEY);

export async function sendOtpSms(
  mobile: string,
  inputs: [
    {
      param: string;
      value: string;
    }
  ],
  templateName: string,
  clientReferenceId?: string
): Promise<void> {
  const otpSmsCommand = {
    sendDate: '2024-07-09T20:03:25.658Z', // Replace with actual send date
    receptors: [
      {
        mobile, // Replace with actual recipient's mobile number
        clientReferenceId, // Replace with actual client reference ID
      },
    ],
    templateName, // Replace with actual template name
    inputs,
    udh: true,
  };

  try {
    await ghasedak.sendOtpSms(otpSmsCommand);
  } catch (error) {
    console.error('Error sending OTP SMS:', error.message);
    throw error;
  }
}
