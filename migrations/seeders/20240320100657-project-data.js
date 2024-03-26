'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
       await queryInterface.bulkInsert('Project123s', [{
        projectName: 'John Doe',
        contentName: "abcdefgh",
        createdAt: new Date(),
        updatedAt: new Date()
      },{
        projectName: 'John Doe 22',
        contentName: "abcdefgh 22",
        createdAt: new Date(),
        updatedAt: new Date()
      }]);
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Project123s', null, {});
     
  }
};
