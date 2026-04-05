import { DataTypes } from 'sequelize'
import sequelize from '../config/database.js'

const SaleDetail = sequelize.define(
  'saleDetail',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    saleId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        isInt: { msg: 'Quantity must be a valid integer' },
        min: { args: [1], msg: 'Quantity must be at least 1' }
      }
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        isDecimal: { msg: 'Price must be a valid decimal number' },
        min: { args: [0.01], msg: 'Price must be greater than 0' }
      }
    }
  },
  {
    tableName: 'saleDetail',
    timestamps: true,
    paranoid: true
  }
)

export default SaleDetail
