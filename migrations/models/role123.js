'use strict';
const {
  Model
} = require('sequelize');
const student = require('./student');
module.exports = (sequelize, DataTypes) => {
  class Role123 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Role123.belongsTo(student, {foreignKey: "userId"})
    }
  }
  Role123.init({
    role: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Role123',
  });
  return Role123;
};