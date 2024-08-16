const config = {
    port: process.env.PORT || 8000,
    database: {
      url: process.env.DATABASE_URL || 'mongodb://localhost:27017/taskly',
    },
    redis: {
      host: process.env.REDIS_HOST || '127.0.0.1',
      port: process.env.REDIS_PORT || 6379,
    },
    jwt: {
      secret: process.env.JWT_SECRET || 'your_jwt_secret',
      expiresIn: '1d',
    },
    redisUrl: process.env.REDIS_URL || `redis://${process.env.REDIS_HOST || '127.0.0.1'}:${process.env.REDIS_PORT || 6379}`,
    email: {
        host: process.env.SMTP_HOST || 'sandbox.smtp.mailtrap.io',
        port: parseInt(process.env.SMTP_PORT || '587', 10) ,
        user: process.env.SMTP_USER || '96adaae4bd53e6',
        pass: process.env.SMTP_PASS || 'ea13cbd661c112',
        from: process.env.FROM_EMAIL || 'your-email@mailtrap.io',
      },
  };
  
  export default config;