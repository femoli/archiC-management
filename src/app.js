const express = require("express")
const app = express()

const database = require('./models/database')
database.connect()

//rotas
const index = require("./routes/index")
const projects = require("./routes/projectsRouter")
const bodyParser = require("body-parser")

app.use(function (request, response, next) {
  response.header("Access-Control-Allow-Origin", "*")
  response.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
})

app.use(bodyParser.json());

app.use("/", index)
app.use("/archic", projects )

module.exports = app
