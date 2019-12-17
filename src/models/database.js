const mongoose = require("mongoose")
const DB_URL = "mongodb://localhost:27017/archiC"

const connect = () => {
  mongoose.connect(DB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true })
  const connection = mongoose.connection
  connection.on('error', () => console.error('sorry, ur not connect this time'))

  connection.once('open', () => console.log('yeah, connect to mongobd'))
}

module.exports = { connect }
