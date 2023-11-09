// routes/registrosAllEntrada.js
const express = require('express');
const router = express.Router();
const registrosController = require('../../controllers/tables/registrosAllEntrada');

router.get('/', registrosController.getAllEntranceRegisters);

module.exports = router;
