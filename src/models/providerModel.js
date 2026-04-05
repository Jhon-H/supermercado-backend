import { DataTypes } from 'sequelize'
import sequelize from '../config/database.js'

const Provider = sequelize.define(
  'provider',
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
    phone: {
      type: DataTypes.STRING(20),
      allowNull: false,
      validate: {
        notEmpty: { msg: 'Phone cannot be empty' },
        is: {
          args: /^[0-9+\-\s()]+$/,
          msg: 'Phone contains invalid characters'
        },
        len: { args: [7, 20], msg: 'Phone must be between 7 and 20 characters' }
      }
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: { msg: 'Email cannot be empty' },
        isEmail: { msg: 'Email must be a valid email address' },
        len: {
          args: [5, 255],
          msg: 'Email must be between 5 and 255 characters'
        }
      }
    },
    city: {
      type: DataTypes.STRING(100),
      allowNull: false,
      validate: {
        notEmpty: { msg: 'City cannot be empty' },
        is: {
          args: /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/,
          msg: 'City contains invalid characters'
        },
        len: {
          args: [2, 100],
          msg: 'City must be between 2 and 100 characters'
        }
      }
    }
  },
  {
    tableName: 'provider',
    timestamps: true,
    paranoid: true
  }
)

export default Provider
