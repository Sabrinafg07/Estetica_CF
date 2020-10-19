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
    servico_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Servico', key: 'id'}
      }
});
Pacotes.associate = function(models) {
  Pacotes.hasMany(model.Servico, {
    foreignKey: 'servico_id'
  }) 
  Pacotes.hasMany(model.Vendas, {
    foreignKey: 'pacotes_id'
  }) 
}
return Pacotes;

module.exports = Pacotes;