import { Sequelize } from 'sequelize-typescript';
import config from 'config';

const sequelize = new Sequelize(
  config.get('SEQUELIZE.database'),
  config.get('SEQUELIZE.user'),
  config.get('SEQUELIZE.password'),
  {
    host: config.get('SEQUELIZE.host'),
    port: config.get('SEQUELIZE.port'),
    dialect: config.get('SEQUELIZE.dialect'),
    logging: config.get('SEQUELIZE.logging'),
  },
);

export default sequelize;
