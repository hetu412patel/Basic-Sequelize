'use strict';

const { DataTypes } = require('sequelize');
require('../models/student');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    // await queryInterface.addColumn('Contacts', 'userId', {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: "Student", 
    //     key: 'id' 
    //   },
    //   onUpdate: 'CASCADE',
    //   onDelete: 'CASCADE'
    // });

    await queryInterface.bulkInsert('Contacts', [{
      Number: '321',
      location: 'bhar1234',
      pincode: "120",
      userId: "8",
      createdAt: new Date(),
      updatedAt: new Date()
    }]);

    // update specific data based on condition
    // await queryInterface.sequelize.query(`
    //   UPDATE "Contacts"
    //   SET "location" = 'xyz'
    //   WHERE "Number" = '98765'
    // `);
  },

  async down (queryInterface, Sequelize) {
    // await queryInterface.removeColumn('Contacts', 'userId');
    //  await queryInterface.bulkDelete('Contacts', null, {});
    await queryInterface.sequelize.query(`
    UPDATE "Contacts"
    SET "location" = 'AMD'
    WHERE "location" = 'xyz'
  `);
  }
};
