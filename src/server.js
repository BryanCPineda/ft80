//* RESPONSABILIDAD: crear y configurar el servidor

const express = require("express")
const { router } = require("./routes")
const { requestLogger } = require("./middlewares")
const swaggerUI = require('swagger-ui-express')
const { swaggerDocument } = require("./config/swagger")

const server = express()

server.use(requestLogger)
server.use(express.json())

server.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument))

server.use(router)

module.exports = {
  server
}