import app from './app';
import config from './config/config';
import connectDB from './config/database';
import connectRedis from './config/redis';

const startServer = async () => {
  await connectDB();
  const redisClient = await connectRedis();

  app.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}`);
  });
};

startServer();
