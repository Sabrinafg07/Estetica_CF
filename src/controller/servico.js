const Servico = require('../model/servico')
const Status = require('http-status')


  exports.buscarUm = (request, response, next) => {
      const id = request.params.id

      Servico.findByPk(id).then((servico) => {
          if (servico) {
              response.send(servico)
          } else {
              response.status(Status.NOT_FOUND).send()
          }
      }).catch((error) => next(error))
  }

  exports.buscarNome = (request, response, next) => {
    const nome = request.params.nome

    Servico.findAll({_nome: nome}).then((servico) => {
        if (servico) {
            response.send(servico)
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

      Servico.findAll({ limit: limite, offset: pagina }).then((servico) => {
          if (servico && servico.length) {
              response.send(servico)
          } else {
              response.status(Status.NOT_FOUND).send()
          }
      }).catch((error) => next(error))
  
}

  exports.criar = (request, response, next) => {
      const categoria = request.body.categoria
      const descricao = request.body.descricao
      const duracao = request.body.duracao
      const preco = request.body.preco

      Servico.create({
          categoria: categoria,
          descricao: descricao,
          duracao: duracao,
          preco: preco
      }).then(() => {
          response.status(Status.CREATED).send()
      }).catch((error) => next(error))
  }

  exports.atualizar = (request, response, next) => {
      const id = request.params.id

      const categoria = request.body.categoria
      const descricao = request.body.descricao
      const duracao = request.body.duracao
      const preco = request.body.preco

      Servico.findByPk(id).then((servico) => {
          if (servico) {
              servico.update({
                categoria: categoria,
                descricao: descricao,
                duracao: duracao,
                preco: preco
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

      Servico.findByPk(id).then((servico) => {
          if (servico) {
              servico.destroy({
                  where: { id: id }
              }).then(() => {
                  response.send()
              }).catch((error) => next(error))
          } else {
              response.status(Status.NOT_FOUND).send()
          }
      }).catch((error) => next(error))
  }