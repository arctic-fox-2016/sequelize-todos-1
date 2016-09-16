'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    queryInterface.bulkInsert('todo',
    [
      {task:"Bake a delicious cake",status: 0,createdAt:new Date(),updatedAt:new Date()},
      {task:"Shutdown the computer",status: 0,createdAt:new Date(),updatedAt:new Date()},
      {task:"Change the world",status: 0,createdAt:new Date(),updatedAt:new Date()},
      {task:"Ride a bicycle",status: 0,createdAt:new Date(),updatedAt:new Date()},
      {task:"Practice to make a DIY drone",status: 0,createdAt:new Date(),updatedAt:new Date()}
  ])
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
