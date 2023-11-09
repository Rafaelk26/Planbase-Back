// routes/registrosSix.js
const express = require('express');
const router = express.Router();
const registrosController = require('../../controllers/tables/registrosSix');

router.get('/', registrosController.get6Registers);

module.exports = router;
