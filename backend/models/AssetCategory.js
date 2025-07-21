const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const AssetCategory = sequelize.define('AssetCategory', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'active',
  },
});

module.exports = AssetCategory;

