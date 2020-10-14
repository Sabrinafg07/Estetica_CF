const Usuario = require('../model/usuario')
const Status = require('http-status')


  exports.buscarUm = (request, response, next) => {
      const id = request.params.id

      Usuario.findByPk(id).then((usuario) => {
          if (usuario) {
              response.send(usuario)
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

      Usuario.findAll({ limit: limite, offset: pagina }).then((usuario) => {
          if (usuario && usuario.length) {
              response.send(usuario)
          } else {
              response.status(Status.NOT_FOUND).send()
          }
      }).catch((error) => next(error))
  
}

  exports.criar = (request, response, next) => {
      const login = request.body.login
      const nome = request.body.nome
      const email = request.body.email
      const telefone = request.body.telefone
      const datanascimento = request.body.datanascimento

      Usuario.create({
          nome: nome,
          login: login,
          email: email,
          telefone: telefone,
          datanascimento: datanascimento
      }).then(() => {
          response.status(Status.CREATED).send()
      }).catch((error) => next(error))
  }

  exports.atualizar = (request, response, next) => {
      const id = request.params.id

      const nome = request.body.nome
      const login = request.body.login
      const email = request.body.email
      const telefone = request.body.telefone
      const datanascimento = request.body.datanascimento

      Usuario.findByPk(id).then((usuario) => {
          if (usuario) {
              usuario.update({
                nome: nome,
                login: login,
                email: email,
                telefone: telefone,
                datanascimento: datanascimento
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

      Usuario.findByPk(id).then((usuario) => {
          if (usuario) {
              usuario.destroy({
                  where: { id: id }
              }).then(() => {
                  response.send()
              }).catch((error) => next(error))
          } else {
              response.status(Status.NOT_FOUND).send()
          }
      }).catch((error) => next(error))
  }