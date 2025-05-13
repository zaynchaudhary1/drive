<<<<<<< HEAD
import express, { RequestHandler } from 'express';
=======
import express from 'express';
>>>>>>> 5355c10 (Rename to Drive Everywhere and enhance styling)
import { registerUser, loginUser, getUserProfile } from '../controllers/userController';
import { protect } from '../middleware/authMiddleware';

const router = express.Router();

<<<<<<< HEAD
// Fix: Add type assertions to correctly type the route handlers
router.post('/', registerUser as unknown as RequestHandler);
router.post('/login', loginUser as unknown as RequestHandler);

router.get('/profile', protect, getUserProfile as unknown as RequestHandler);
=======
// Fix: Use controller functions directly as RequestHandler types
router.post('/', registerUser);
router.post('/login', loginUser);
router.get('/profile', protect, getUserProfile);
>>>>>>> 5355c10 (Rename to Drive Everywhere and enhance styling)

export default router;