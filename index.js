//* RESPONSABILIDAD: levantar el servidor

const { pool } = require("./src/config/dbConnect");
const { PORT } = require("./src/config/envs");
const { initializeDB } = require("./src/config/initDb")
const { server } = require("./src/server")

async function startServer(){
  try {
      await pool.query('SELECT 1')
      console.log('conexion con la db realizada con exito');

      await initializeDB()

      server.listen( PORT, () => {
          console.log(`Server listen on port ${PORT}`)
      })


  } catch (error) {
    console.log(`error al levantar el servidor:`, error)
  }
}

startServer()








