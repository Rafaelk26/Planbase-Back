// routes/billingCardsForn.js
const express = require('express');
const router = express.Router();
const cardsFornController = require('../../controllers/billing/billingCardsForn');

router.get('/', cardsFornController.getAllFornecedores);

module.exports = router;
