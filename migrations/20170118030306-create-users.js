'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('users', {
    user_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    username: {
      type: Sequelize.STRING(20)
    },
    password: {
      type: Sequelize.STRING
    },
    createAt: {
      allowNull: false,
      type: Sequelize.DATE
    }
  }),

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
