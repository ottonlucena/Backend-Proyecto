const utils = require("../models/utils");

const getAllProducts = (req, res) => {
  const allProducts = utils.getAll();
  res.json({ status: "OK", data: allProducts });
};

const getById = (req, res) => {
  const { id } = req.params;
  const product = utils.getById(id);
  if (!product) {
    res.json({ status: "False", result: `No se encontró ID ${id}` });
  }
  res.json({ status: "OK", data: product });
};

const createProduct = (req, res) => {
  const { nombre, descripcion, foto, precio, stock } = req.body;

  if (!nombre || !descripcion || !foto || !precio || !stock) {
    res.status(404).json({
      status: "False",
      result: "Producto no cumple con el formato requerido!",
    });
  }

  const newPorduct = {
    id: utils.getAll().length + 1,
    timestamp: new Date().toUTCString(),
    nombre,
    descripcion,
    codigo: Math.floor(Math.random() * 100),
    foto,
    precio,
    stock,
  };

  const createNewProduct = utils.createProduct(newPorduct);
  if (!createNewProduct) {
    res.status(404).json({
      status: "False",
      result: `Producto con el nombre '${nombre}' creado.`,
    });
  }
  res.status(201).json({ status: "OK", data: createNewProduct });
  return createNewProduct;
};

const updateProduct = (req, res) => {
  const { id } = req.params;
  const { body } = req;

  if (!id) {
    return;
  }

  const updateOneProduct = utils.updateProduct(id, body);
  res.json({ statu: "OK", result: updateOneProduct });
};

const deleteProduct = (req, res) => {
  const { id } = req.params;

  const deleteOneProduct = utils.deleteOneProduct(id);
  res.json({ status: "OK", result: deleteOneProduct });
};

module.exports = {
  getAllProducts,
  getById,
  createProduct,
  updateProduct,
  deleteProduct,
};
