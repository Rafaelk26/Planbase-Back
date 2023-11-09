var express = require('express');
var router = express.Router();
const AuthSessionMiddleware = require('../../middleware/authSession');

router.get('/', (req, res) => {
  res.render('index', { title: 'Express' });
});

module.exports = router;
