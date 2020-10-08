const Sequelize = require("sequelize");
const sequelize = require("../database/database");

const Cliente = sequelize.define("cliente", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    nome: {
      allowNull: false,
      type: Sequelize.STRING(255),
      validate: {
        len: [2, 255]
      }
    },
    cpf: {
      allowNull: false,
      type: Sequelize.BIGINT,
    },
    endereco: {
      allowNull: false,
      type: Sequelize.STRING(255),
      validate: {
        len: [2, 255]
      }
    },
    sexo: {
        allowNull: false,
        type: Sequelize.STRING(40),
        validate: {
          len: [2, 40]
        }
    },
    email: {
        allowNull: false,
        type: Sequelize.STRING(255),
        validate: {
          len: [2, 255]
        }
      },
    telefone: {
        allowNull: false,
        type: Sequelize.BIGINT
      },
    datanascimento: {
        allowNull: false,
        type: Sequelize.DATEONLY()
      },
});

module.exports = Cliente;