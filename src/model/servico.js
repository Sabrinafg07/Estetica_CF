const Sequelize = require("sequelize");
const sequelize = require("../database/database");

const Servico = sequelize.define("servico", {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      categoria: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      descricao: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      duracao: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      preco: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.DECIMAL
      },
      cliente_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Cliente', key: 'id'}
      }
});
Servico.associate = function(models) {
  Servico.belongsTo(models.Cliente)
}

return Servico;

module.exports = Servico;
