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
		console.log("1. To display current list of task: in Repl, type Generic.displayTask()")
		console.log("2. To add new task to the list: in Repl, type Generic.addTask([TaskName])")
		console.log("3. To delete task from the list: in Repl, type Generic.deleteTask([TaskId])")
		console.log("4. To complete task: in Repl, type Generic.completeTask([TaskId])")
		console.log("5. To uncomplete task: in Repl, type Generic.uncompleteTask([TaskId])")
	}
}

let replServer = repl.start({prompt:">"})
replServer.context.Generic = Generic
