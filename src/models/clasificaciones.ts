import { Model, DataTypes } from 'sequelize';
import sequelize from '../../database/mysql.connection';

class Clasificaciones extends Model {}

Clasificaciones.init(
  {
    idclasificaciones: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    tipo: DataTypes.STRING,
    codigo: DataTypes.INTEGER,
    casos_idcasos: DataTypes.INTEGER,
  },
  {
    sequelize,
    tableName: 'clasificaciones',
    timestamps: false,
  },
);

export default Clasificaciones;
