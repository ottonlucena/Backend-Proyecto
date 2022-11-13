const router = require("express").Router();
const productsController = require("../../controllers/products.controller");

router.get("/", productsController.getProducts);
router.get("/:id", productsController.getProductById);
router.post("/", productsController.saveProduct);
router.put("/:id", productsController.updateProduct);
router.delete("/:id", productsController.deleteProduct);

module.exports = router;
