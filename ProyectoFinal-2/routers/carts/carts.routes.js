const router = require("express").Router();
const cartsController = require("../../controllers/carts.controller");

router.get("/", cartsController.getCarts);
router.get("/:id", cartsController.getCartById);
router.post("/", cartsController.saveCart);
router.put("/:id", cartsController.updateCart);
router.delete("/:id", cartsController.deleteCart);

module.exports = router;
