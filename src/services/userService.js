import { UniqueConstraintError, ValidationError } from 'sequelize'
import { User } from '../models/index.js'
import FieldValidationError from '../errors/fieldValidationError.js'
import NotFoundError from '../errors/notFoundError.js'
import ConflictError from '../errors/conflictError.js'

class UserService {
  async getAllUsers() {
    return await User.findAll({
      attributes: { exclude: ['deletedAt'] },
      order: [['email', 'ASC']]
    })
  }

  async getUserById(id) {
    const user = await User.findByPk(id, {
      attributes: { exclude: ['deletedAt'] }
    })

    if (!user) {
      throw new NotFoundError('User not found')
    }

    return user
  }

  async createUser(data) {
    try {
      return await User.create(data)
    } catch (error) {
      this._handleConstraintError(error)
    }
  }

  async updateUser(id, data) {
    const user = await this.getUserById(id)

    try {
      return await user.update(data)
    } catch (error) {
      this._handleConstraintError(error)
    }
  }

  async deleteUser(id) {
    const user = await this.getUserById(id)

    if (!user) {
      throw new NotFoundError('User not found')
    }

    return await user.destroy()
  }

  _handleConstraintError(error) {
    if (error instanceof UniqueConstraintError) {
      const field = error.errors.map((e) => e.path).join(', ')
      throw new ConflictError(`${field} already exists and should be unique`)
    }

    if (error instanceof ValidationError) {
      throw new FieldValidationError(
        error.errors.map((e) => e.message).join(', ')
      )
    }

    throw error
  }
}

export default UserService
