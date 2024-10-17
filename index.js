const express = require('express');
const app = express();
const fs = require('fs');
const validateProduct = require('./middlewares/validateProduct.js');

app.use(express.json()); 


app.get('/products', (req, res) => {
  const data = JSON.parse(fs.readFileSync('./data.json', 'utf-8'));
  res.json(data);
});

app.post('/products', validateProduct, (req, res) => {
  const data = JSON.parse(fs.readFileSync('./data.json', 'utf-8'));
  const newProduct = {
    id: data.length + 1,
    ...req.body
  };
  data.push(newProduct);
  fs.writeFileSync('./data.json', JSON.stringify(data));
  res.status(201).json(newProduct);
});

app.put('/products/:id', validateProduct, (req, res) => {
  const data = JSON.parse(fs.readFileSync('./data.json', 'utf-8'));
  const id = parseInt(req.params.id);
  const productIndex = data.findIndex(p => p.id === id);

  if (productIndex === -1) {
    return res.status(404).json({ error: 'Product not found' });
  }

  const updatedProduct = { id, ...req.body };
  data[productIndex] = updatedProduct;

  fs.writeFileSync('./data.json', JSON.stringify(data));
  res.json(updatedProduct);
});

app.delete('/products/:id', (req, res) => {
  const data = JSON.parse(fs.readFileSync('./data.json', 'utf-8'));
  const id = parseInt(req.params.id);
  const productIndex = data.findIndex(p => p.id === id);

  if (productIndex === -1) {
    return res.status(404).json({ error: 'Product not found' });
  }

  data.splice(productIndex, 1);
  fs.writeFileSync('./data.json', JSON.stringify(data));
  res.status(204).end();
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
