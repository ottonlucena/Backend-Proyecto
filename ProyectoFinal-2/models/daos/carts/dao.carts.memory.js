const MemoryContainer = require("../../containers/memory.container");

class DaoCartsMemory extends MemoryContainer {
  constructor() {
    super("carts");
  }
  addProducToCart(cartId, productId) {
    const carrito = this.getById(cartId);
    carrito.productos.push(productId);
  }

  removeProductFromCart(cartId, productId) {
    const carrito = this.getById(cartId);
    const productIndex = carrito.productos.findIndex(
      (idProduct) => idProduct === productId
    );
    if (productIndex < 0) {
      const msg = `${this.resource} no exist en registro ${id}`;
      throw new HttpError(HTTP_STATUS.NOT_FOUND, msg);
    }
    //cambia el arrays original y devuelve el eliminado
    return carrito.productos.splice(productIndex, 1);
  }
}

module.exports = DaoCartsMemory;
