const { pool } = require("./dbConnect")

const initializeDB = async () => {

  await pool.query(`
    CREATE TABLE IF NOT EXISTS productos(
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      price INT NOT NULL  
    )
    `)
    
  const resultado = await pool.query(`SELECT COUNT(*)::int AS total FROM productos`)

  if(resultado.rows[0].total === 0){
    await pool.query(`INSERT INTO productos(name, price) VALUES($1 , $2), ($3, $4)`, ['television', 12345, 'pantalla', 738126])
  }

}

module.exports = {
  initializeDB
}