'use strict';

//write your code here
let fs = require('fs');
let input = ""
let idx = 0
let jsonfile = require('jsonfile')
let model = require("./models/index")

process.argv.forEach((val, index, array) =>  {

  switch (val){
    case "help":
    console.log(`================TO-DO (HELP)=================`);
    console.log(`node todo.js list\nnode todo.js add <task_content>\nnode todo.js task <task_id>\nnode todo.js delete <task_id>\nnode todo.js complete <task_id>\nnode todo.js uncomplete <task_id>`);
    console.log(`=============================================`);
    break;

    case "list":
      console.log(`================TO-DO (LIST)=================`);
      model.todos.findAll({order:['id']}).then(function(todos){
        for (let index in todos){
      console.log((`ID : ${todos[index].id} ${todos[index].name} complete:${todos[index].complete}`));
      //console.log(`---------------------------------------------`);
    }
  })
    break;

    case "add":
    if(array.length > 3){
      let addName = ""
      for(let i = 3; i < array.length; i++){
        addName += array[i]+ " "
      }
      addName = addName.substring(0,addName.length-1)

      model.todos.create({
        name: addName,
        complete: false,
        createdAt: new Date(),
        updatedAt: new Date()
    })
    console.log('Sudah ditambahkan list ${addTemp} ');
  }
    break;

    case "delete":
    if(array.length > 3){
      let addName = ""
      for(let i = 3; i < array.length; i++){
        addName += array[i]+ " "
      }
      addName = addName.substring(0,addName.length-1)

      model.todos.create({
        name: addName,
        complete: false,
        createdAt: new Date(),
        updatedAt: new Date()
    })
    console.log('Sudah ditambahkan list ${addTemp} ');
  }
    break;

  }
});
