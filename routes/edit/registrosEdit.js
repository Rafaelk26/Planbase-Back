// routes/registrosEdit.js
const express = require('express');
const router = express.Router();
const registrosController = require('../../controllers/edit/registerEdit');

router.get('/:id', (req, res) => {
    const registroID = req.params.id;
    
    const detalhesRegistro = registrosController.obterDetalhesPorID(registroID);
    if (detalhesRegistro) {
      // Se os detalhes do registro forem encontrados, envie como uma resposta JSON para o front-end.
      res.json(detalhesRegistro);
    } else {
      res.status(404).json({ message: 'Registro não encontrado' });
    }  
})



module.exports = router;