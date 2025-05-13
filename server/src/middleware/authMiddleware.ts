import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
<<<<<<< HEAD
import User, { IUser } from '../models/userModel';
import mongoose from 'mongoose';
=======
import User from '../models/userModel';
>>>>>>> 5355c10 (Rename to Drive Everywhere and enhance styling)

interface JwtPayload {
  id: string;
}

<<<<<<< HEAD
// Extend Express Request type with proper typing
declare global {
  namespace Express {
    interface Request {
      user?: {
        _id: mongoose.Types.ObjectId;
        firstName: string;
        lastName: string;
        email: string;
        isAdmin: boolean;
      };
=======
// Extend Express Request type to include user
declare global {
  namespace Express {
    interface Request {
      user?: any;
>>>>>>> 5355c10 (Rename to Drive Everywhere and enhance styling)
    }
  }
}

export const protect = async (req: Request, res: Response, next: NextFunction) => {
  let token;
  
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // Get token from header
      token = req.headers.authorization.split(' ')[1];
      
      // Verify token
      const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;
      
      // Get user from token
<<<<<<< HEAD
      const user = await User.findById(decoded.id).select('-password');
      
      if (!user) {
        res.status(401).json({ message: 'Not authorized, user not found' });
        return;
      }

      // Fix: Type assertion to match the expected type
      req.user = {
        _id: user._id,
        firstName: user.firstName as string,
        lastName: user.lastName as string,
        email: user.email as string,
        isAdmin: user.isAdmin as boolean
      };

=======
      req.user = await User.findById(decoded.id).select('-password');
      
>>>>>>> 5355c10 (Rename to Drive Everywhere and enhance styling)
      next();
    } catch (error) {
      console.error(error);
      res.status(401).json({ message: 'Not authorized, token failed' });
<<<<<<< HEAD
      return;
    }
  } else if (!token) {
    res.status(401).json({ message: 'Not authorized, no token' });
    return;
=======
    }
  }
  
  if (!token) {
    res.status(401).json({ message: 'Not authorized, no token' });
>>>>>>> 5355c10 (Rename to Drive Everywhere and enhance styling)
  }
};

export const admin = (req: Request, res: Response, next: NextFunction) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(401).json({ message: 'Not authorized as admin' });
  }
};