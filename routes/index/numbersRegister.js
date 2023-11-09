// routes/pricingEntrada.js
const express = require('express');
const router = express.Router();
const numbersRegistersController = require('../../controllers/index/numbersRegister');

router.get('/', numbersRegistersController.getAllRegisterNumbers);

module.exports = router;
