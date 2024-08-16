import mongoose from 'mongoose';
import config from './config';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(config.database.url, {});
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    const err = error as Error
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
};

export default connectDB;
