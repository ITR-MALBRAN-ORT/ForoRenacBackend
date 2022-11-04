import { Model, DataTypes } from 'sequelize';
import sequelize from '../../database/mysql.connection';

class CasosBebe extends Model {}

CasosBebe.init(
  {
    idcasos_bebe: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    dni: DataTypes.STRING,
    nro_hc: DataTypes.INTEGER,
    fecha_nacimiento: DataTypes.DATE,
    nacido: DataTypes.STRING,
    alta: DataTypes.STRING,
    sexo: DataTypes.STRING,
    peso: DataTypes.INTEGER,
    talla: DataTypes.INTEGER,
    pc: DataTypes.INTEGER,
    eg: DataTypes.INTEGER,
    gestas: DataTypes.INTEGER,
    gemelo: DataTypes.STRING,
    con_alta: DataTypes.STRING,
    hosp_derivado: DataTypes.STRING,
    casos_idcasos: DataTypes.INTEGER,
  },
  {
    sequelize,
    tableName: 'casos_bebe',
    timestamps: false,
  },
);

export default CasosBebe;
