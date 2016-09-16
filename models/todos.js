'use strict';
module.exports = function(sequelize, DataTypes) {
  var todos = sequelize.define('todos', {
    status: {
      type: DataTypes.STRING,
      len: [1],
      notNUll: true,
      isIn: [" ","x","X"]
    },
    description: DataTypes.STRING,
    tag: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      },
      help: function () {
        console.log("-------------TODO-----------------")
        console.log("node todo.js list")
        console.log("node todo.js add <taskId>")
        console.log("node todo.js task <taskId>")
        console.log("node todo.js delete <taskId>")
        console.log("node todo.js completetion <taskId>")
        console.log("node todo.js uncomplete <taskId>")
        console.log("")
        console.log("")
        console.log("_____________________________by: $ahbana")
      },
      list: function () {
        this.findAll({}).then(function(results){
          results.forEach((val)=>{
            console.log(`${val.id}. [${val.status}] ${val.description}, last update: ${val.updatedAt} | tag:${val.tag}`);
          })
        })
      },
      task: function (id) {
        this.find({
          where: {
            Id: id
          }
        }).then(function(val){
          if(!val) {
            console.log("task not found")
          } else{
            console.log(`${val.id}. [${val.status}] ${val.description}, last update: ${val.createdAt} | tag:${val.tag}`);
          }
        })
      },
      completetion: function (id) {
        this.find({
          where: {
            Id: id
          }
        }).then(function(val){
          if(val) {
        this.update({
          status: "X",
          updatedAt: new Date()
        },{
          where: {
            Id: id
          }
        })
        console.log(`task: ${val.description},  completed`)
      } else{
        console.log(id," not found")
      }
    })
  },
      uncomplete: function (id) {
        this.update({
          status: " ",
          updatedAt: new Date(),
          createdAt: new Date()
        },{
          where: {
            Id: id
          }
        }).then(function (success) {
          if(success[0]){
            console.log(id,"set to uncomplete",success)
          } else{
            console.log(id," not found",success)
          }
        })
      },
      delete: function (id) {

        this.destroy({
          where: {
            Id: id
          }
        }).then(function (success) {
          if(!success[0]){
            console.log(id,"been deleted",success)
          } else{
            console.log(id," not found",success)
          }
        })
      },
      adddata: function (desc) {
        this.create({
          status: " ",
          description: desc,
          tag: ""
        }).then(function (success) {
            console.log(desc,"been added to your todo list")
        })
      }
    }
  });
  return todos;
};
