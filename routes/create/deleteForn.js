// routes/create/createCard.js
const express = require('express');
const router = express.Router();
const cardController = require('../../controllers/create/deleteForn');

router.delete('/:id', cardController.deletarFornecedor);

module.exports = router;
