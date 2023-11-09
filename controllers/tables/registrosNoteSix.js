// controllers/registrosSix.js
const db = require('../../config/db.js');

async function get6NoteRegisters(req, res) {
  try {
    const [rows] = await db.query('SELECT id, valor, tipo, notaFiscal FROM registro LIMIT 6;');
    res.json(rows);
  } catch (error) {
    console.error('Erro ao buscar as seis primeiras notas fiscais da tabela de registro:', error);
    res.status(500).json({ message: 'Erro ao buscar as seis primeiras notas fiscais da tabela de registro' });
  }
}

module.exports = {
    get6NoteRegisters,
};
