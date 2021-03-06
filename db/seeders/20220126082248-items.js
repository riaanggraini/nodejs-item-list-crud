'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('items', [
      {
        name: 'item name 1',
        SKU: 'ITEM006',
        desc: 'this is description of item 1',
      },
      {
        name: 'item name 2',
        SKU: 'ITEM007',
        desc: 'this is description of item 2',
      },
      {
        name: 'item name 3',
        SKU: 'ITEM009',
        desc: 'this is description of item 3',
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
  }
};
