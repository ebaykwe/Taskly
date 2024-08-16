import redis from 'redis';
import config from '../config/config'

const client = redis.createClient({
  url: config.redisUrl,
});

client.on('error', (err) => {
  console.error('Redis error:', err);
});

export default client;
