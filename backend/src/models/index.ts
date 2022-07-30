import { Sequelize, DataTypes } from 'sequelize';
import { Models } from '../types';
import config from '../lib/config';

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: 'localhost',
  dialect: 'postgres',
});

const models: Models = {
  User: require('./user')(sequelize, DataTypes),
  sequelize,
};

export default models;
