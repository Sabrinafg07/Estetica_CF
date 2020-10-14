const Empresas = require('../model/empresas')
const Status = require('http-status')


  exports.buscarUm = (request, response, next) => {
      const id = request.params.id

      Empresas.findByPk(id).then((empresas) => {
          if (empresas) {
              response.send(empresas)
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

      Empresas.findAll({ limit: limite, offset: pagina }).then((empresas) => {
          if (empresas && empresas.length) {
              response.send(empresas)
          } else {
              response.status(Status.NOT_FOUND).send()
          }
      }).catch((error) => next(error))
  
}

  exports.criar = (request, response, next) => {
      const descricao = request.body.descricao
      const cnpj = request.body.cnpj
      const endereco = request.body.endereco
      const email = request.body.email
      const telefone = request.body.telefone

      Empresas.create({
          descricao: descricao,
          cnpj: cnpj,
          endereco: endereco,
          email: email,
          telefone: telefone
      }).then(() => {
          response.status(Status.CREATED).send()
      }).catch((error) => next(error))
  }

  exports.atualizar = (request, response, next) => {
      const id = request.params.id

      const descricao = request.body.descricao
      const cnpj = request.body.cnpj
      const endereco = request.body.endereco
      const email = request.body.email
      const telefone = request.body.telefone

      Empresas.findByPk(id).then((empresas) => {
          if (empresas) {
              empresas.update({
                descricao: descricao,
                cnpj: cnpj,
                endereco: endereco,
                email: email,
                telefone: telefone
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

      Empresas.findByPk(id).then((empresas) => {
          if (empresas) {
              empresas.destroy({
                  where: { id: id }
              }).then(() => {
                  response.send()
              }).catch((error) => next(error))
          } else {
              response.status(Status.NOT_FOUND).send()
          }
      }).catch((error) => next(error))
  }