// 'use strict';
//
// module.exports = {
//   up: function (queryInterface, Sequelize) {
//     /*
//       Add altering commands here.
//       Return a promise to correctly handle asynchronicity.
//
//       Example:
//       return queryInterface.bulkInsert('Person', [{
//         name: 'John Doe',
//         isBetaMember: false
//       }], {});
//     */
//     module.exports = {
'use strict';

var Promise = require('bluebird');

module.exports = {
up: function (queryInterface, Sequelize) {
  var todosData = [{
    name: 'Bake a delicious blueberry-glazed cheescake',
    complete: false,
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    name: 'Write up that memo and fax it out',
    complete: false,
    createdAt: new Date(),
    updatedAt: new Date()

  }, {
    name: 'conquer the world',
    complete: true,
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
}
};
//     // queryInterface.bulkInsert('todos',{
//     //   name :'Bake a delicious blueberry-glazed cheescake',
//     //   complete :'true',
//     //   createdAt : new Date(),
//     //   updatedAt : new Date()
//       // {name:'Write up that memo and fax it out',
//       //   complete:'true',
//       //   createdAt : new Date(),
//       //   updatedAt : new Date()
//       // }
//       // {name:'conquer the world',
//       //   complete:'true',
//       //   createdAt : new Date(),
//       //   updatedAt : new Date()
//       // }
//     })
//
//   },
//
//   down: function (queryInterface, Sequelize) {
//     /*
//       Add reverting commands here.
//       Return a promise to correctly handle asynchronicity.
//
//       Example:
//       return queryInterface.bulkDelete('Person', null, {});
//     */
//   }
// };
