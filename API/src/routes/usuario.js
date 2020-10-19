const express = require('express')
const controller = require('../controller/usuario')

const router = express.Router()

router.get('/usuario/:id', controller.buscarUm)

router.get('/usuario/', controller.buscarTodos)

router.post('/usuario', controller.criar)

router.put('/usuario/:id', controller.atualizar)

router.delete('/usuario/:id', controller.excluir)

module.exports = router