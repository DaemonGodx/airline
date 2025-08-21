'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Airports', [
     {
       name: 'Kempegowda International Airport',
       address: 'Devanahalli, Bengaluru, Karnataka 560300, India',
       cityid: 10, // <-- replace with actual Bangalore cityid
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       name: 'HAL Airport',
       address: 'HAL Old Airport Rd, Vimanapura, Bengaluru, Karnataka 560017, India',
       cityid: 10, // <-- replace with actual Bangalore cityid
       createdAt: new Date(),
       updatedAt: new Date()
     },
     {
       name: 'Jakkur Aerodrome',
       address: 'Jakkur, Bengaluru, Karnataka 560064, India',
       cityid: 10, // <-- replace with actual Bangalore cityid
       createdAt: new Date(),
       updatedAt: new Date()
     }
   ], {});
  },
  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Airports', null, {});
  }
};
