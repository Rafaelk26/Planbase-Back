// controllers/registrosAllSaida.js
const db = require('../../config/db.js');

async function getAllExitRegisters(req, res) {
  try {
    const [rows] = await db.query("SELECT * FROM registro WHERE tipo = 'Saída';");
    res.json(rows);
  } catch (error) {
    console.error('Erro ao buscar todos os registros de saída:', error);
    res.status(500).json({ message: 'Erro ao buscar todos os registros de saída' });
  }
}

module.exports = {
    getAllExitRegisters,
};
