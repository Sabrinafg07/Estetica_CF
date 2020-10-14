const express = require('express')
const controller = require('../controller/despesas')

const router = express.Router()

router.get('/despesas/:id', controller.buscarUm)

router.get('/despesas/', controller.buscarTodos)

router.post('/despesas', controller.criar)

router.put('/despesas/:id', controller.atualizar)

router.delete('/despesas/:id', controller.excluir)

module.exports = router