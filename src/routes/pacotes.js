const express = require('express')
const controller = require('../controller/pacotes')

const router = express.Router()

router.get('/pacotes/:id', controller.buscarUm)

router.get('/pacotes/', controller.buscarTodos)

router.post('/pacotes', controller.criar)

router.put('/pacotes/:id', controller.atualizar)

router.delete('/pacotes/:id', controller.excluir)

module.exports = router