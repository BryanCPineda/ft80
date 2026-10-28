const { Pool } = require("pg")

const { loadEnvFile } = require("node:process")

loadEnvFile(".env")

const configConnection = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    max: process.env.DB_MAX,
    idleTimeoutMillis: process.env.DB_IDLETIMEOUTMILLIS,
    connectionTimeoutMillis:process.env.DB_CONNECTIONTIMEOUT 
}

const pool = new Pool(configConnection)

module.exports = {
  pool
}




