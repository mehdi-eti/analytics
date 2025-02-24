import nodemailer from 'nodemailer';
import { EMAIL } from 'src/config-global';

export const transporter = nodemailer.createTransport({
  // @ts-ignore
  host: 'sandbox.smtp.mailtrap.io',
  port: EMAIL.port,
  secure: false, // true for port 465, false for other ports
  auth: {
    user: EMAIL.username,
    pass: EMAIL.password,
  },
});
