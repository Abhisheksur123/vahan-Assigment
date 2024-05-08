// config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('rudimentary_cms', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
