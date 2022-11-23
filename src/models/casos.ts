import { Model, DataTypes } from 'sequelize';
import sequelize from '../../database/mysql.connection';

class Casos extends Model {}

Casos.init(
  {
    idcasos: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    estado: DataTypes.STRING,
    maternidades_id: DataTypes.INTEGER,
  },
  {
    sequelize,
    tableName: 'casos',
    timestamps: false,
  },
);

export default Casos;
