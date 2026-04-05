import { DataTypes } from 'sequelize'
import sequelize from '../config/database.js'

const User = sequelize.define(
  'user',
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
          args: /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ\s]+$/,
          msg: 'Name contains invalid characters'
        },
        len: {
          args: [2, 255],
          msg: 'Name must be between 2 and 255 characters'
        }
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
    role: {
      type: DataTypes.STRING(50),
      allowNull: false,
      validate: {
        notEmpty: { msg: 'Role cannot be empty' },
        len: { args: [3, 50], msg: 'Role must be between 3 and 50 characters' }
      }
    }
  },
  {
    tableName: 'user',
    timestamps: true,
    paranoid: true
  }
)

export default User
