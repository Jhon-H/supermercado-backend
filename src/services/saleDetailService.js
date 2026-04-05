import { UniqueConstraintError, ValidationError } from 'sequelize'
import { SaleDetail } from '../models/index.js'
import FieldValidationError from '../errors/fieldValidationError.js'
import NotFoundError from '../errors/notFoundError.js'
import ConflictError from '../errors/conflictError.js'

class SaleDetailService {
  async getAllSaleDetails() {
    return await SaleDetail.findAll({
      attributes: { exclude: ['deletedAt'] },
      order: [['id', 'ASC']]
    })
  }

  async getSaleDetailById(id) {
    const saleDetail = await SaleDetail.findByPk(id, {
      attributes: { exclude: ['deletedAt'] }
    })

    if (!saleDetail) {
      throw new NotFoundError('Sale detail not found')
    }

    return saleDetail
  }

  async createSaleDetail(data) {
    try {
      return await SaleDetail.create(data)
    } catch (error) {
      this._handleConstraintError(error)
    }
  }

  async updateSaleDetail(id, data) {
    const saleDetail = await this.getSaleDetailById(id)

    try {
      return await saleDetail.update(data)
    } catch (error) {
      this._handleConstraintError(error)
    }
  }

  async deleteSaleDetail(id) {
    const saleDetail = await this.getSaleDetailById(id)

    if (!saleDetail) {
      throw new NotFoundError('Sale detail not found')
    }

    return await saleDetail.destroy()
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

export default SaleDetailService
