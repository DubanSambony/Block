'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('blocks', [
      {
        id: 1,
        titulo:"block1",
        descripcion:"blocknumberone",
        createdAt:new Date(),
        updatedAt:new Date()
        },
        {
          id: 2,
        titulo:"block2",
        descripcion:"blocknumertwo",
        createdAt:new Date(),
        updatedAt:new Date()
      }
      
          ],{})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('blocks', null, {})
  }
};
