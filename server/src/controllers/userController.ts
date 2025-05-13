<<<<<<< HEAD
import { Request, Response, RequestHandler, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import User, { IUser } from '../models/userModel';
import mongoose from 'mongoose';
import { sendEmail, getWelcomeEmailTemplate } from '../utils/emailService';
=======
import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/userModel';
>>>>>>> 5355c10 (Rename to Drive Everywhere and enhance styling)

// Generate JWT token
const generateToken = (id: string) => {
  return jwt.sign({ id }, process.env.JWT_SECRET as string, {
    expiresIn: '30d',
  });
};

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
<<<<<<< HEAD
export const registerUser = async (req: Request, res: Response, next: NextFunction) => {
=======
export const registerUser = async (req: Request, res: Response): Promise<void> => {
>>>>>>> 5355c10 (Rename to Drive Everywhere and enhance styling)
  const { firstName, lastName, email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const user = await User.create({
      firstName,
      lastName,
      email,
      password,
<<<<<<< HEAD
    }) as IUser; // Type assertion to IUser

    if (user) {
      // Fix: Handle _id as mongoose ObjectId properly
      const userId = user._id ? user._id.toString() : '';

      // Send welcome email to the new user
      try {
        await sendEmail({
          to: email,
          subject: 'Welcome to Drive Everywhere!',
          html: getWelcomeEmailTemplate(firstName)
        });
        console.log(`Welcome email sent to ${email}`);
      } catch (emailError) {
        // Log the error but don't fail the registration
        console.error('Failed to send welcome email:', emailError);
      }

=======
    });

    if (user) {
>>>>>>> 5355c10 (Rename to Drive Everywhere and enhance styling)
      res.status(201).json({
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        isAdmin: user.isAdmin,
<<<<<<< HEAD
        token: generateToken(userId),
=======
        token: generateToken(user._id),
>>>>>>> 5355c10 (Rename to Drive Everywhere and enhance styling)
      });
    } else {
      res.status(400).json({ message: 'Invalid user data' });
    }
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Auth user & get token
// @route   POST /api/users/login
// @access  Public
<<<<<<< HEAD
export const loginUser = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email }) as IUser; // Type assertion to IUser

    if (user && (await user.matchPassword(password))) {
      // Fix: Handle _id as mongoose ObjectId properly
      const userId = user._id ? user._id.toString() : '';

=======
export const loginUser = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
>>>>>>> 5355c10 (Rename to Drive Everywhere and enhance styling)
      res.json({
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        isAdmin: user.isAdmin,
<<<<<<< HEAD
        token: generateToken(userId),
=======
        token: generateToken(user._id),
>>>>>>> 5355c10 (Rename to Drive Everywhere and enhance styling)
      });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
<<<<<<< HEAD
export const getUserProfile = async (req: Request, res: Response, next: NextFunction) => {
  try {
    // Add null check for req.user
    if (!req.user) {
      return res.status(401).json({ message: 'User not authenticated' });
    }

    const user = await User.findById(req.user._id) as IUser;
=======
export const getUserProfile = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = await User.findById(req.user._id);
>>>>>>> 5355c10 (Rename to Drive Everywhere and enhance styling)

    if (user) {
      res.json({
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        isAdmin: user.isAdmin,
      });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    console.error('Get profile error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};