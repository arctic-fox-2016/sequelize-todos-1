'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Todos', [
        { task: "Minum a", status: 0, createdAt: new Date(), updatedAt: new Date() },
        { task: "Minum b", status: 0, createdAt: new Date(), updatedAt: new Date() },
        { task: "Minum c", status: 0, createdAt: new Date(), updatedAt: new Date() },
        { task: "Minum d", status: 0, createdAt: new Date(), updatedAt: new Date() },
        { task: "Minum h", status: 0, createdAt: new Date(), updatedAt: new Date() }

    ]);
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
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
