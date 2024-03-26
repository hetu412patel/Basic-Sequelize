'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student_Project123 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Student_Project123.init({
    studentId: DataTypes.STRING,
    projectId: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Student_Project123',
  });
  return Student_Project123;
};