var fs = require("fs");
var content = fs.readFileSync("data.json");
var jsonfile = require('jsonfile')
var jsonContent = JSON.parse(content);
let input = ""
let index = 0
var file = 'data.json'
let model = require("./models/index")


process.argv.forEach((val,index,array)=> {
  switch (val) {
    case "list":
      model.todos.findAll({order:['id']}).then((todos)=>{
        for(let index in todos){
          console.log(`Task Id :${todos[index].id} ${todos[index].task} complete: ${todos[index].complete} `);
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

        model.todos.create(
          {
            task: newTask,
            complete: false,
            createdAt: new Date(),
            updatedAt: new Date()
          }
        )
        console.log(`Added ${newTask} to your to do list`);
      }
    break;

    case "delete":
      let found = false
      let index = array[3]
      model.todos.destroy({
        where: {
          id: index
        }
      });
    break;

    case "complete":
      model.todos.update({
        complete: true
      },{
          where: {
            id:array[3]
          }
        })
        console.log(`task id : ${array[3]} is completed`);
    break;
  }
});
