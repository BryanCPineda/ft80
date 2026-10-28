//* RESPONSABILIDAD: crear el router y exportarlo

const { Router } = require("express")
const { healthyController, getProductosController } = require("../controllers/productos.controller")

const router = Router()

router.get("/", healthyController)
router.get("/productos", getProductosController)

module.exports = {
  router
}