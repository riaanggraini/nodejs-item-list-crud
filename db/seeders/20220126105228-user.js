'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        name: 'Admin 1',
        email: 'admin@mail.com',
        password: bcrypt.hashSync('password01', 8),
      },
      {
        name: 'Admin 2',
        email: 'admin01@mail.com',
        password: bcrypt.hashSync('password02', 8),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
  }
};
