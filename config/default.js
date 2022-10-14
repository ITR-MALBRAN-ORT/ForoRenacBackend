require('dotenv').config();

module.exports = {
  server: {
    port: process.env.PORT ?? 3000,
    environment: process.env.NODE_ENV ?? 'development',
  },
  logger: {
    level: 'debug',
    tz: 'America/Buenos_Aires',
    filename: '/usr/src/app/logs/api-logs.log',
  },
};
