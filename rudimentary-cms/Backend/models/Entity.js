// models/Entity.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Entity = sequelize.define('Entity', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  attributes: {
    type: DataTypes.JSON,
    allowNull: false,
  },
});

module.exports = Entity;
