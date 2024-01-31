const productsController = require("../controllers/products");

const express = require("express");

const router = express.Router();


router.get("/add-product", productsController.getAddProducts);

router.post("/add-product", productsController.postAddProduct);

module.exports = router
