const ContaBancaria = require('../../models/create/createCard');

async function criarCartaoBancario(cartaoData) {
  try {
    return await ContaBancaria.create(cartaoData);
  } catch (error) {
    console.error('Erro ao criar o cartão bancário:', error);
    throw error;
  }
}

async function buscarCartoesBancarios() {
  try {
    return await ContaBancaria.findAll();
  } catch (error) {
    console.error('Erro ao buscar cartões bancários:', error);
    throw error;
  }
}

module.exports = {
  criarCartaoBancario,
  buscarCartoesBancarios,
};
