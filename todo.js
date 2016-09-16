'use strict';

//write your code here

var models = require('./models/index')

let help =() =>{
  console.log("\n\nHello, enter a command \n\n")
  console.log("help                : show this help")
  console.log("list                : to show all the list")
  console.log("add <task>          : to add new task")
  console.log("delete <number>     : to delete task number <number>")
  console.log("complete <number>   : to complete task number <number>")
  console.log("uncomplete <number> : to uncomplete task number <number>\n\n")
}

let cetakToDo = () => {
  models.todos.findAll({
    order:'id ASC'
  }).then(function(result){
    console.log('\n\nTo Do List\n\n');
    result.forEach((val) => {
      var temp = ""
      if (val.dataValues.is_check) {
        temp += '[x] '
      } else {
        temp += '[ ] '
      }
      temp += val.dataValues.id + '. '
      temp += val.dataValues.task
      console.log(temp)
    })
    console.log('\n\n')
  })
}

let addTask = (newData) => {
  models.todos.create({
    task: newData.task,
    is_check: false
  })
}

let deleteTask = (idx) => {
    models.todos.destroy({
    where: {id:idx}
  })
}

let completeTask = (idx) => {
  models.todos.update({
    is_check: true
  }, {
    where : {id:idx}
  })
  console.log('Task is completed')
}

let unCompleteTask = (idx) => {
    models.todos.update({
    is_check: false
  }, {
    where : {id:idx}
  })
  console.log('Task is completed')
}



var argu = process.argv

    switch (argu[2]) {
      case "help" :
        help()
        break;
      case "list" :
        cetakToDo()
        break
      case "add" :
        if (argu.length>3) {
          var argu3 = ""
          for (var i=3; i<argu.length; i++ ){
            argu3 += argu[i] + " "
          }
          addTask({task:argu3})
        } else {
          console.log("\n\n!!! Nothing to add")
        }
        break
        case "delete" :
          if (argu.length>3) {
            var argu3 = ""
            for (var i=3; i<argu.length; i++ ){
              argu3 += argu[i] + " "
            }
            deleteTask(argu3)
          } else {
            console.log("\n\n!!! Nothing to delete")
          }
          break
      case "uncomplete" :
        if (argu.length>3) {
          unCompleteTask(argu[3])
        } else {
          console.log("\n\n!!! Enter list number")
        }
        break
        case "complete" :
          if (argu.length>3) {
            completeTask(argu[3])
          } else {
            console.log("\n\n!!! Enter list number")
          }
          break
      default :
        help()
    }
