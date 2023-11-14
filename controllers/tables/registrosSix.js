// controllers/registrosSix.js
const db = require('../../config/db.js');

async function get6Registers(req, res) {
  try {
    const [rows] = await db.query('SELECT * FROM registro ORDER BY data ASC LIMIT 6;');
    res.json(rows);
  } catch (error) {
    console.error('Erro ao buscar as seis primeiras linhas da tabela de registro:', error);
    res.status(500).json({ message: 'Erro ao buscar as seis primeiras linhas da tabela de registro!' });
  }
}

module.exports = {
    get6Registers,
};
