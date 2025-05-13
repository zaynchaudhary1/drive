import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async (): Promise<void> => {
  try {
<<<<<<< HEAD
    // Add connection options to avoid deprecation warnings
    const conn = await mongoose.connect(process.env.MONGODB_URI as string, {
      // These options might be needed depending on your MongoDB version
      // serverSelectionTimeoutMS: 5000,
      // socketTimeoutMS: 45000,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    if (error instanceof Error) {
      console.error(`MongoDB Connection Error: ${error.message}`);
    } else {
      console.error('Unknown MongoDB error occurred');
=======
    const conn = await mongoose.connect(process.env.MONGODB_URI as string);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error: ${error.message}`);
    } else {
      console.error('Unknown error occurred');
>>>>>>> 5355c10 (Rename to Drive Everywhere and enhance styling)
    }
    process.exit(1);
  }
};

export default connectDB;