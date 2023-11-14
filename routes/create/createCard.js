// routes/create/createCard.js
const express = require('express');
const router = express.Router();
const cardController = require('../../controllers/create/createCard');

router.post('/', cardController.inserirCartaoBancario);

module.exports = router;
