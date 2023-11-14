// controllers/entradas.js
const db = require('../../../config/db.js');

async function inserirUser(req, res) {
  const { cpf, email, telefone, uf, nome, nascimento, cidade , país , dataÍnicio, senha, cargo, confirmarSenha, administrador } = req.body;
  
  const query = 'INSERT INTO usuario ( cpf, email, telefone, uf, nomeCompleto, nascimento, cidade, pais, dataInicio, senha, cargo, confirmarSenha, administrador) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);';
  try {
    await db.query(query, [ cpf, email, telefone, uf, nome, nascimento, cidade , país , dataÍnicio, senha, cargo, confirmarSenha, administrador ]);

    res.status(200).json({ message: 'Registro de usuario inserido com sucesso' });
  } catch (error) {
    console.error('Erro ao inserir usuario no banco de dados', error);
    res.status(500).json({ message: 'Erro ao inserir usuario no banco de dados' });
  }
}

module.exports = {
    inserirUser,
};
