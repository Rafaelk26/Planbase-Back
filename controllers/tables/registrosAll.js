// controllers/registrosAll.js
const db = require('../../config/db.js');

async function getAllRegisters(req, res) {
  try {
    const [rows] = await db.query('SELECT * FROM registro');
    res.json(rows);
  } catch (error) {
    console.error('Erro ao buscar todos os registros:', error);
    res.status(500).json({ message: 'Erro ao buscar todos os registros' });
  }
}

module.exports = {
    getAllRegisters,
};
