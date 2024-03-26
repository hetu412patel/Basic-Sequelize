'use strict';
const {
  Model
} = require('sequelize');
const Student = require("./student")
module.exports = (sequelize, DataTypes) => {
  class Contact extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Contact.belongsTo(Student, { foreignKey:"userId"});
    }
  }
  Contact.init({
    Number: DataTypes.STRING,
    location: DataTypes.STRING,
    pincode: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Contact',
  });
  return Contact;
};