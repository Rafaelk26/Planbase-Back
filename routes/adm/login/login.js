// routes/loginAuth.js
const express = require('express');
const router = express.Router();
const AuthController = require('../../../controllers/auth/user');
const AuthSessionMiddleware = require('../../../middleware/authSession');

router.get('/', (req, res) => {
  // Rota acessível apenas para administradores
  res.send('Esta rota é acessível apenas para administradores login adm');
});

module.exports = router;
