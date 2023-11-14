// controllers/createCard.js
const db = require('../../config/db.js');

async function inserirCartaoBancario(req, res) {
  const { agencia, conta, taxa, tipoCobranca, InstituicaoBancaria, codigoBancario } = req.body;
  
  const query = 'INSERT INTO contabancaria ( agencia, conta, taxa, tipoCobranca, instituicaoBancaria, codigoBancario) VALUES (?, ?, ?, ?, ?, ?);';
  try {
    await db.query(query, [ agencia, conta, taxa, tipoCobranca, InstituicaoBancaria, codigoBancario]);

    res.status(200).json({ message: 'Cartão inserido com sucesso' });
  } catch (error) {
    console.error('Erro ao inserir o cartão no banco de dados', error);
    res.status(500).json({ message: 'Erro ao inserir o cartão no banco de dados' });
  }
}

module.exports = {
  inserirCartaoBancario,
};
