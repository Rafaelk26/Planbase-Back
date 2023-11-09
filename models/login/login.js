// models/login.js
const connection = require('../../config/db.js');

function verificarCredenciais(id, senha, callback) {
  const query = 'SELECT id, senha FROM usuario WHERE id = ? AND senha = ?';
  connection.query(query, [id, senha], (err, results) => {
    if (err) {
      return callback(err, null);
    } else {
      return callback(null, results);
    }
  });
}

module.exports = {
  verificarCredenciais
};
