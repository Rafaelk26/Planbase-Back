// routes/create/createCard.js
const express = require('express');
const router = express.Router();
const cardController = require('../../controllers/create/deleteCard');

router.delete('/:id', cardController.deletarCartaoBancario);

module.exports = router;
