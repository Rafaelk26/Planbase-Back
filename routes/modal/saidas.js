// routes/modal/entradas.js
const express = require('express');
const router = express.Router();
const saidasController = require('../../controllers/modal/saidas');

router.post('/', saidasController.inserirSaida);

module.exports = router;
