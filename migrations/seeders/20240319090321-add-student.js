'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Students', [{
      schoolName: 'zzzz',
      firstName: 'yyyy',
      lastName: 'xxxxx',
      createdAt: new Date(),
      updatedAt: new Date()
    }]
    );

    // await queryInterface.renameColumn('Students', 'schoolName' ,'schoolId', {
    //   type: DataTypes.INTEGER,
    //   allowNull: false
    // });

    // await queryInterface.addColumn('Students', 'medium', { type: DataTypes.STRING, allowNull: true });

    // await queryInterface.createTable('Project123s', {
    //   name: DataTypes.STRING,
    //   leader: {
    //     type: DataTypes.BOOLEAN,
    //     defaultValue: false,
    //     allowNull: false
    //   }
    // });

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Students', null, {});
    // await queryInterface.removeColumn('Students', 'medium');
    // await queryInterface.dropTable('Project123s');

    // await queryInterface.addColumn('Students', 'schoolName' ,{
    //   type: DataTypes.STRING,
    //   allowNull: true
    // });
    // await queryInterface.removeColumn('Students', 'schoolId'); // remove all existing data of existing coldata


  }
};
