const envConfig = require("../../config");

let ProductsDao;
let UsersDao;
let CartsDao;

switch (envConfig.DATASOURCE) {
  case "mongo":
    ProductsDao = require("./products/dao.products.mongo");
    UsersDao = require("./users/users.mongo.dao");
    CartsDao = require("./carts/dao.carts.mongo");
    break;
  case "firebase":
    ProductsDao = require("./products/dao.products.firebase");
    UsersDao = require("./users/users.firebase.dao");
    CartsDao = require("./carts/dao.carts.mongo");
    break;
  case "file":
    ProductsDao = require("./products/dao.products.file");
    CartsDao = require("./carts/dao.carts.file");
    break;
  case "memory":
    ProductsDao = require("./products/dao.products.memory");
    CartsDao = require("./carts/dao.carts.memory");
  default:
    throw new Error("Invalid Datasource");
}

module.exports = {
  CartsDao,
  UsersDao,
  ProductsDao,
};
