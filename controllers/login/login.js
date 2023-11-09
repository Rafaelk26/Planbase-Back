// controllers/login.js
const loginModel = require('../../models/login/login');

function fazerLogin(req, res) {
  const { id, senha } = req.body;

  loginModel.verificarCredenciais(id, senha, (err, results) => {
    if (err) {
      console.error('Erro ao verificar as credenciais no banco:', err);
      res.send('Erro ao verificar as credenciais no banco!');
    } else if (results.length > 0) {
      req.session.user = id;
      res.send('Login bem-sucedido!');
    } else {
      res.send('Credenciais inválidas.');
    }
  });
}

module.exports = {
  fazerLogin
};
