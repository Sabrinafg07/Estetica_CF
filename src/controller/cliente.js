const Cliente = require('../model/cliente')
const Status = require('http-status')


  exports.buscarUm = (request, response, next) => {
      const id = request.params.id

      Cliente.findByPk(id).then((cliente) => {
          if (cliente) {
              response.send(cliente)
          } else {
              response.status(Status.NOT_FOUND).send()
          }
      }).catch((error) => next(error))
  }

  exports.buscarNome = (request, response, next) => {
    const nome = request.params.nome

    Cliente.findAll({_nome: nome}).then((cliente) => {
        if (cliente) {
            response.send(cliente)
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

      Cliente.findAll({ limit: limite, offset: pagina }).then((cliente) => {
          if (cliente && cliente.length) {
              response.send(cliente)
          } else {
              response.status(Status.NOT_FOUND).send()
          }
      }).catch((error) => next(error))
  
}

  exports.criar = (request, response, next) => {
      const nome = request.body.nome
      const cpf = request.body.cpf
      const sexo = request.body.sexo
      const endereco = request.body.endereco
      const email = request.body.email
      const telefone = request.body.telefone
      const datanascimento = request.body.datanascimento

      Cliente.create({
          nome: nome,
          cpf: cpf,
          sexo: sexo,
          endereco: endereco,
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
      const cpf = request.body.cpf
      const sexo = request.body.sexo
      const endereco = request.body.endereco
      const email = request.body.email
      const telefone = request.body.telefone
      const datanascimento = request.body.datanascimento

      Cliente.findByPk(id).then((cliente) => {
          if (cliente) {
              Cliente.update({
                nome: nome,
                cpf: cpf,
                sexo: sexo,
                endereco: endereco,
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

      Cliente.findByPk(id).then((cliente) => {
          if (cliente) {
              Cliente.destroy({
                  where: { id: id }
              }).then(() => {
                  response.send()
              }).catch((error) => next(error))
          } else {
              response.status(Status.NOT_FOUND).send()
          }
      }).catch((error) => next(error))
  }