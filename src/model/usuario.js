const Sequelize = require("sequelize");
const sequelize = require("../database/database");

const Usuario = sequelize.define("usuario", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    login: {
        allowNull: false,
        type: Sequelize.STRING(255),
        validate: {
          len: [2, 255]
        }
      },
    nome: {
      allowNull: false,
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
    datanascimento: {
        allowNull: false,
        type: Sequelize.DATEONLY()
      }
});

module.exports = Usuario;