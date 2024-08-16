import { createClient } from 'redis';
import config from './config';

const connectRedis = async () => {
  const client = createClient({
    url: `redis://${config.redis.host}:${config.redis.port}`,
  });

  client.on('error', (err) => {
    console.error('Redis connection error:', err);
  });

  client.on('connect', () => {
    console.log('Connected to Redis');
  });

  await client.connect();

  return client;
};

export default connectRedis;
