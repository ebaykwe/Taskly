import nodemailer from 'nodemailer';
import config from '../config/config';

const transporter = nodemailer.createTransport({
  host: config.email.host,  
  port: config.email.port,  
  auth: {
    user: config.email.user,  
    pass: config.email.pass,  
  },
});

export const sendEmail = (to: string, subject: string, text: string, html: string) => {
  const mailOptions = {
    from: config.email.user, 
    to,
    subject,
    text,
    html,
  };
  return transporter.sendMail(mailOptions);
};
