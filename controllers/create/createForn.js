// controllers/createCard.js
const db = require('../../config/db.js');

async function inserirFornecedor(req, res) {
  const { nome, tipo, valorContrato, contato } = req.body;
  
  const query = 'INSERT INTO fornecedor ( nome, tipo, valorContrato, contato) VALUES (?, ?, ?, ?);';
  try {
    await db.query(query, [ nome, tipo, valorContrato, contato]);

    res.status(200).json({ message: 'Fornecedor inserido com sucesso' });
  } catch (error) {
    console.error('Erro ao inserir o fornecedor no banco de dados', error);
    res.status(500).json({ message: 'Erro ao inserir o fornecedor no banco de dados' });
  }
}

module.exports = {
  inserirFornecedor,
};
