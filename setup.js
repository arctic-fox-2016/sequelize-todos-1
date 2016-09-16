"use strict"

const sqlite = require('sqlite3').verbose()
let file = 'db/todos.db'
let db = new sqlite.Database(file)
