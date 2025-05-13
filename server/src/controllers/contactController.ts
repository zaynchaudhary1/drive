import { Request, Response } from 'express';
import { sendEmail } from '../utils/emailService';

// @desc    Submit contact form
// @route   POST /api/contact
// @access  Public
export const submitContactForm = async (req: Request, res: Response) => {
  const { name, email, phone, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Please fill all required fields' });
  }

  try {
    // For now, just log the submission since we don't have email setup yet
    console.log('Contact form submission:', { name, email, phone, subject, message });
    
    // In a real implementation with emailService properly set up:
    /*
    // Send email to admin
    await sendEmail({
      to: process.env.EMAIL_USER as string,
      subject: `Contact Form: ${subject}`,
      html: getContactFormEmailTemplate(name, email, message, subject),
    });
    */

    res.status(200).json({ success: true, message: 'Your message has been received' });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ message: 'Failed to send message. Please try again later.' });
  }
};