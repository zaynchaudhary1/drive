import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

// Configure mail transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
}

// Send email function
export const sendEmail = async (options: EmailOptions): Promise<void> => {
  const mailOptions = {
    from: `"Drive Everywhere" <${process.env.EMAIL_USER}>`,
    to: options.to,
    subject: options.subject,
    html: options.html,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log(`Email sent to: ${options.to}`);
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Email could not be sent');
  }
};

// Email templates
export const getWelcomeEmailTemplate = (firstName: string): string => {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #1c2433; color: #f0f4fa; padding: 20px; border-radius: 8px;">
      <div style="text-align: center; margin-bottom: 20px;">
        <h1 style="color: #00CED1;">Welcome to Drive Everywhere!</h1>
      </div>
      <p>Hello ${firstName},</p>
      <p>Thank you for joining Drive Everywhere. We're excited to have you as part of our community of automotive enthusiasts.</p>
      <p>With your new account, you can:</p>
      <ul>
        <li>Browse our premium inventory of vehicles</li>
        <li>Save your favorite cars</li>
        <li>Schedule test drives</li>
        <li>Get personalized recommendations</li>
      </ul>
      <div style="margin: 30px 0; text-align: center;">
        <a href="https://driveeverywhere.com/browse" style="background: linear-gradient(to right, #00CED1, #4FD1C5); color: #1c2433; padding: 10px 20px; text-decoration: none; border-radius: 4px; font-weight: bold;">Explore Our Collection</a>
      </div>
      <p>If you have any questions, please don't hesitate to contact our support team.</p>
      <p>Best regards,</p>
      <p>The Drive Everywhere Team</p>
    </div>
  `;
};