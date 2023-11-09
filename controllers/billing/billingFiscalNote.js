// controllers/billingFiscalNote.js
const db = require('../../config/db.js');

async function getAllFiscalNote(req, res) {
  try {
    const [rows] = await db.query('SELECT id, tipo, valor, notaFiscal FROM registro');
    res.json(rows);
  } catch (error) {
    console.error('Erro ao buscar notas fiscais da tabela registro do banco:', error);
    res.status(500).json({ message: 'Erro ao buscar notas fiscais da tabela registro do banco!' });
  }
}

module.exports = {
    getAllFiscalNote,
};
