'use strict';

class System {

  static clearScreen() {
    console.log('\n\x1Bc');
  }

  static printHome() {
    console.log('$ babel-node todo.js list');
    console.log('$ babel-node todo.js add <new_task>');
    console.log('$ babel-node todo.js remove <task_id>');
    console.log('$ babel-node todo.js complete <task_id>');
  }

  static newLine(count) {
    for (let i = 0; i < count; i++) {
      console.log('\n');
    }
  }
  static logicStart() {
    System.clearScreen()
    System.printHome()
    System.newLine(3)

    switch (process.argv[2]) {
    case 'list':
      console.log('a');
      break;
    case 'add':
      break;
    case 'delete':
      break;
    case 'complete':
      break;
    default:
      console.log('default');
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
}

class List {
  constructor(property = {}) {
    this.list = []
  }
  set list(value) {
    this.list.push(value)
  }
  get list() {
    return this.list
  }
}





System.logicStart()
