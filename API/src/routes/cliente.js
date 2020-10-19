const express = require('express')
const controller = require('../controller/cliente')

const router = express.Router()

router.get('/cliente/:id', controller.buscarUm)

router.get('/cliente/', controller.buscarTodos)

router.post('/cliente', controller.criar)

router.put('/cliente/:id', controller.atualizar)

router.delete('/cliente/:id', controller.excluir)

module.exports = router