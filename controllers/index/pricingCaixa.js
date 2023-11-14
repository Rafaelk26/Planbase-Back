// controllers/pricingEntrada.js
const db = require('../../config/db.js');

async function getAllPricingBox(req, res) {
  try {
    const [rows] = await db.query("SELECT COALESCE((SELECT SUM(valor) FROM registro WHERE tipo = 'Entrada'), 0.00) - COALESCE((SELECT SUM(valor) FROM registro WHERE tipo = 'Saida'), 0.00) as Caixa;");
    res.json(rows);
  } catch (error) {
    console.error('Erro ao contar o valor do caixa no banco', error);
    res.status(500).json({ message: 'Erro ao contar o valor do caixa no banco!' });
  }
}

module.exports = {
    getAllPricingBox,
};
