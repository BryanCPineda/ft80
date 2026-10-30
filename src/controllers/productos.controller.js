//* RESPONSABILIDADES: 
/**
 * *   1. recibir la informacion de la solicitud -  request - req.params, req.query, req.body
 * *   2. llama al servicio encargado de conectarse con la base de datos.
 * *   3. contestar al cliente - res.status().json()
 */

const { getProductoService, createdProductService } = require("../services/productos.service")


const healthyController = (req, res) => {
    res.status(200).json({
      msg: 'server ok'
    })
}

const getProductosController = async (req, res) => {

    try {
      const productos = await getProductoService()
      res.status(200).json({
        msg: 'informacion de los productos',
        data: productos
      })
    } catch (error) {
      res.status(500).json({
        msg: 'error del servidor',
        error: error.message
      })
    }

}

const createdProductController = async (req, res) => {

  const respuesta = await createdProductService(req.body)
  
  res.status(201).json({
    msg: 'producto creado con exito',
  })

}

module.exports = {
  healthyController,
  getProductosController,
  createdProductController
}


