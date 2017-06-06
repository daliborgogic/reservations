'use strict'

const express = require('express')
const app = express()
const helmet = require('helmet')
const favicon = require('serve-favicon')
const path = require('path')

const PORT = process.env.PORT || 3000

const server = app.listen(PORT, () => {
  console.log(`Service reserve started at port ${PORT}`)
})

app.set('json spaces', 2)
app.use(helmet())
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

app.get('/v1', (req, res) => {
  res.json({
    status: {
      code: 400,
      description: 'incorrect or missing API key'
    },
    api_version: '1.0.0',
    format: "json",
    api_key: null
  })
})

app.get('/v1/stats/:key', (req, res) => {
  let key = req.param('key') || 'lol'
  res.json({
    countries: 4,
    cities: 45,
    places: 453,
    key: key
  })
})

app.get('/v1/cities', (req, res) => {
  res.json({
    count: 3,
    page: 1,
    cities: [
      'Beograd',
      'Novi Sad',
      'Indjija'
    ]
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
