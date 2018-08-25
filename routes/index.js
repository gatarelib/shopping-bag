const express = require('express');
const router = express.Router();
const Customer = require('../models/Customer');

router.post('/add-to-bag', (req, res) => {
  // Customer.findOneAndUpdate({email: req.body.data.email}, )
  console.log(req.params.id);
});

module.exports = router;
