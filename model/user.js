const { DataTypes } = require("sequelize");
const db = require('../db');

const User = db.define("user123", {

  // for validatio we use sequelize-transforms library
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  user123Id: {
    type: DataTypes.UUID,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  fullName: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
});

module.exports = User;

