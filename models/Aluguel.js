import { DataTypes } from 'sequelize';
import { sequelize } from '../databases/conecta.js';
import { Imovel } from './Imovel.js';

export const Aluguel = sequelize.define('aluguel', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  comentario: {
    type: DataTypes.STRING(255),
  },
  disponiveis: {
    type: DataTypes.INTEGER(2),
    allowNull: false
  }
}, {
  tableName: "alugueis"
});

Aluguel.belongsTo(Imovel, {
  foreignKey: {
    name: 'imovel_id',
    allowNull: false
  },

})


