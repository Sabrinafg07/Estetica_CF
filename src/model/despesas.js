const Sequelize= require("sequelize");
const sequelize= require ("../database/database");

const Despesas= sequelize.define("despesas", {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
    descricao: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
        validate: {
            len: [2, 255]
          }
      },
    valor: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.DECIMAL
      },
    dataPagamento: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.DATE
      },
    pago: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.BOOLEAN
      },
    observacoes: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
        validate: {
            len: [2, 255]
          }
      },
}) 