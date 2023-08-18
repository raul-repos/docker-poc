const express = require('express')
const mongoose = require('mongoose')

const server = express()

mongoose.connect("mongodb://usertest:passtest@mongo:27017/?authSource=admin")
.then(() => console.log('connection with DB: success'))
.catch(e => console.log(e))

server.get('/', (req,res) => {
  res.send('<h3> Server is running!!</h3>')
})

const PORT = process.env.PORT || 3000

server.listen(PORT, () => console.log(`listening on port ${PORT}`))

