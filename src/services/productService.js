import { UniqueConstraintError, ValidationError } from 'sequelize'
import { Product } from '../models/index.js'
import FieldValidationError from '../errors/fieldValidationError.js'
import NotFoundError from '../errors/notFoundError.js'
import ConflictError from '../errors/conflictError.js'

class ProductService {
  async getAllProducts() {
    return await Product.findAll({
      attributes: { exclude: ['deletedAt'] },
      order: [['name', 'ASC']]
    })
  }

  async getProductById(id) {
    const product = await Product.findByPk(id, {
      attributes: { exclude: ['deletedAt'] }
    })

    if (!product) {
      throw new NotFoundError('Product not found')
    }

    return product
  }

  async createProduct(data) {
    try {
      return await Product.create(data)
    } catch (error) {
      this._handleConstraintError(error)
    }
  }

  async updateProduct(id, data) {
    const product = await this.getProductById(id)

    try {
      return await product.update(data)
    } catch (error) {
      this._handleConstraintError(error)
    }
  }

  async deleteProduct(id) {
    const product = await this.getProductById(id)

    if (!product) {
      throw new NotFoundError('Product not found')
    }

    return await product.destroy()
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

export default ProductService
