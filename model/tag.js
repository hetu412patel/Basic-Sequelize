const { DataTypes } = require("sequelize");
const db = require('../db');
const User = require("./user");

const Tag = db.define("tag123", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  userId: {
    type: DataTypes.UUID,
    allowNull: false,
    reference : {
        model : User,
        key: "id"
    }
  },
  tagName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Tag;

