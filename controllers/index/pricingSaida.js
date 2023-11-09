// controllers/pricingEntrada.js
const db = require('../../config/db.js');

async function getAllPricingExit(req, res) {
  try {
    const [rows] = await db.query("SELECT SUM(valor) FROM registro WHERE tipo = 'Saída';");
    res.json(rows);
  } catch (error) {
    console.error('Erro ao contar o valor das saídas no banco:', error);
    res.status(500).json({ message: 'Erro ao contar o valor das saídas no banco' });
  }
}

module.exports = {
    getAllPricingExit,
};
