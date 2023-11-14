// controllers/getUserPerm.js
const db = require('../../../config/db.js');

async function getAllUserSign(req, res) {
  try {
    const [rows] = await db.query("SELECT * FROM usuario;");
    res.json(rows);
  } catch (error) {
    console.error('Erro ao buscar todos os usuarios do banco', error);
    res.status(500).json({ message: 'Erro ao buscar todos os usuarios do banco' });
  }
}

module.exports = {
    getAllUserSign,
};
