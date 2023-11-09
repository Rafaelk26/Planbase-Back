// routes/registrosAllSaida.js
const express = require('express');
const router = express.Router();
const registrosController = require('../../controllers/tables/registrosAllSaida');

router.get('/', registrosController.getAllExitRegisters);

module.exports = router;
