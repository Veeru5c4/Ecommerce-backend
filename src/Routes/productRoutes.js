const express = require("express");
const router = express.Router();
const {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");

router.post("/", createProduct);   // Create a product
router.get("/", getProducts);      // Get all products
router.get("/:id", getProductById); // Get a product by ID
router.put("/:id", updateProduct);  // Update a product
router.delete("/:id", deleteProduct); // Delete a product

module.exports = router;
