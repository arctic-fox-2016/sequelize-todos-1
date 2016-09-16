'use strict';

import Controller from './controller/controller.js'


let arg = process.argv
if(arg.length < 3){
      console.log("Silahkan tambahkan argumen")
      console.log("contoh : node todos.js help")
      Controller.help()
} else{
let command = arg[2]
let commandArg = arg.slice(3,arg.length).join(" ")
switch (command) {
  case "help":
        Controller.help()
        break;
  case 'list':
        Controller.list()
        break;
  case 'add':
        Controller.adddata(commandArg)
        break;
  case 'task':
        Controller.task(commandArg)
        break;
  case 'complete':
        Controller.completetion(commandArg)
        break;
  case 'uncomplete':
        Controller.uncomplete(commandArg)
        break;
  case 'delete':
        Controller.delete(commandArg)
        break;
  default:
        Controller.help()

}
}
