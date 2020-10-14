const Sequelize = require("sequelize");
const sequelize = require("../database/database");

const Empresas = sequelize.define("empresas", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    descricao: {
      allowNull: false,
      type: Sequelize.STRING(255),
      validate: {
        len: [2, 255]
      }
    },
    cnpj: {
      allowNull: true,
      type: Sequelize.STRING,
      validate: {
        isNumeric: true,
        len: [2, 255]
      }
    },
    endereco: {
      allowNull: true,
      type: Sequelize.STRING(255),
      validate: {
        len: [2, 255]
      }
    },
    email: {
        allowNull: false,
        type: Sequelize.STRING(255),
        validate: {
          isEmail: true,
          len: [2, 255]
        }
      },
    telefone: {
        allowNull: false,
        type: Sequelize.STRING,
        validate: {
          isNumeric: true,
          len: [2, 255]
        }
      },
});

module.exports = Empresas;