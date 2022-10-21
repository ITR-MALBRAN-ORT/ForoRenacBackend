require('dotenv').config();

module.exports = {
  SERVER: {
    port: process.env.PORT ?? 3000,
    environment: process.env.NODE_ENV ?? 'development',
  },
  LOGGER: {
    level: 'debug',
    tz: 'America/Buenos_Aires',
    filename: '/usr/src/app/logs/api-logs.log',
  },
  SEQUELIZE: {
    database: process.env.DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    logging: false,
  },
};
