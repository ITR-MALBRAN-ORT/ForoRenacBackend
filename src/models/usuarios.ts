import { Model, DataTypes } from 'sequelize';
import sequelize from '../../database/mysql.connection';

class Usuarios extends Model {}

Usuarios.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    email: DataTypes.STRING,
    nombre: DataTypes.STRING,
    clave: DataTypes.STRING,
    perfil: DataTypes.STRING,
    estado: DataTypes.STRING,
  },
  {
    sequelize,
    tableName: 'users',
    timestamps: false,
  },
);

module.exports = Usuarios;