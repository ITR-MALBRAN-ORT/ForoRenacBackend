import { Model, DataTypes } from 'sequelize';
import sequelize from '../../database/mysql.connection';

class Maternidades extends Model {}

Maternidades.init(
  {
    idmaternidades: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    descripcion: DataTypes.STRING,
    ciudad: DataTypes.STRING,
    provincia: DataTypes.STRING,
    estado: DataTypes.STRING,
  },
  {
    sequelize,
    tableName: 'maternidades',
    timestamps: false,
  },
);

export default Maternidades;
