//* RESPONSABILIDADES: 
/**
 * *   1. recibir la informacion de la solicitud -  request - req.params, req.query, req.body
 * *   2. llama al servicio encargado de conectarse con la base de datos.
 * *   3. contestar al cliente - res.status().json()
 */

const { getProductoService } = require("../services/productos.service")


const healthyController = (req, res) => {
    res.status(200).json({
      msg: 'server ok'
    })
}

const getProductosController = (req, res) => {
    const productos = getProductoService()
    res.status(200).json({
      msg: 'informacion de los productos',
      data: productos
    })
}

module.exports = {
  healthyController,
  getProductosController
}


