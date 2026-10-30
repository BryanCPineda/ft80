//* RESPONSABILIDAD: levantar el servidor

const { pool } = require("./src/config/dbConnect")
const { initializeDB } = require("./src/config/initDb")
const { server } = require("./src/server")

const { loadEnvFile } = require("node:process")
loadEnvFile(".env")

async function startServer(){
  try {
      await pool.query('SELECT 1')
      console.log('conexion con la db realizada con exito');

      await initializeDB()

      server.listen( process.env.PORT, () => {
          console.log(`Server listen on port ${process.env.PORT}`)
      })


  } catch (error) {
    console.log(`error al levantar el servidor:`, error)
  }
}

startServer()








