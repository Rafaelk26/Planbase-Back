// controllers/pricingEntrada.js
const db = require('../../config/db.js');

async function getAllPricingEntrance(req, res) {
  try {
    const [rows] = await db.query("SELECT COALESCE(SUM(valor), 0.00) as TotalEntrada FROM registro WHERE tipo = 'Entrada';");
    res.json(rows);
  } catch (error) {
    console.error('Erro ao contar o valor das entradas no banco:', error);
    res.status(500).json({ message: 'Erro ao contar o valor das entradas no banco!' });
  }
}

module.exports = {
    getAllPricingEntrance,
};
