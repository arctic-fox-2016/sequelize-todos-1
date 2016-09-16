"use strict"
var fs = require("fs");
var content = fs.readFileSync("data.json");
var jsonfile = require('jsonfile')
var jsonContent = JSON.parse(content);
let input = ""
let idx = 0
var file = 'data.json'
let model = require("./models/index")

process.argv.forEach((val,index,array)=> {
  switch (val) {
    case "help":
      console.log(`node todo.js list\nnode todo.js add <task_content>\nnode todo.js delete <task_id>\nnode todo.js complete <task_id>\nnode todo.js uncomplete <task_id>`)
    break;
    case "list":
      model.Todos.findAll({order:['id']}).then(function(todos){
        for(let idx in todos){
          console.log(`${todos[idx].id} - ${todos[idx].name} - ${todos[idx].status} `);
        }
      })
    break;
    case "add":
      if (array.length>3) {
        let tempAdd = ""
        for (let i = 3; i < array.length; i++) {
            tempAdd += array[i]+ " "
        }
        tempAdd = tempAdd.substring(0,tempAdd.length-1)

        model.Todos.create(
          {
            name:tempAdd,
            status: '[ ]',
            createdAt: new Date(),
            updatedAt: new Date()
          }
        )
        console.log(`Added ${tempAdd} to your to do list`);
      }

    break;
    case "delete":
      let found = false
      let idx = array[3]
      model.Todos.findAll({
        where: {
          id: idx
        }
      }).then(function(todos){
          console.log(`${todos[0].id} - ${todos[0].name} - ${todos[0].status} `);
      });
    break;
    case "complete":
      model.Todos.update({
        status: '[X]'
      },{
          where: {
            id:array[3]
          }
        })
        console.log(`task id : ${array[3]} is completed`);
    break;
    case "uncomplete":
    model.Todos.update({
      status: '[ ]'
    },{
        where: {
          id:array[3]
        }
      })
      console.log(`task id : ${array[3]} is uncompleted`);
    break;
  }
});
