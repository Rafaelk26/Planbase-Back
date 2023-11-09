// routes/cartoes.js
const express = require('express');
const router = express.Router();
const ContaBancaria = require('../../models/create/createCard');

// Rota para criar um novo cartão bancário
router.post('/', async (req, res) => {
  const cartaoData = req.body;
  try {
    const novoCartaoBancario = await ContaBancaria.create(cartaoData);
    res.status(201).json(novoCartaoBancario);
  } catch (error) {
    console.error('Erro ao criar o cartão bancário:', error);
    res.status(500).json({ error: 'Erro ao criar o cartão bancário' });
  }
});

module.exports = router;