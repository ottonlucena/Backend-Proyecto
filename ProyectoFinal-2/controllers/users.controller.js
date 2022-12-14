const { HTTP_STATUS } = require("../constants/api.constants");
const { UsersDao } = require("../models/daos/app.daos");
const { successResponse } = require("../utils/api.utils");

const userDao = new UsersDao();

class UsersController {
  async getUsers(req, res, next) {
    try {
      const users = await userDao.getAll();
      const response = successResponse(users);
      res.status(HTTP_STATUS.OK).json(response);
    } catch (error) {
      next(error);
    }
  }

  async getUserById(req, res, next) {
    const { id } = req.params;
    try {
      const user = await userDao.getById(id);
      const response = successResponse(user);
      res.status(HTTP_STATUS.OK).json(response);
    } catch (error) {
      next(error);
    }
  }

  async saveUser(req, res, next) {
    try {
      const newUser = await userDao.save(req.body);
      const response = successResponse(newUser);
      res.status(HTTP_STATUS.CREATED).json(response);
    } catch (error) {
      next(error);
    }
  }

  async updateUser(req, res, next) {
    const { id } = req.params;
    try {
      const updateUser = await userDao.update(id, req.body);
      const response = successResponse(updateUser);
      res.status(HTTP_STATUS.OK).json(response);
    } catch (error) {
      next(error);
    }
  }

  async deleteUser(req, res, next) {
    const { id } = req.params;
    try {
      const deletedUser = await userDao.delete(id);
      const response = successResponse(deletedUser);
      res.status(HTTP_STATUS.OK).json(response);
    } catch (error) {
      next(error);
    }
  }

  /* populate(req, res, next) {
    const { qty } = req.query;
    try {
      const users = userDao.populate(qty);
      const response = successResponse(users);
      res.status(HTTP_STATUS.OK).json(response);
    } catch (error) {
      next(error);
    }
  } */ //No aplica, lo dejo para futuros proyectos.
}

module.exports = new UsersController();
