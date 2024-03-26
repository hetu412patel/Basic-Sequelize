'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async down(queryInterface, Sequelize) {
    await queryInterface.createTable('Contacts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "student",
          key: "id"
        }
      },
      Number: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      pincode: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('Contacts','userId',{
      type: Sequelize.INTEGER,
      references: {
        model: "Students",
        key: "id"
      }
    });
  }
};