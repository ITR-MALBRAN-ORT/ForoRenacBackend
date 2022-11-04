import { Model, DataTypes } from 'sequelize';
import sequelize from '../../database/mysql.connection';

class Pedidos extends Model {}

Pedidos.init(
  {
    idpedidos: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    fecha: DataTypes.DATE,
    pantalla: DataTypes.STRING,
    campo: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    estado: DataTypes.STRING,
    casos_idcasos: DataTypes.INTEGER,
    resumen_idresumen: DataTypes.INTEGER,
  },
  {
    sequelize,
    tableName: 'pedidos',
    timestamps: false,
  },
);

export default Pedidos;
