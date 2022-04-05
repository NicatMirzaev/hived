import Sequelize from 'sequelize';
import config from '../lib/config';

const sequelize = new Sequelize(config.database, config.username, config.password, {
  host: 'localhost',
  dialect: 'postgres',
});

const models = {
  user: require('./user')(sequelize, Sequelize.DataTypes),
};

models.sequelize = sequelize;
models.Sequelize = Sequelize;

export default models;
