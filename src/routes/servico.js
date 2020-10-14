const express = require('express')
const controller = require('../controller/servico')

const router = express.Router()

router.get('/servico/:id', controller.buscarUm)

router.get('/servico/', controller.buscarTodos)

router.post('/servico', controller.criar)

router.put('/servico/:id', controller.atualizar)

router.delete('/servico/:id', controller.excluir)

module.exports = router