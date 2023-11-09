// controllers/registrosAll.js
const db = require('../../config/db.js');

async function getAllFornecedores(req, res) {
  try {
    const [rows] = await db.query('SELECT * FROM fornecedor');
    res.json(rows);
  } catch (error) {
    console.error('Erro ao buscar fornecedores da tabela fornecedor do banco:', error);
    res.status(500).json({ message: 'Erro ao buscar fornecedores da tabela fornecedor do banco!' });
  }
}

module.exports = {
    getAllFornecedores,
};
