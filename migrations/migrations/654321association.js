'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async down(queryInterface, Sequelize) {
    await queryInterface.createTable('Student_Project123s', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      studentId: {
        type: Sequelize.STRING,
        references: {
          model: "Student",
          key: "id"
        }
      },
      projectId: {
        type: Sequelize.STRING,
        references: {
          model: "Project123",
          key: "id"
        }
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
    // await queryInterface.removeColumn('Student_Project123s',"studentId");
    // await queryInterface.removeColumn('Student_Project123s',"projectId");
    // await queryInterface.addColumn('Student_Project123s',"projectId", {
    //   type: Sequelize.INTEGER,
    //   references: {
    //     model: "Project123s",
    //     key: "id"
    //   }
    // });
    await queryInterface.addColumn('Student_Project123s',"studentId", {
      type: Sequelize.INTEGER,
      references: {
        model: "Students",
        key: "id"
      }
    });
  }
};