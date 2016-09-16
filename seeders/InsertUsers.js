'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users',
   [
       {
         full_name:'siRani',
         task: 'Cuci Baju'
       ,status: '[ ]'
       ,createdAt : new Date()
       ,updatedAt : new Date()},
       {full_name:'siRani',
       task: 'Makan Bulik'
       ,status: '[X]'
       ,createdAt : new Date()
       ,updatedAt : new Date()},
       {full_name:'siRani',
       task: 'Makan Buluk'
       ,status: '[ ]'
       ,createdAt : new Date()
       ,updatedAt : new Date()}

   ]
   , {});
 },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
