const utilsCart = require("../models/utilsCart");

const getAllCart = (req, res) => {
  const allCart = utilsCart.getAll();
  res.json({ status: "OK", data: allCart });
};

const getById = (req, res) => {
  const { id } = req.params;
  const cart = utilsCart.getById(id);
  if (!cart) {
    res.json({ status: "False", result: `Cart '${id}' NO encontrado! ` });
  }
  res.json({ status: "OK", data: cart });
};

const createCart = (req, res) => {
  const { productos } = req.body;

  if (!productos) {
    res.status(404).json({
      status: "False",
      result: "Producto no cumple con el formato requerido!",
    });
  }

  const newCart = {
    id: utilsCart.getAll().length + 1,
    timestamp: new Date().toUTCString(),
    productos,
  };

  const createNewCart = utilsCart.createCart(newCart);
  if (!createNewCart) {
    res.status(404).json({
      status: "False",
      result: "Producto no cumple con el formato requerido!",
    });
  }
  res.status(201).json({ status: "Created", data: newCart });
  return createNewCart;
};

module.exports = {
  getAllCart,
  getById,
  createCart,
};
