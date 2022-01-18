'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING
      },
      summary: {
        type: Sequelize.TEXT
      },
      isbn: {
        type: Sequelize.STRING
      },
      publishDate: {
        type: Sequelize.DATE
      },
      situation: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      authorId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'authors', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      },
      categoryId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'categories', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'RESTRICT'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('books')
  }
};
