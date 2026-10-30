const { pool } = require("../config/dbConnect")

const getProductoService = async () => {
  const respuesta = await pool.query(`SELECT * FROM productos`)
  return respuesta.rows
}

const createdProductService = async (infoProducto) => {

  const respuesta = await pool.query(`INSERT INTO productos(name, price) VALUES ($1, $2)`, [infoProducto.name, infoProducto.price])
  return respuesta.rows

}

module.exports = {
  getProductoService,
  createdProductService
}