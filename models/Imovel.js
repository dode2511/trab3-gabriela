import { DataTypes } from 'sequelize';
import { sequelize } from '../databases/conecta.js';
import { Usuario } from './Usuario.js'

export const Imovel = sequelize.define('imovel', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  tipo: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  endereco: {
    type: DataTypes.INTEGER(6),
    defaultValue: 0
  },
  num: {
    type: DataTypes.INTEGER(5),
    defaultValue: 0
  },
},  {
    tableName: "imoveis"
  },
  {
  paranoid: true
});

Imovel.belongsTo(Usuario, {
  foreignKey: {
    name: 'usuario_id',
    allowNull: false
  },
  onDelete: 'RESTRICT',
  onUpdate: 'CASCADE'
})

Usuario.hasMany(Imovel, {
  foreignKey: 'usuario_id'
})
