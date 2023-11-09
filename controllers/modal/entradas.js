const db = require('../../config/db.js');

async function inserirEntrada(req, res) {
  const { titulo, categoria, tipo, data, valor, historico, status, notaFiscal, parcela, destinatario, fornecedor, pagamento } = req.body;

  try {
    // Verificar se o fornecedor já existe na tabela fornecedor
    const [rows] = await db.query('SELECT id FROM fornecedor WHERE nome = ?', [fornecedor]);

    let fornecedorId;

    if (rows.length > 0) {
      // O fornecedor já existe, obtenha o id do fornecedor existente
      fornecedorId = rows[0].id;
    } else {
      // O fornecedor não existe, insira um novo fornecedor na tabela fornecedor
      const [result] = await db.query('INSERT INTO fornecedor (nome) VALUES (?)', [fornecedor]);
      fornecedorId = result.insertId;
    }

    // Agora você tem o fornecedorId, que pode ser usado para inserir na tabela registro
    const query = 'INSERT INTO registro (titulo, operacional, tipo, data, valor, descricao, status, notaFiscal, qtdParcelas, contaBancaria_id, fornecedor_id, tipoPagamento) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
    await db.query(query, [titulo, categoria, tipo, data, valor, historico, status, notaFiscal, parcela, destinatario, fornecedorId, pagamento]);

    res.status(200).json({ message: 'Registro de entrada inserido com sucesso' });
  } catch (error) {
    console.error('Erro ao inserir entrada no banco de dados:', error);
    res.status(500).json({ message: 'Erro ao inserir entrada no banco de dados' });
  }
}

module.exports = {
  inserirEntrada,
};
