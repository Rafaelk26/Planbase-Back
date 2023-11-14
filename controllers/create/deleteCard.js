// controllers/createCard.js
const db = require('../../config/db.js');

async function deletarCartaoBancario(req, res) {
  const cardID = parseInt(req.params.id);
  console.log(cardID) 
  const query = 'DELETE FROM contabancaria WHERE id = ?;'
  try {
    await db.query(query, [cardID]);

    res.status(200).json({ message: 'Cartão deletado com sucesso' });
  } catch (error) {
    console.error('Erro ao deletar o cartão no banco de dados', error);
    res.status(500).json({ message: 'Erro ao deletar o cartão no banco de dados' });
  }
}

module.exports = {
  deletarCartaoBancario,
};
