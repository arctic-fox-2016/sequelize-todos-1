"use strict"
let fs = require('fs');
let input = ""
let idx = 0
let jsonfile = require('jsonfile')
let model = require("./models/index")

process.argv.forEach((val, index, array) =>  {

  switch (val){
    case "help":
    console.log(`================TO-DO (HELP)=================`);
    console.log(`node todo.js list\nnode todo.js add <task_content>\nnode todo.js task <task_id>\nnode todo.js delete <task_id>\nnode todo.js complete <task_id>`);
    console.log(`=============================================`);
    break;

    case "list":
     console.log(`================TO-DO (LIST)=================`);
     model.todo.findAll({order:['id']}).then(function(todos){
       for (let index in todos){
     console.log((`ID : ${todos[index].id} ${todos[index].task} status:${todos[index].status}`));
     console.log(`---------------------------------------------`);
   }
 })
     break;


     case "add":
      if (array.length>3) {
        let newTask = ""
        for (let i = 3; i < array.length; i++) {
            newTask += array[i]+ " "
        }
        newTask = newTask.substring(0,newTask.length-1)

        model.todo.create(
          {
            task: newTask,
            status: false,
            createdAt: new Date(),
            updatedAt: new Date()
          }
        )
      }
    break;


    case "delete":
      let found = false
      let index = array[3]
      model.todo.destroy({
        where: {
          id: index
        }
      });
    break;


    case "complete":
      model.todo.update({
        status: true
      },{
          where: {
            id:array[3]
          }
        })
        console.log(`task id : ${array[3]} is completed`);
    break;

}
});
