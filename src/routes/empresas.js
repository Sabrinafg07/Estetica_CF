const express = require('express')
const controller = require('../controller/empresas')

const router = express.Router()

router.get('/empresas/:id', controller.buscarUm)

router.get('/empresas/', controller.buscarTodos)

router.post('/empresas', controller.criar)

router.put('/empresas/:id', controller.atualizar)

router.delete('/empresas/:id', controller.excluir)

module.exports = router