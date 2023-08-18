const express = require('express')
const mongoose = require('mongoose')
const { MONGO_USER, MONGO_PASSWORD, MONGO_IP, MONGO_PORT, PORT } = require('./config/config')

const server = express()

const MONGO_URL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`

mongoose.connect(MONGO_URL)
.then(() => console.log('connection with DB: success'))
.catch(e => console.log(e))

server.get('/', (req,res) => {
  res.send('<h3> Server is running!!</h3>')
})

server.listen(PORT, () => console.log(`listening on port ${PORT}`))

