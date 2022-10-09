const route = require("express").Router();
const {
  getAllCart,
  getById,
  createCart,
} = require("../controllers/constrolsCart");

/* Endpoints Cart  */
route.get("/", getAllCart);
route.get("/:id", getById);
route.post("/", createCart);

module.exports = route;
