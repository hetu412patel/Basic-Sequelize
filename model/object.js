const {DataTypes } = require("sequelize");
const db = require('../db')

const Object = db.define("object123", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
      },
    userId: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
            model: 'user123s',
            key: 'id',
          },
      },
    objectName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    totalCount: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    remainingCount: {
        type: DataTypes.INTEGER,
        allowNull: false,
    }
  });

  module.exports = Object;

