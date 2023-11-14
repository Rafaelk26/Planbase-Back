// routes/adm/cadastroForm.js
const express = require('express');
const router = express.Router();
const userController = require('../../../controllers/adm/cadastro/cadastroForm');

router.post('/', userController.inserirUser);

module.exports = router;
