import { Model, DataTypes } from 'sequelize';
import sequelize from '../../database/mysql.connection';

class CasosMalforma extends Model {}

CasosMalforma.init(
  {
    idcasos_malforma: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    detectado_prenatal: DataTypes.STRING,
    malforma_prenatal: DataTypes.STRING,
    malformacion: DataTypes.STRING,
    estudios_complemtarios: DataTypes.INTEGER,
    casos_idcasos: DataTypes.INTEGER,
  },
  {
    sequelize,
    tableName: 'casos_malforma',
    timestamps: false,
  },
);

export default CasosMalforma;
