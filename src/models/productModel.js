import { DataTypes } from 'sequelize'
import sequelize from '../config/database.js'

const Product = sequelize.define(
  'product',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate: {
        notEmpty: { msg: 'Name cannot be empty' },
        is: {
          args: /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ0-9\s.,-]+$/,
          msg: 'Name contains invalid characters'
        },
        len: {
          args: [2, 255],
          msg: 'Name must be between 2 and 255 characters'
        }
      }
    },
    description: {
      type: DataTypes.STRING(500),
      allowNull: true,
      validate: {
        len: {
          args: [0, 500],
          msg: 'Description must be at most 500 characters'
        }
      }
    },
    price: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
      validate: {
        isDecimal: { msg: 'Price must be a valid decimal number' },
        min: { args: [0.01], msg: 'Price must be greater than 0' }
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
      validate: {
        isInt: { msg: 'Stock must be a valid integer' },
        min: { args: [0], msg: 'Stock cannot be negative' }
      }
    },
    providerId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    tableName: 'product',
    timestamps: true,
    paranoid: true
  }
)

export default Product
