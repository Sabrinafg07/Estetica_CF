const Sequelize = require("sequelize");
const sequelize = require("../database/database");


const Pacotes = sequelize.define("pacotes", {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
    descricao: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
    preco: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.DECIMAL
      },
    quantidade: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.DECIMAL
      },
    cliente_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Cliente', key: 'id'}
      },
});
Pacotes.associate = function(models) {
  Pacotes.belongsTo(models.Cliente)
}
return Pacotes;

module.exports = Pacotes;