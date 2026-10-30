

const validateProductData = (req, res, next) => {

    const { name, price } = req.body

    if(!name || !price){
      return res.status(400).json({
        msg: 'falta informacion para poder crear el producto, name o price'
      })
    }

    next()

}


const requestLogger = (req, res, next) => {

    const startTime = Date.now()
    const { method, originalUrl } = req

    res.on("finish", () => {
      const timestamp = new Date().toISOString()
      const durationMs = Date.now() - startTime
      const hasBody = req.body && Object.keys(req.body).length > 0
      const body = hasBody ? JSON.stringify(req.body) : "-"

      console.log(
        `[${timestamp}] ${method} ${originalUrl} - ${res.statusCode} - ${durationMs}ms - body:${body}`
      )
    })

    next()

}

module.exports = {
  validateProductData,
  requestLogger
}