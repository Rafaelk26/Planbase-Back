const db = require('../../config/db.js');

// Função para buscar detalhes do registro por ID
async function obterDetalhesPorID(registroID) {
  try {
    const query = 'SELECT * FROM registro WHERE id = ?';
    // Execute a consulta no banco de dados
    const [rows] = await db.query(query, [registroID]);

    // Verifique se o registro foi encontrado
    if (rows.length > 0) {
      return rows[0];
    } else {
      return null;
    }
  } catch (error) {
    console.error('Erro ao buscar detalhes do registro:', error);
    throw error;
  }
}

// Esta função irá atualizar os detalhes do registro no banco de dados com base no registroID e nos novos detalhes.
async function atualizarDetalhesRegistro(registroID, novoDadosRegistro) {
  try {
    const Registro = require('../../models/edit/registrosEdit.js'); 

    await Registro.update(novoDadosRegistro, {
      where: { id: registroID },
    });
    // Se a atualização for bem-sucedida, a função retornará com sucesso.
  } catch (error) {
    console.error('Erro ao atualizar registro no banco de dados:', error);
    throw new Error('Erro ao atualizar registro no banco de dados');
  }
}

// Exporte a função para uso na rota
module.exports = {
  obterDetalhesPorID,
  atualizarDetalhesRegistro
};
