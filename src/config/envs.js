const { loadEnvFile } = require("node:process")


if(process.env.NODE_EV != 'production'){
  loadEnvFile(".env")
}

const PORT = process.env.PORT
const DB_HOST = process.env.DB_HOST
const DB_PORT = process.env.DB_PORT
const DB_DATABASE = process.env.DB_DATABASE
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_MAX = process.env.DB_MAX
const DB_IDLETIMEOUTMILLIS = process.env.DB_IDLETIMEOUTMILLIS
const DB_CONNECTIONTIMEOUT = process.env.DB_CONNECTIONTIMEOUT

const DATABASE_URL = process.env.DATABASE_URL


module.exports = {
  PORT,
  DB_HOST,
  DB_PORT,
  DB_DATABASE,
  DB_USER,
  DB_PASSWORD,
  DB_MAX,
  DB_IDLETIMEOUTMILLIS,
  DB_CONNECTIONTIMEOUT,
  DATABASE_URL
}