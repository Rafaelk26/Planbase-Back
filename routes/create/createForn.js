// routes/create/createCard.js
const express = require('express');
const router = express.Router();
const cardController = require('../../controllers/create/createForn');

router.post('/', cardController.inserirFornecedor);

module.exports = router;
