const Sequelize = require("sequelize");
const sequelize = require("../database/database");

const Cliente = sequelize.define("cliente", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    pacote_id: {
      allowNull: true,
      type: Sequelize.STRING(255),
      references: { model: 'Pacotes', key: 'id'}
    },
    cliente_id: {
      allowNull: false,
      type: Sequelize.STRING,
      references: { model: 'Cliente', key: 'id'}
    },
    servico_id: {
      allowNull: true,
      type: Sequelize.STRING(255),
      references: { model: 'Servico', key: 'id'}
    }
});

Vendas.associate = function(model) {
    Vendas.belongsTo(models.Cliente)
    Vendas.belongsTo(models.Pacotes)
    Vendas.belongsTo(models.Servico)
}

return Vendas;

module.exports = Cliente;