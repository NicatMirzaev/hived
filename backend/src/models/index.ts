import { Sequelize, DataTypes } from 'sequelize';
import config from '../lib/config';

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: 'localhost',
  dialect: 'postgres',
});

const models = {
  User: require('./user')(sequelize, DataTypes),
};

(models as any).sequelize = sequelize;
(models as any).Sequelize = Sequelize;

export default models;
