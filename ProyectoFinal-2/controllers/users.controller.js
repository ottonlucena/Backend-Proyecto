const { HTTP_STATUS } = require("../constants/api.constants");
const MockContainer = require("../models/containers/mock.container");
const { successResponse } = require("../utils/api.utils");

const userModel = new MockContainer("user");

class UsersController {
  getUsers(req, res, next) {
    try {
      const users = userModel.getAll();
      const response = successResponse(users);
      res.status(HTTP_STATUS.OK).json(response);
    } catch (error) {
      next(error);
    }
  }

  getUserById(req, res, next) {
    const { id } = req.params;
    try {
      const user = userModel.getById(id);
      const response = successResponse(user);
      res.status(HTTP_STATUS.OK).json(response);
    } catch (error) {
      next(error);
    }
  }

  saveUser(req, res, next) {
    try {
      const newUser = userModel.save(req.body);
      const response = successResponse(newUser);
      res.status(HTTP_STATUS.CREATED).json(response);
    } catch (error) {
      next(error);
    }
  }

  updateUser(req, res, next) {
    const { id } = req.params;
    try {
      const updateUser = userModel.update(id, req.body);
      const response = successResponse(updateUser);
      res.status(HTTP_STATUS.OK).json(response);
    } catch (error) {
      next(error);
    }
  }

  deleteUser(req, res, next) {
    const { id } = req.params;
    try {
      const deletedUser = userModel.delete(id);
      const response = successResponse(deletedUser);
      res.status(HTTP_STATUS.OK).json(response);
    } catch (error) {
      next(error);
    }
  }

  populate(req, res, next) {
    const { qty } = req.query;
    try {
      const users = userModel.populate(qty);
      const response = successResponse(users);
      res.status(HTTP_STATUS.OK).json(response);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new UsersController();
