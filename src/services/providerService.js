import { UniqueConstraintError, ValidationError } from 'sequelize'
import { Provider } from '../models/index.js'
import FieldValidationError from '../errors/fieldValidationError.js'
import NotFoundError from '../errors/notFoundError.js'
import ConflictError from '../errors/conflictError.js'

class ProviderService {
  async getAllProviders() {
    return await Provider.findAll({
      attributes: { exclude: ['deletedAt'] },
      order: [['name', 'ASC']]
    })
  }

  async getProviderById(id) {
    const provider = await Provider.findByPk(id, {
      attributes: { exclude: ['deletedAt'] }
    })

    if (!provider) {
      throw new NotFoundError('Provider not found')
    }

    return provider
  }

  async createProvider(data) {
    try {
      return await Provider.create(data)
    } catch (error) {
      this._handleConstraintError(error)
    }
  }

  async updateProvider(id, data) {
    const provider = await this.getProviderById(id)

    try {
      return await provider.update(data)
    } catch (error) {
      this._handleConstraintError(error)
    }
  }

  async deleteProvider(id) {
    const provider = await this.getProviderById(id)

    if (!provider) {
      throw new NotFoundError('Provider not found')
    }

    return await provider.destroy()
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

export default ProviderService
