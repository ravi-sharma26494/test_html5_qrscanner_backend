const Product = require('../models/Product');

const getProductByBarcode = async (req, res) => {
  const { barcode } = req.params;
  try {
    const product = await Product.findOne({ where: { barcode } });
    console.log("Yo"+product)
    if (!product) {
        res.status(404).json({ message: 'Product not found.' });
    } else {
        res.json(product);
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error.' });
  }
};
// add products
const addProducts =async(req,res)=>{
  try {
    const { name, price, description, barcode } = req.body;
    const newProduct = await Product.create({
      name,
      price,
      description,
      barcode,
    });
    res.status(201).json(newProduct);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Server error' });
  }
};
module.exports = {
  getProductByBarcode,
  addProducts
};
