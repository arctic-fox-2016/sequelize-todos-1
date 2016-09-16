'use strict';

var Promise = require('bluebird');

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
    var todosData = [{
      task: 'brew a coffee',
      status: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      task: 'take a medicine',
      status: true,
      createdAt: new Date(),
      updatedAt: new Date()

    },
    {
      task: 'do the DIY project',
      status: false,
      createdAt: new Date(),
      updatedAt: new Date()

    },
    {
      task: 'browsing a travel website',
      status: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }];

    return Promise.try(function () {
    return queryInterface.bulkInsert({ tableName: 'todos', schema: 'public' }, todosData, {});
    }).then(function () {
      console.log("seed succesfull");
    });

  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete({ tableName: 'todos', schema: 'public' }, null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
