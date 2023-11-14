// controllers/entradas.js
const db = require('../../config/db.js');

async function inserirEntrada(req, res) {
  const { titulo, categoria, tipo, data, valor, historico, status , notaFiscal , parcela, destinatario, fornecedor, pagamento } = req.body;
  
  const query = 'INSERT INTO registro ( titulo, operacional, tipo, data, valor, descricao, status, notaFiscal, qtdParcelas, contaBancaria_id, fornecedor_id, tipoPagamento) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);';
  try {
    await db.query(query, [ titulo, categoria, tipo, data, valor, historico, status , notaFiscal , parcela, destinatario, fornecedor, pagamento]);

    res.status(200).json({ message: 'Registro de entrada inserido com sucesso' });
  } catch (error) {
    console.error('Erro ao inserir entrada no banco de dados:', error);
    res.status(500).json({ message: 'Erro ao inserir entrada no banco de dados' });
  }
}

module.exports = {
  inserirEntrada,
};
