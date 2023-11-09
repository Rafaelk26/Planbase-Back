// routes/registrosSix.js
const express = require('express');
const router = express.Router();
const registrosController = require('../../controllers/tables/registrosNoteSix');

router.get('/', registrosController.get6NoteRegisters);

module.exports = router;
