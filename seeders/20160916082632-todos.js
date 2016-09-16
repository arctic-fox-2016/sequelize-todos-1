'use strict';

var Promise = require('bluebird');

module.exports = {
 up: function (queryInterface, Sequelize) {
   var todosData = [{
     task: 'pekerjaan ke satu',
     completedAt: null,
     createdAt: new Date(),
     updatedAt: new Date()
   }, {
     task: 'pekerjaan ke dua',
     completedAt: null,
     createdAt: new Date(),
     updatedAt: new Date()
   }, {
     task: 'pekerjaan ke ketiga',
     completedAt: null,
     createdAt: new Date(),
     updatedAt: new Date()
   }];
   return Promise.try(function () {
     return queryInterface.bulkInsert({ tableName: 'todos' }, todosData, {});
   }).then(function () {
     console.log("seed succesfull");
   });
 },

 down: function (queryInterface, Sequelize) {
   return queryInterface.bulkDelete({ tableName: 'todos' }, null, {});
 }
};
