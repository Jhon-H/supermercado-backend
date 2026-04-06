import { DataTypes } from 'sequelize'
import sequelize from '../config/database.js'

const Sale = sequelize.define(
  'sale',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW
    },
    total: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        isDecimal: { msg: 'Total must be a valid decimal number' },
        min: { args: [0], msg: 'Total must be greater than or equal to 0' }
      }
    }
  },
  {
    tableName: 'sale',
    timestamps: true,
    paranoid: true
  }
)

export default Sale
