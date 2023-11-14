// routes/pricingEntrada.js
const express = require('express');
const router = express.Router();
const pricingController = require('../../controllers/index/pricingCaixa');

router.get('/', pricingController.getAllPricingBox);

module.exports = router;
