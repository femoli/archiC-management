const express = require("express")
const app = express()

const database = require('./model/database')
database.connect()

//rotas
const index = require("./routes/index")
const contatos = require("./routes/contatosRoute")
const bodyParser = require("body-parser")

app.use(function (request, response, next) {
  response.header("Access-Control-Allow-Origin", "*")
  response.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
})

//middleware
app.use(bodyParser.json());

//rotas
app.use("/", index)

module.exports = app
