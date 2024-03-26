'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async down(queryInterface, Sequelize) {
    await queryInterface.createTable('Role123s', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      role: {
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
    await queryInterface.addColumn('Role123s', "userId", {
      type: Sequelize.INTEGER,
      unique: true,
      references: {
        model: "Students",
        key: "id"
    }
    });
    // await queryInterface.removeColumn('Role123s', "userId")
    // await queryInterface.dropTable('Role123s');
  }
};