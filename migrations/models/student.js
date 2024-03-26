'use strict';
const {
  Model
} = require('sequelize');
const Contact = require('./contact');
const Role123 = require('./role123');
const Project123 = require('./project123');
require('./role123');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Student.hasMany(Contact, {foreignKey: "userId"});
      Student.hasOne(Role123, {foreignKey: "userId"});
      Student.belongsToMany(Project123, {through: 'Student_Project123', foreignKey: "studentId"});
    }
  }
  Student.init({
    schoolName: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Student',
  });
  return Student;
};