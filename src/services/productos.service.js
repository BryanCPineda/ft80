
const productos = [
  {
    id: 1,
    name: 'producto 1',
    price: 128736
  },
  {
    id: 2,
    name: 'producto 2',
    price: 23434
  }
]


const getProductoService = () => {
    return productos
}


module.exports = {
  getProductoService
}