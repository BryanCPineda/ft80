//* RESPONSABILIDAD: crear el router y exportarlo

const { Router } = require("express")
const { healthyController, getProductosController, createdProductController } = require("../controllers/productos.controller")
const { validateProductData } = require("../middlewares")

const router = Router()

router.get("/", healthyController)

router.get("/productos", getProductosController)

router.post("/productos", validateProductData, createdProductController)


module.exports = {
  router
}