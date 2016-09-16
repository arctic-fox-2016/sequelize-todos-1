var model = require('../models')

class Controller {
  constructor() {

  }
  static help() {
    console.log("-------------TODO-----------------")
    console.log("node todo.js list")
    console.log("node todo.js add <taskId>")
    console.log("node todo.js task <taskId>")
    console.log("node todo.js delete <taskId>")
    console.log("node todo.js completetion <taskId>")
    console.log("node todo.js uncomplete <taskId>")
    console.log("")
    console.log("")
    console.log("_____________________________by: $ahbana")
  }
  static list() {
    model.todos.findAll({}).then(function(results){
      results.forEach((val)=>{
        console.log(`${val.id}. [${val.status}] ${val.description}, last update: ${val.updatedAt} | tag:${val.tag}`);
      })
    })
  }
  static task(id) {
    model.todos.find({
      where: {
        Id: id
      }
    }).then(function(val){
      if(!val) {
        console.log("task not found")
      } else{
        console.log(`${val.id}. [${val.status}] ${val.description}, last update: ${val.createdAt} | tag:${val.tag}`);
      }
    })
  }
  static completetion(id) {
    model.todos.find({
      where: {
        Id: id
      }
    }).then(function(val){
      if(val) {
    model.todos.update({
      status: "X",
      updatedAt: new Date()
    },{
      where: {
        Id: id
      }
    })
    console.log(`task: ${val.description},  completed`)
  } else{
    console.log(id," not found")
  }
})
}
static uncomplete(id) {
  model.todos.find({
    where: {
      Id: id
    }
  }).then(function(val){
    if(val) {
  model.todos.update({
    status: " ",
    updatedAt: new Date()
  },{
    where: {
      Id: id
    }
  })
  console.log(`task: ${val.description}, set to uncompleted`)
} else{
  console.log(id," not found")
}
})
  }
  static delete(id) {

    model.todos.destroy({
      where: {
        Id: id
      }
    }).then(function (success) {
      if(!success[0]){
        console.log(id,"been deleted",success)
      } else{
        console.log(id," not found",success)
      }
    })
  }
  static adddata(desc) {
    model.todos.create({
      status: " ",
      description: desc,
      tag: ""
    }).then(function (success) {
        console.log(desc,"been added to your todo list")
    })
  }
}

export default Controller
