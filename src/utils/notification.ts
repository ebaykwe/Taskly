import { sendEmail } from './email';

export const notifyUser = async (userEmail: string, message: string) => {
  const subject = 'Taskly Notification';
  const text = message;
  const html = `<p>${message}</p>`;

  await sendEmail(userEmail, subject, text, html);
};
