"use strict"

let input = ""
let idx = 0
let model = require("./models/index")

process.argv.forEach((val,index,array)=> {
  // console.log(`${index} : ${val}`);
  switch (val) {
    case "help":
      console.log(`node todo.js list\nnode todo.js add <task_content>\nnode todo.js task <task_id>\nnode todo.js delete <task_id>\nnode todo.js complete <task_id>\nnode todo.js uncomplete <task_id>`)
    break;
    case "list":
      // for (var i = 0; i < jsonContent.length; i++) {
      //   console.log(`${i+1}. ${jsonContent[i].status} ${jsonContent[i].task}`);
      // }
      model.Users.findAll({
      attributes: ['full_name', 'task','status']
    }).then(function(users){
      for (var i = 0; i < users.length; i++) {
        console.log(`${i+1}. ${users[i].status} ${users[i].task}`);
      }
    })


    break;
    case "add":

      if (array.length>3) {
        let tempAdd = ""
        for (let i = 3; i < array.length; i++) {
            tempAdd += array[i]+ " "
        }
        tempAdd = tempAdd.substring(0,tempAdd.length-1)

        model.Users.create({ full_name: 'Pale Men',task:tempAdd,status:'[ ]', updatedAt: new Date(),createdAt:new Date()}).then(function(task) {
        })
        console.log(`Added ${tempAdd} to your to do list`);
      }

    break;
    case "task":
      if(array.length>3){
        console.log(jsonContent[array[3]-1])
      }
    break;
    case "delete":

//     model.Users.findAll({
//   where: {
//     id: 1
//   }
// });
//

//

//
// model.Users.findAll().then(function(users) {
//   for (let i=0;i<users.length;i++){
//     if (array[3]==users[i].id) {
//       model.Users.destroy({
//         where: {
//           id: array[3]
//         }
//       });
//     }
//   }
// })

model.Users.findAll({
  where: {
    id: array[3]
}

}).then(function(users) {
  model.Users.destroy({
        where: {
          id: array[3]
        }
      });
})
      // if (array[3]<=jsonContent.length) {
      //       jsonContent.splice(array[3]-1,1)
      //       jsonfile.writeFileSync(file, jsonContent)
      //       found=true
      //       console.log(`data ${array[3]} has been deleted`);
      //     }

      //else console.log("Task ID is not found")
    break;
    case "complete":
      if (array[3]<=jsonContent.length) {
        jsonContent[array[3]-1].status="[X]"
        jsonfile.writeFileSync(file, jsonContent)
        console.log(`task id : ${array[3]} is completed`);
      }
      else console.log("Task ID is not found")
    break;
    case "uncomplete":
    if (array[3]<=jsonContent.length) {
      jsonContent[array[3]-1].status="[ ]"
      jsonfile.writeFileSync(file, jsonContent)
      console.log(`task id : ${array[3]} is uncompleted`);
      }
    else console.log("Task ID is not found")

    break;
  }
  // if(val=="help"){
  //     console.log(`node todo.js list\nnode todo.js add <task_content>\nnode todo.js task <task_id>\nnode todo.js delete <task_id>\nnode todo.js complete <task_id>\nnode todo.js uncomplete <task_id>`)
  // }
  // if(val=="list"){


  //}

  //if(index>1) kalimat+=(`${val} `);
  //help
  //for (index=2; i < index.length; indext++) {
  //  val
  //}



});
