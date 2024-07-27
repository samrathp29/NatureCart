const express = require('express');
const app = express();
const cors = require('cors');
const alternatives = require('./data.json');

app.use(cors());
app.use(express.json());

app.post('/alternatives', (req, res) => {
  const product = req.body.product;
  const alternative = alternatives.find(item => item.name === product.name) || {name: "No alternative found", price: "N/A"};
  res.json({alternative: alternative});
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
