const { Pool } = require("pg")
const { loadEnvFile } = require("node:process")
const { DB_HOST, DB_PORT, DB_DATABASE, DB_USER, DB_PASSWORD, DB_MAX, DB_IDLETIMEOUTMILLIS, DB_CONNECTIONTIMEOUT } = require("./envs")





const configConnection = {
    host: DB_HOST,
    port: DB_PORT,
    database: DB_DATABASE,
    user: DB_USER,
    password: DB_PASSWORD,
    max: DB_MAX,
    idleTimeoutMillis: DB_IDLETIMEOUTMILLIS,
    connectionTimeoutMillis: DB_CONNECTIONTIMEOUT
}

const pool = new Pool(configConnection)

module.exports = {
  pool
}




