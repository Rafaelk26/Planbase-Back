// routes/modal/entradas.js
const express = require('express');
const router = express.Router();
const entradasController = require('../../controllers/modal/entradas');

router.post('/', entradasController.inserirEntrada);

module.exports = router;
