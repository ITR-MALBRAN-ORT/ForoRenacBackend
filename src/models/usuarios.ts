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
    mail: DataTypes.STRING,
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
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

export default Usuarios;
