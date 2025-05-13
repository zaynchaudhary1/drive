// filepath: d:\cry\chrome-wheels-elegance-hub\server\src\routes\contactRoutes.ts
<<<<<<< HEAD
import express, { RequestHandler } from 'express';
=======
import express from 'express';
>>>>>>> 5355c10 (Rename to Drive Everywhere and enhance styling)
import { submitContactForm } from '../controllers/contactController';

const router = express.Router();

<<<<<<< HEAD
// Fix: Add type assertion
router.post('/', submitContactForm as unknown as RequestHandler);
=======
// Use the controller directly as middleware
router.post('/', submitContactForm);
>>>>>>> 5355c10 (Rename to Drive Everywhere and enhance styling)

export default router;