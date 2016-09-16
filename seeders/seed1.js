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
    return queryInterface.bulkInsert('tasks', [{
      'name': 'Shut down my computer',
      'completed': false,
      'createdAt': new Date(),
      'updatedAt': new Date()
    }, {
      'name': 'Read a book',
      'completed': false,
      'createdAt': new Date(),
      'updatedAt': new Date()
    }, {
      'name': 'Cleaning my house',
      'completed': false,
      'createdAt': new Date(),
      'updatedAt': new Date()
    }, {
      'name': 'Watering my garden',
      'completed': false,
      'createdAt': new Date(),
      'updatedAt': new Date()
    }, {
      'name': 'Pray for the future',
      'completed': false,
      'createdAt': new Date(),
      'updatedAt': new Date()
    }]);
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
