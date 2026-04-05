import { UniqueConstraintError, ValidationError } from 'sequelize'
import { Sale } from '../models/index.js'
import FieldValidationError from '../errors/fieldValidationError.js'
import NotFoundError from '../errors/notFoundError.js'
import ConflictError from '../errors/conflictError.js'

class SaleService {
  async getAllSales() {
    return await Sale.findAll({
      attributes: { exclude: ['deletedAt'] },
      order: [['date', 'DESC']]
    })
  }

  async getSaleById(id) {
    const sale = await Sale.findByPk(id, {
      attributes: { exclude: ['deletedAt'] }
    })

    if (!sale) {
      throw new NotFoundError('Sale not found')
    }

    return sale
  }

  async createSale(data) {
    try {
      return await Sale.create(data)
    } catch (error) {
      this._handleConstraintError(error)
    }
  }

  async updateSale(id, data) {
    const sale = await this.getSaleById(id)

    try {
      return await sale.update(data)
    } catch (error) {
      this._handleConstraintError(error)
    }
  }

  async deleteSale(id) {
    const sale = await this.getSaleById(id)

    if (!sale) {
      throw new NotFoundError('Sale not found')
    }

    return await sale.destroy()
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

export default SaleService
