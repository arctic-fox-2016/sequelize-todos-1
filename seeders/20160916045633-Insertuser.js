'use strict';

module.exports = {

  up: function (queryInterface, Sequelize) {
  
  return [
    queryInterface.bulkInsert('Users', [
      { first_name: 'Rani Grand Ta',task:"Makan Bulk 1",status:'[ ]', updatedAt: new Date(),createdAt:new Date()},
      { first_name: 'Rani Grand Ta',task:"Makan Bulukk 2",status:'[ ]', updatedAt: new Date(),createdAt:new Date()},
      { first_name: 'Rani Grand Ta',task:"Makan Bulukk 2",status:'[X]', updatedAt: new Date(),createdAt:new Date()}
    ])
  ];
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
