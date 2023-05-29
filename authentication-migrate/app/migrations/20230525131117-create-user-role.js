'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('user_roles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        foreignKey: true,
        type: Sequelize.INTEGER
      },
      roleId: {
        type: Sequelize.INTEGER,
        references: {
          model: "role",
<<<<<<< HEAD
          foreignKey: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
=======
          foreignKey: "id",
        },
        onUpdate: 'RESTRICT',
        onDelete: 'CASCADE',
>>>>>>> 55e0ede (revisian terbaru)
      },
      userId: {
        type: Sequelize.STRING,references: {
          model: "user",
<<<<<<< HEAD
          foreignKey: 'id',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      },
      statusId: {
        type: Sequelize.STRING,references: {
          model: "status",
          foreignKey: 'id',
=======
          foreignKey: "id",
        },
        onUpdate: 'RESTRICT',
        onDelete: 'CASCADE',
      },
      statusId: {
        type: Sequelize.UUID,references: {
          model: "status",
          foreignKey: "id",
>>>>>>> 55e0ede (revisian terbaru)
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
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
    await queryInterface.dropTable('user_roles');
  }
};