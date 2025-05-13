import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/database';
import userRoutes from './routes/userRoutes';
import contactRoutes from './routes/contactRoutes';

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/contact', contactRoutes);

<<<<<<< HEAD
// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err.stack);
  res.status(500).json({
    message: 'Server Error',
    error: process.env.NODE_ENV === 'production' ? {} : err.stack
  });
=======
// Basic route
app.get('/', (req, res) => {
  res.send('API is running...');
>>>>>>> 5355c10 (Rename to Drive Everywhere and enhance styling)
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});