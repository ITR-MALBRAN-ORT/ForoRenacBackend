import { Model, DataTypes } from 'sequelize';
import sequelize from '../../database/mysql.connection';

class CasosImagenes extends Model {}

CasosImagenes.init(
  {
    idcasos_imagenes: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    directorio: DataTypes.STRING,
    nombre_archivo: DataTypes.STRING,
    nombre_real: DataTypes.STRING,
    casos_idcasos: DataTypes.INTEGER,
  },
  {
    sequelize,
    tableName: 'casos_imagenes',
    timestamps: false,
  },
);

export default CasosImagenes;
