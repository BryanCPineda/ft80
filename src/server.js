//* RESPONSABILIDAD: crear y configurar el servidor

const express = require("express")
const { router } = require("./routes")
const { requestLogger } = require("./middlewares")

const server = express()

server.use(requestLogger)
server.use(express.json())

server.use(router)

module.exports = {
  server
}