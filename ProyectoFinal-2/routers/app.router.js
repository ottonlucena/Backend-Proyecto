const { Router } = require("express");
const usersRouter = require("./users/users.routes");
const productsRouter = require("./products/products.routes");
const cartsRouter = require("./carts/carts.routes");

const router = Router();

router.use("/users", usersRouter);
router.use("/products", productsRouter);
router.use("/carts", cartsRouter);

module.exports = router;
