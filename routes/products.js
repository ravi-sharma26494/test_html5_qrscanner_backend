const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/:barcode', productController.getProductByBarcode);
router.post('/addproduct', productController.addProducts);

module.exports = router;
