'use strict'

const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000

const server = app.listen(PORT, () => {
  console.log(`Landing started at port ${PORT}`)
})

app.set('json spaces', 2)

// parse application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res) => {
  res.json({
    message: 'Hello!'
  })
})


// this function is called when you want the server to die gracefully
// i.e. wait for existing connections
const gracefulShutdown = () => {
  console.log(`Received kill signal, shutting down gracefully.`)
  server.close(() => {
    console.log(`Closed out remaining connections.`)
    process.exit()
  });

   // impose a ten second maximum shutdown time
   // some browsers keep the sockets open for a prolonged period
   setTimeout(() => {
    console.error(`Could not close connections in time, forcefully shutting down`)
    process.exit()
  }, 10 * 1000)
}

// listen for TERM signal .e.g. kill
process.on ('SIGTERM', gracefulShutdown)

// listen for INT signal e.g. Ctrl-C
process.on ('SIGINT', gracefulShutdown)
