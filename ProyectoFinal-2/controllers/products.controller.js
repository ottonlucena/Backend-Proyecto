const { HTTP_STATUS } = require("../constants/api.constants");
const { ProductsDao } = require("../models/daos/app.daos");
const { successResponse } = require("../utils/api.utils");

const productsDao = new ProductsDao();

class ProductsController {
  async getProducts(req, res, next) {
    try {
      const users = await productsDao.getAll();
      const response = successResponse(users);
      res.status(HTTP_STATUS.OK).json(response);
    } catch (error) {
      next(error);
    }
  }

  async getProductById(req, res, next) {
    const { id } = req.params;
    console.log(id);
    try {
      const user = await productsDao(id); //AQUI ESTA MAL TODAVIA
      const response = successResponse(user);
      res.status(HTTP_STATUS.OK).json(response);
    } catch (error) {
      next(error);
    }
  }

  async saveProduct(req, res, next) {
    const { nombre, descripcion, codigo, foto, precio, stock } = req.body;
    try {
      const newUser = await productsDao.save({
        timestamp: new Date().toUTCString(),
        nombre,
        descripcion,
        codigo,
        foto,
        precio,
        stock,
      });
      const response = successResponse(newUser);
      res.status(HTTP_STATUS.CREATED).json(response);
    } catch (error) {
      next(error);
    }
  }

  async updateProduct(req, res, next) {
    const { id } = req.params;
    try {
      const updateUser = await productsDao.update(id, req.body);
      const response = successResponse(updateUser);
      res.status(HTTP_STATUS.OK).json(response);
    } catch (error) {
      next(error);
    }
  }

  async deleteProduct(req, res, next) {
    const { id } = req.params;
    try {
      const deletedUser = await productsDao.delete(id);
      const response = successResponse(deletedUser);
      res.status(HTTP_STATUS.OK).json(response);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new ProductsController();
