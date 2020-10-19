const Pacotes = require('../model/pacotes')
const Status = require('http-status')


  exports.buscarUm = (request, response, next) => {
      const id = request.params.id

      Pacotes.findByPk(id).then((pacotes) => {
          if (pacotes) {
              response.send(pacotes)
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

      Pacotes.findAll({ limit: limite, offset: pagina }).then((pacotes) => {
          if (pacotes && pacotes.length) {
              response.send(pacotes)
          } else {
              response.status(Status.NOT_FOUND).send()
          }
      }).catch((error) => next(error))
  
}

  exports.criar = (request, response, next) => {
      const descricao = request.body.descricao
      const preco = request.body.preco
      const quantidade = request.body.quantidade

      Pacotes.create({
          descricao: descricao,
          preco: preco,
          servicquantidadeoId: quantidade
      }).then(() => {
          response.status(Status.CREATED).send()
      }).catch((error) => next(error))
  }

  exports.atualizar = (request, response, next) => {
      const id = request.params.id

      const descricao = request.body.descricao
      const preco = request.body.preco
      const quantidade = request.body.quantidade

      Pacotes.findByPk(id).then((pacotes) => {
          if (pacotes) {
              pacotes.update({
                descricao: descricao,
                preco: preco,
                quantidade: quantidade
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

      Pacotes.findByPk(id).then((pacotes) => {
          if (pacotes) {
              pacotes.destroy({
                  where: { id: id }
              }).then(() => {
                  response.send()
              }).catch((error) => next(error))
          } else {
              response.status(Status.NOT_FOUND).send()
          }
      }).catch((error) => next(error))
  }