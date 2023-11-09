// routes/pricingEntrada.js
const express = require('express');
const router = express.Router();
const pricingController = require('../../controllers/index/pricingSaida');

router.get('/', pricingController.getAllPricingExit);

module.exports = router;
