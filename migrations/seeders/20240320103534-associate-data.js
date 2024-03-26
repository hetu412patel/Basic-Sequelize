'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   
      await queryInterface.bulkInsert('Student_Project123s', [{
        studentId: '8',
        projectId: '3',
        createdAt: new Date(),
        updatedAt: new Date()
     }], {});
   
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Student_Project123s', null, {});
  }
};
