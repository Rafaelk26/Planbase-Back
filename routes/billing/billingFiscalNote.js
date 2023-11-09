// routes/billingFiscalNote.js
const express = require('express');
const router = express.Router();
const cardsFiscalNote = require('../../controllers/billing/billingFiscalNote');

router.get('/', cardsFiscalNote.getAllFiscalNote);

module.exports = router;