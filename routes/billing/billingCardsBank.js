// routes/billingCardsBank.js
const express = require('express');
const router = express.Router();
const cardBankController = require('../../controllers/billing/billingCardsBank');

router.get('/', cardBankController.getAllCardsBanks);

module.exports = router;