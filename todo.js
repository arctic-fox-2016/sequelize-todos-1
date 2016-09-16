'use strict';
const fs = require('fs');
const repl = require('repl'); // optional
// const sqlite = require('sqlite3').verbose();
var file = 'tododb';
// var db = new sqlite.Database(file);
// let content = fs.readFileSync('contacts.json', 'utf8')
// let parse = JSON.parse(content)
let models = require('./models/index')

class System {

  static clearScreen() {
    console.log('\n\x1Bc');
  }

  static printHome() {
    console.log('=============To Do List=================');
    System.newLine(1)
    console.log('Type some action :');
    System.newLine(1)
    console.log('$ node todo.js list                          >>>> View All Tasks');
    console.log('$ node todo.js add <new_task>                >>>> Add New Task');
    console.log('$ node todo.js remove <task_id>              >>>> Remove selected Task');
    console.log('$ node todo.js complete <task_id>            >>>> Set Task to complete');
    console.log('$ node todo.js uncomplete <task_id>          >>>> Set Task to uncomplete');
    console.log('$ node todo.js suo <task_id>                 >>>> Set list to see uncomplete only');

  }

  static newLine(count) {
    for (let i = 0; i < count; i++) {
      console.log('\n');
    }
  }
  static logicStart() {
    System.clearScreen()
    System.newLine(1)
    System.printHome()
    System.newLine(1)


    // if (process.argv.length < 3) {
    //   System.clearScreen()
    //   System.printHome()
    //   System.newLine(3)
    //
    // }
    switch (process.argv[2]) {
    case 'list':
      Task.viewList()
      break;
    case 'add':
      let arg = process.argv
      let arg3 = arg.slice(3, arg.length).join(" ")
      Task.writeTask(arg3)
      break;
    case 'delete':
      let argd = process.argv[3]
      Task.deleteTask(argd)
      break;
    case 'complete':
      let argc = process.argv[3]
      Task.setCompleted(argc)
      break;
    case 'uncomplete':
      let argu = process.argv[3]
      Task.setUncompleted(argu)
      break;
    case 'suo':
      Task.viewUncompleted()
      break;
    case 'help':
      System.printHome()
    default:
      break;
    }

  }
}


class Task {
  constructor(property) {
    this.name = property['name']
    this.completed = property['completed'] || false
  }
  set name(value) {
    this.name = value
  }
  get name() {
    return this.name
  }
  set completed(value) {
    this.completed = value
  }
  get completed() {
    return this.completed
  }
  static writeTask(value) {
    models.tasks.create({
      name: `${value}`,
      completed: false
    }).then(function (task) {})
    console.log(`Task "${value}" was added !`);
    Task.viewList()
  }
  static setCompleted(value) {
    models.tasks.update({
      completed: true
    }, {
      where: {
        id: `${value}`
      }
    })
    console.log(`Task no.${value} was set to complete`);
    Task.viewList()
  }

  static setUncompleted(value) {
    models.tasks.update({
      completed: false
    }, {
      where: {
        id: `${value}`
      }
    })
    console.log(`Task no.${value} was set to uncomplete`);
    Task.viewList()
  }

  static viewList() {
    models.tasks.findAll({
      order: 'id ASC'
    }).then(function (tasks) {
      console.log(`Status | Task id | Task name`);
      for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].dataValues.completed == false) {
          console.log(`[ ] ${tasks[i].dataValues.id}. ${tasks[i].dataValues.name}`);
        } else {
          console.log(`[x] ${tasks[i].dataValues.id}. ${tasks[i].dataValues.name}`);
        }
      }
    });
  }
  static viewUncompleted() {
    models.tasks.findAll({
      order: 'id ASC'
    }).then(function (tasks) {
      console.log(`Task have to be done :`);
      console.log(`Status | Task id | Task name`);
      for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].dataValues.completed == false) {
          console.log(`[ ] ${tasks[i].dataValues.id}. ${tasks[i].dataValues.name}`);
        }
      }
    });
  }
  static deleteTask(value) {
    models.tasks.destroy({
      where: {
        id: `${value}`
      }
    })
    console.log(`Task no.${value} was deleted`);
    Task.viewList()
  }
}
System.logicStart()
