const express = require('express');
const router = express.Router();
const Customer = require('../models/Customer');
const Product = require('../models/Product');

router.get('/get-products', (req, res) => {
  Product.find({},(err, product) => {
    if(err) {
      console.log(err);
    }
    res.json(product);
  })
})

router.post('/add-to-bag', (req, res) => {
  // Customer.findOneAndUpdate({email: req.body.data.email}, )
  console.log(req.params.id);
});

module.exports = router;
