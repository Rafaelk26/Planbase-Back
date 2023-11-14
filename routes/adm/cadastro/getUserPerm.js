// routes/getUserPerm.js
const express = require('express');
const router = express.Router();
const permController = require('../../../controllers/adm/cadastro/getUserPerm');

router.get('/', permController.getAllUserSign);

module.exports = router;
