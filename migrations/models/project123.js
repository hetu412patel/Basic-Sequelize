'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Project123 extends Model {
   
    static associate(models) {
      Project123.belongsToMany(Student, {through:'Student_Project123', foreignKey: "projectId"});
    }
  }
  Project123.init({
    projectName: DataTypes.STRING,
    contentName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Project123',
  });
  return Project123;
};