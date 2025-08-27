'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Airplanes', [
      {
        ModelNumber: 'Boeing 737',
        capacity: 180,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ModelNumber: 'Airbus A320',
        capacity: 150,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ModelNumber: 'Embraer E190',
        capacity: 100,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        ModelNumber: 'Bombardier Q400',
        capacity: 78,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Airplanes', null, {});
  }
};
