const { body, validationResult } = require('express-validator');


app.post('/products', [
  body('title').notEmpty().withMessage('Title is required'),
  body('description').notEmpty().withMessage('Description is required'),
  body('quantity').isInt({ gt: 0 }).withMessage('Quantity must be a positive integer')
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const newProduct = {
    id: products.length + 1,
    title: req.body.title,
    description: req.body.description,
    quantity: req.body.quantity
  };
  products.push(newProduct);
  saveData(products);
  res.status(201).json(newProduct);
});


app.put('/products/:id', [
  body('title').optional().notEmpty().withMessage('Title cannot be empty'),
  body('description').optional().notEmpty().withMessage('Description cannot be empty'),
  body('quantity').optional().isInt({ gt: 0 }).withMessage('Quantity must be a positive integer')
], (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { id } = req.params;
  const product = products.find(p => p.id == id);
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }

  product.title = req.body.title || product.title;
  product.description = req.body.description || product.description;
  product.quantity = req.body.quantity || product.quantity;

  saveData(products);
  res.status(200).json(product);
});
