'use strict';

//write your code here
class Program{
	constructor(){
    this.model = require('./models/index')
    this.todos = this.model.todo
	}

	tasklist(){
    console.log("\n===================================================================================================================\n")
    console.log("Ini to-do-list kamu!\n")

    this.todos.findAll().then(function(todo){ //view data
      for(var i=0;i<todo.length;i++){
        console.log((i+1) + ". " + todo[i].activity + " || Status: " + todo[i].status + " || Created At: " + todo[i].createdAt.toLocaleString() + " || Updated At: " + todo[i].updatedAt.toLocaleString())
      }
      console.log("\n===================================================================================================================")
    })
	}

	addtask(input){
    this.todos.create({ activity: input, status: "[ ]" }).then(function() {
      console.log(input + " berhasil ditambahkan!")
    })
	}

	deletetask(input){
    this.todos.destroy({ //delete data
      where: { activity: input }
    }).then(function(success) {
      if(!success[0]){
        console.log(input + " berhasil didelete!")
      }
      else{
        console.log(input + " tidak ditemukan!")
      }
	  })
	}

	checktask(input){
    this.todos.update( //update data
      { status: '[X]' },
      { where: { activity: input }}
    ).then(function(success) {
      if(success[0]){
        console.log(input + " berhasil dicheck!")
      }
      else{
        console.log(input + " tidak ditemukan!")
      }
	  })
	}

	unchecktask(input){
    this.todos.update( //update data
      { status: '[ ]' },
      { where: { activity: input }}
    ).then(function(success) {
      if(success[0]){
        console.log(input + " berhasil diuncheck!")
      }
      else{
        console.log(input + " tidak ditemukan!")
      }
	  })
  }

	displaymenu(){
		console.log("\nPilih menu berikut untuk memulai program!\n")
		console.log("1. Add Task - node todos.js add <task-name>")
		console.log("2. Delete Task - node todos.js delete <task-name>")
		console.log("3. Check Task - node todos.js check <task-name>")
		console.log("4. Uncheck Task - node todos.js uncheck <task-name>")
    this.tasklist()
	}

	start(){
    let tempargv = []

    for(let i=3;i<process.argv.length;i++){
      tempargv.push(process.argv[i])
    }

    let argv = tempargv.join(" ")

		switch (process.argv[2]) {
			case "add":
				this.addtask(argv)
				break
			case "delete":
			 	this.deletetask(argv)
				break
			case "check":
				this.checktask(argv)
				break
			case "uncheck":
				this.unchecktask(argv)
				break
			default:
				this.displaymenu()
				break
		}
	}
}

let todolist = new Program
todolist.start()
