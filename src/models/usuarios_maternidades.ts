import { Model, DataTypes } from 'sequelize';
import sequelize from '../../database/mysql.connection';

class UsuariosMaternidades extends Model {}

UsuariosMaternidades.init(
  {
    usuarios_id: DataTypes.INTEGER,
    maternidades_id: DataTypes.STRING,
  },
  {
    sequelize,
    tableName: 'usuarios_maternidades',
    timestamps: false,
  },
);

export default UsuariosMaternidades;
