// controllers/billingCardsBank.js
const db = require('../../config/db.js');

async function getAllCardsBanks(req, res) {
  try {
    const [rows] = await db.query('SELECT * FROM contabancaria');
    res.json(rows);
  } catch (error) {
    console.error('Erro ao buscar cartões da tabela contabancaria do banco:', error);
    res.status(500).json({ message: 'Erro ao buscar cartões da tabela contabancaria do banco!' });
  }
}

module.exports = {
    getAllCardsBanks,
};
