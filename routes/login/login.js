const express = require('express');
const router = express.Router();
const loginController = require('../../controllers/login/login');

router.post('/', loginController.fazerLogin);

module.exports = router;
