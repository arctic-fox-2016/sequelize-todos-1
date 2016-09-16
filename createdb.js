"use strict"

var fs = require('fs')

fs.open('db/todos.db', 'wx', function (err, fd) {
  fs.close(fd, function (err) {
    // console.error("Ooopps, something happen! ", err)
  })
})
