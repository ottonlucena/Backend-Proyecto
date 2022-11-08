const express = require("express");
const {
  getAllProducts,
  getById,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/controls");

const authorizer = require("../middlewares/authorizer");
const route = express.Router();

/* Endpoints Products */
route.get("/", getAllProducts);
route.get("/:id", getById);
route.post("/", authorizer, createProduct);
route.put("/:id", updateProduct);
route.delete("/:id", deleteProduct);

module.exports = route;
