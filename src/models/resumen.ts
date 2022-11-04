import { Model, DataTypes } from 'sequelize';
import sequelize from '../../database/mysql.connection';

class Resumen extends Model {}

Resumen.init(
  {
    idresumen: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    año: DataTypes.INTEGER,
    mes: DataTypes.STRING,
    con_anomalias_vivos: DataTypes.INTEGER,
    con_anomalias_muertos: DataTypes.INTEGER,
    sin_anomalias_vivos: DataTypes.INTEGER,
    sin_anomalias_muertos: DataTypes.INTEGER,
    maternidades_idmaternidades: DataTypes.INTEGER,
    usuarios_maternidades_usuarios_id: DataTypes.INTEGER,
    usuarios_maternidades_maternidades_id: DataTypes.INTEGER,
  },
  {
    sequelize,
    tableName: 'resumen',
    timestamps: false,
  },
);

export default Resumen;
