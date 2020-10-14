const Despesas = require('../model/despesas')
const Status = require('http-status')


  exports.buscarUm = (request, response, next) => {
      const id = request.params.id

      Despesas.findByPk(id).then((despesas) => {
          if (despesas) {
              response.send(despesas)
          } else {
              response.status(Status.NOT_FOUND).send()
          }
      }).catch((error) => next(error))
  }

exports.buscarTodos = (request, response, next) => {
    let limite = parseInt(request.query.limite || 0)
    let pagina = parseInt(request.query.pagina || 0)

if (!Number.isInteger(limite) || !Number.isInteger(pagina)) {
    response.status(Status.BAD_REQUEST).send()
} 

const ITENS_POR_PAGINA = 10

      limite = limite > ITENS_POR_PAGINA || limite <= 0 ? ITENS_POR_PAGINA : limite
      pagina = pagina <= 0 ? 0 : pagina * limite

      Despesas.findAll({ limit: limite, offset: pagina }).then((despesas) => {
          if (despesas && despesas.length) {
              response.send(despesas)
          } else {
              response.status(Status.NOT_FOUND).send()
          }
      }).catch((error) => next(error))
  
}

  exports.criar = (request, response, next) => {
      const descricao = request.body.descricao
      const valor = request.body.valor
      const dataPagamento = request.body.dataPagamento
      const pago = request.body.pago
      const observacoes = request.body.observacoes

      Despesas.create({
          descricao: descricao,
          valor: valor,
          dataPagamento: dataPagamento,
          pago: pago,
          observacoes: observacoes
      }).then(() => {
          response.status(Status.CREATED).send()
      }).catch((error) => next(error))
  }

  exports.atualizar = (request, response, next) => {
      const id = request.params.id

      const descricao = request.body.descricao
      const valor = request.body.valor
      const dataPagamento = request.body.dataPagamento
      const pago = request.body.pago
      const observacoes = request.body.observacoes

      Despesas.findByPk(id).then((despesas) => {
          if (despesas) {
              despesas.update({
                descricao: descricao,
                valor: valor,
                dataPagamento: dataPagamento,
                pago: pago,
                observacoes: observacoes
              }, { where: { id: id } }).then(() => {
                  response.send()
              }).catch((error) => next(error))
          } else {
              response.status(Status.NOT_FOUND).send()
          }
      }).catch((error) => next(error))
  }

  exports.excluir = (request, response, next) => {
      const id = request.params.id

      Despesas.findByPk(id).then((despesas) => {
          if (despesas) {
              despesas.destroy({
                  where: { id: id }
              }).then(() => {
                  response.send()
              }).catch((error) => next(error))
          } else {
              response.status(Status.NOT_FOUND).send()
          }
      }).catch((error) => next(error))
  }