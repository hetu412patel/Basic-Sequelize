'use strict';

const { QueryTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    // await queryInterface.addConstraint('Role123s', {
    //   fields: ['role'],
    //   type: 'check',
    //   where: {
    //      role: ['teacher', 'admin', 'abcd']
    //   }
    // });
  
      await queryInterface.bulkInsert('Role123s', [{
        role: "abcd",
        userId: "9",
        createdAt: new Date(),
        updatedAt: new Date()
      }]);

    //   await queryInterface.sequelize.query(
    //   'SELECT * FROM "Role123s" WHERE "userId" = :userId',
    //   {
    //     replacements: { userId: '7' },
    //     type: QueryTypes.SELECT
    //   }
    // );
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Role123s', null, {});
  }
};
