const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const database = require('./models/database')
database.connect()

//const das rotas
const index = require('./routes/index')
const users = require('./routes/usersRouter')

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
});

app.use(bodyParser.json());
app.use('/', index);
app.use('/archic', users)

module.exports = app