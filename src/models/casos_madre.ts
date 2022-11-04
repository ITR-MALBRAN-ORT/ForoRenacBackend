import { Model, DataTypes } from 'sequelize';
import sequelize from '../../database/mysql.connection';

class CasosMadre extends Model {}

CasosMadre.init(
  {
    idcasos_madre: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    dni: DataTypes.STRING,
    nro_hc: DataTypes.INTEGER,
    edad: DataTypes.INTEGER,
    domicilio_calle: DataTypes.STRING,
    domicilio_nro: DataTypes.INTEGER,
    domicilio_locaidad: DataTypes.STRING,
    domicilio_pcia: DataTypes.STRING,
    telefono: DataTypes.INTEGER,
    casos_idcasos: DataTypes.INTEGER,
  },
  {
    sequelize,
    tableName: 'casos_madre',
    timestamps: false,
  },
);

export default CasosMadre;
