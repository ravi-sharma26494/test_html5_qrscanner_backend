// const express = require('express');
// const bodyParser = require('body-parser');
// const cors = require('cors');
// const { createConnection } = require('typeorm');
// const Product = require('./entities/Product');

// const app = express();
// app.use(bodyParser.json());
// app.use(cors());

// // create connection to MySQL database using TypeORM
// createConnection({
//   type: 'mysql',
//   host: 'localhost',
//   port: 3306,
//   username: 'root',
//   password: 'password',
//   database: 'mydatabase',
//   entities: [Product],
//   synchronize: true,
// }).then(() => {
//   console.log('Connected to database');
// }).catch((error) => {
//   console.log('Error connecting to database:', error);
// });

// // GET endpoint to retrieve product information by barcode
// app.get('/api/product/:barcode', async (req, res) => {
//   const { barcode } = req.params;
//   const product = await Product.findOne({ barcode });

//   if (!product) {
//     res.status(404).json({ error: 'Product not found' });
//     return;
//   }

//   res.json(product);
// });

// // POST endpoint to create a new product
// app.post('/api/product', async (req, res) => {
//   const { name, description, barcode } = req.body;

//   if (!name || !barcode) {
//     res.status(400).json({ error: 'Name and barcode are required' });
//     return;
//   }

//   const product = new Product();
//   product.name = name;
//   product.description = description || '';
//   product.barcode = barcode;

//   try {
//     await product.save();
//     res.json(product);
//   } catch (error) {
//     res.status(500).json({ error: 'Error creating product' });
//   }
// });

// // start server
// app.listen(3000, () => {
//   console.log('Server started on port 3000');
// });

const express = require('express');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/products');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/products', productRoutes);

const port = 3001;
app.listen(port, () => {
  console.log(`Server is running on port ${port}.`);
});

