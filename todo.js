'use strict';
let model = require('./models/index')
let repl = require("repl")
var Sequelize = require('sequelize');

class Generic{
	static addTask(task_name){
    model.Todo.create({task: task_name, status: 0})
	}

	static deleteTask(idx){
    model.Todo.destroy({
      where: {
        id: idx
      }
    })
	}

	static completeTask(idx){
    model.Todo.update({status: 1}, {where:{id: idx}})
  }

	static uncompleteTask(idx){
    model.Todo.update({status: 0}, {where:{id: idx}})
	}

	static displayTask(){
    model.Todo.findAll().then(function(todos){
      console.log("Status, Task Id, Task Name")
        for(let i in todos){
          if(todos[i].status == 0){
            console.log(`[ ] ${todos[i].id}, ${todos[i].task} `)
          } else {
            console.log(`[x] ${todos[i].id}, ${todos[i].task} `)
          }

        }
    })
  }

	static displayOutstanding(){
    model.Todo.findAll({where:{status: 0}}).then(function(todos){
      console.log("Status, Task Id, Task Name")
        for(let i in todos){
          onsole.log(`[ ] ${todos[i].id}, ${todos[i].task} `)
        }
    })
  }

	static displayCompleted(){
    model.Todo.findAll({where:{status: 1}}).then(function(todos){
      console.log("Status, Task Id, Task Name")
        for(let i in todos){
          console.log(`[x] ${todos[i].id}, ${todos[i].task}`)
        }
    })
	}

	static displayMenu(){
		console.log("1. Add Task: example: node todo.js add 'makan buah'")
		console.log("2. Delete Task: example: node todo.js delete '2'")
		console.log("3. Display Task: example: node todo.js display")
		console.log("4. Menu: example: node todo.js help")
		console.log("5. Display Outstanding: node todo.js display-outstanding")
		console.log("6. Display Completed: node todo.js display-completed")
	}
}

let replServer = repl.start({prompt:">"})
replServer.context.Generic = Generic
