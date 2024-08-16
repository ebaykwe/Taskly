import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: process.env.SMTP_PORT === '465', 
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export const sendInviteEmail = async (email: string) => {
  await transporter.sendMail({
    from: process.env.FROM_EMAIL,
    to: email,
    subject: 'INVITATION!',
    text: 'You have been invited to join our platform.',
  });
};
