const e = require("express");
const fs = require("fs");
const BD = require("./data.json");

const saveToDatabase = (DB) => {
  fs.writeFileSync("./models/data.json", JSON.stringify(DB, null, 2), {
    encoding: "utf-8",
  });
};

const getAll = () => {
  return BD.carrito;
};

const getById = (id) => {
  const cart = BD.carrito.find((cart) => cart.id === +id);
  if (!cart) {
    return;
  }
  return cart;
};

const createCart = (newCart) => {
  BD.carrito.push(newCart);
  saveToDatabase(BD);
  return newCart;
};

module.exports = {
  getAll,
  getById,
  createCart,
};
