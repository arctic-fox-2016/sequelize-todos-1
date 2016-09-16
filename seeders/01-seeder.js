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
    //createdAt
    return queryInterface.bulkInsert('todos',[
      { activity: 'Makan Lollipop', status: '[ ]', createdAt:'2016-09-16', updatedAt:'2016-09-15' },
      { activity: 'Shopping Online', status: '[ ]', createdAt:'2016-09-16', updatedAt:'2016-09-15'},
      { activity: 'Beli Magnum', status: '[ ]', createdAt:'2016-09-16', updatedAt:'2016-09-15'}
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
