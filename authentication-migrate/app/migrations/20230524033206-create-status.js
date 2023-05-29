'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Statuses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
<<<<<<< HEAD
      id: {
        type: Sequelize.UUID
      },
=======
>>>>>>> 55e0ede (revisian terbaru)
      title: {
        type: Sequelize.STRING
      },
      body: {
        type: Sequelize.STRING
      },
<<<<<<< HEAD
      user_id: {
        type: Sequelize.STRING
=======
      userId: {
        type: Sequelize.STRING,references: {
          model: "user",
          foreignKey: "id",
        },
        onUpdate: 'RESTRICT',
        onDelete: 'CASCADE',
>>>>>>> 55e0ede (revisian terbaru)
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Statuses');
  }
};