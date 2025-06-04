const express = require('express');
const router = express.Router();
const produtosController = require('../controllers/produtosController');
const { validarProduto } = require('../middlewares/validacaoProduto');

// Listar todos os produtos
router.get('/', produtosController.listar);

// Criar novo produto (com validação)
router.post('/', validarProduto, produtosController.criar);

// Editar produto (com validação)
router.put('/:id', validarProduto, produtosController.editar);

// Deletar produto
router.delete('/:id', produtosController.deletar);

module.exports = router;