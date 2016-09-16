'use strict';

const models = require("./models")
let prompt = require('prompt')
let numSchema = { properties: { number: { pattern: /\d/, message: 'Only number input is accepted', required: true }}}
let textSchema = { properties: { text: { pattern: /[a-zA-Z]/, message: 'Only number input is accepted', required: true }}}
prompt.start()

class Controller {
  static start() {
    Controller.header()
    Controller.main()
  }

  static header() {
    console.log("\x1Bc=====================")
    console.log("Welcome to Todos List")
    console.log("=====================\n")
  }

  static main() {
    console.log("What would you like to do?\n")
    console.log("[1] See all completed/incomplete tasks")
    console.log("[2] Create new task")
    console.log("[3] Mark task as complete")
    console.log("[4] Delete task")
    console.log("[5] Exit program")
    prompt.get(numSchema, function (err, n) {
      switch (n.number) {
        case "1":
        Controller.read().then(function(data) {
          Controller.main()
        })
        break
        case "2":
        Controller.create()
        break
        case "3":
        Controller.complete()
        break
        case "4":
        Controller.delete()
        break
        case "5":
        default:
        console.log("Have a great day!")
        prompt.stop()
      }
    })
  }

  static read() {
    return models.todos.findAll().then(function(data) {
      console.log(`\x1Bc==================================================`)
      console.log(`List of incomplete & completed tasks`)
      console.log(`==================================================`)
      console.log(` ID    Completed Date    Task`)
      for (let i = 0; i < data.length; i++) {
        let id = Controller.padSpace(data[i].dataValues.id, 3)
        if (data[i].dataValues.completedAt != null) {
          let yyyy = data[i].dataValues.completedAt.getFullYear()
          let mm = Controller.padZero(data[i].dataValues.completedAt.getMonth(), 2)
          let dd = Controller.padZero(data[i].dataValues.completedAt.getDate(), 2)
          console.log(`${id}    ${yyyy}-${mm}-${dd}        ${data[i].dataValues.task}`)
        } else {
          console.log(`${id}                      ${data[i].dataValues.task}`)
        }
      }
      console.log(`==================================================\n`)
    })
  }

  static create() {
    Controller.header()
    console.log("What new task would you like to create?\n")

    prompt.get(textSchema, function (err, data) {
      models.todos.create({
        task: data.text,
      }).then(function(callback) {
        Controller.read().then(function(db) {
          console.log(`Created new task: ${data.text}`)
          Controller.main()
        })
      })
    })
  }

  static complete() {
    Controller.read().then(function(db) {
      console.log("Which task would you like to mark as complete?\n")

      prompt.get(numSchema, function (err, data) {
        models.todos.find({
          where: {
            id: data.number
          }
        }).then(function(db) {
          db.updateAttributes({
            completedAt: new Date()
          })
          Controller.read().then(function(db) {
            console.log(`Marked as complete for task ID: ${data.number}`)
            Controller.main()
          })
        })
      })
    })
  }

  static delete() {
    Controller.read().then(function(data) {
      console.log("What task would you like to delete?\n")

      prompt.get(numSchema, function (err, data) {
        models.todos.destroy({
          where: {
            id: data.number
          }
        }).then(function(callback) {
          Controller.header()
          console.log(`Deleted task ID: ${data.number}`)
          Controller.main()
        })
      })
    })
  }

  static padZero(num, size) {
    var s = num + "";
    while (s.length < size) s = "0" + s;
    return s;s
  }

  static padSpace(num, size) {
    var s = num + "";
    while (s.length < size) s = " " + s;
    return s;s
  }
}

// TodosController.create("Revive harambe")
Controller.start()
