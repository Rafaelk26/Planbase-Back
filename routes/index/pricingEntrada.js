// routes/pricingEntrada.js
const express = require('express');
const router = express.Router();
const pricingController = require('../../controllers/index/pricingEntrada');

router.get('/', pricingController.getAllPricingEntrance);

module.exports = router;
