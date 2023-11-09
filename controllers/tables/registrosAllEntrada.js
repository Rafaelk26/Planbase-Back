// controllers/registrosAllEntrada.js
const db = require('../../config/db.js');

async function getAllEntranceRegisters(req, res) {
  try {
    const [rows] = await db.query("SELECT * FROM registro WHERE tipo = 'Entrada';");
    res.json(rows);
  } catch (error) {
    console.error('Erro ao buscar todos os registros de entrada:', error);
    res.status(500).json({ message: 'Erro ao buscar todos os registros de entrada' });
  }
}

module.exports = {
    getAllEntranceRegisters,
};
