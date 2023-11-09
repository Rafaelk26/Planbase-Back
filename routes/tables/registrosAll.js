// routes/registrosAll.js
const express = require('express');
const router = express.Router();
const registrosController = require('../../controllers/tables/registrosAll');

router.get('/', registrosController.getAllRegisters);

module.exports = router;
