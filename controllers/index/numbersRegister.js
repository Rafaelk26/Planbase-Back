// controllers/pricingEntrada.js
const db = require('../../config/db.js');

async function getAllRegisterNumbers(req, res) {
  try {
    const [rows] = await db.query("SELECT COUNT(*) AS registros FROM registro;");
    res.json(rows);
  } catch (error) {
    console.error('Erro ao contar número de registros no banco:', error);
    res.status(500).json({ message: 'Erro ao contar número de registros no banco' });
  }
}

module.exports = {
    getAllRegisterNumbers,
};
