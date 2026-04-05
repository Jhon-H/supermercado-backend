import { User, Provider, Product, Sale, SaleDetail } from '../models/index.js'

class SeedService {
  constructor(sequelize) {
    this.sequelize = sequelize
  }

  async seed() {
    const transaction = await this.sequelize.transaction()

    try {
      await SaleDetail.destroy({ where: {}, force: true, transaction })
      await Sale.destroy({ where: {}, force: true, transaction })
      await Product.destroy({ where: {}, force: true, transaction })
      await Provider.destroy({ where: {}, force: true, transaction })
      await User.destroy({ where: {}, force: true, transaction })

      const [user1, user2] = await User.bulkCreate(
        [
          { name: 'Carlos Ramírez', email: 'carlos@mail.com', role: 'admin' },
          { name: 'María López', email: 'maria@mail.com', role: 'cajero' },
          { name: 'Andrés Torres', email: 'andres@mail.com', role: 'cajero' }
        ],
        { transaction }
      )

      const [provider1, provider2] = await Provider.bulkCreate(
        [
          {
            name: 'Distribuidora El Campo',
            phone: '3101234567',
            email: 'elcampo@mail.com',
            city: 'Manizales'
          },
          {
            name: 'Lácteos del Valle',
            phone: '3209876543',
            email: 'lacteos@mail.com',
            city: 'Cali'
          }
        ],
        { transaction }
      )

      const [product1, product2, product3] = await Product.bulkCreate(
        [
          {
            name: 'Arroz Diana 500g',
            description: 'Arroz blanco de primera calidad',
            price: 3500,
            stock: 100,
            providerId: provider1.id
          },
          {
            name: 'Aceite Girasol 1L',
            description: 'Aceite vegetal de girasol',
            price: 12800,
            stock: 50,
            providerId: provider1.id
          },
          {
            name: 'Azúcar Manuelita 1kg',
            description: 'Azúcar refinada blanca',
            price: 4200,
            stock: 80,
            providerId: provider1.id
          }
        ],
        { transaction }
      )

      const [product4, product5, product6] = await Product.bulkCreate(
        [
          {
            name: 'Leche Entera 1L',
            description: 'Leche entera pasteurizada',
            price: 4500,
            stock: 120,
            providerId: provider2.id
          },
          {
            name: 'Queso Campesino 500g',
            description: 'Queso fresco campesino',
            price: 8900,
            stock: 30,
            providerId: provider2.id
          },
          {
            name: 'Yogurt Natural 1L',
            description: 'Yogurt natural sin azúcar',
            price: 6700,
            stock: 60,
            providerId: provider2.id
          }
        ],
        { transaction }
      )

      const sale1 = await Sale.create(
        { userId: user1.id, date: new Date(), total: 54600 },
        { transaction }
      )

      await SaleDetail.bulkCreate(
        [
          {
            saleId: sale1.id,
            productId: product1.id,
            quantity: 3,
            price: 3500
          },
          {
            saleId: sale1.id,
            productId: product2.id,
            quantity: 1,
            price: 12800
          },
          {
            saleId: sale1.id,
            productId: product4.id,
            quantity: 2,
            price: 4500
          },
          {
            saleId: sale1.id,
            productId: product5.id,
            quantity: 1,
            price: 8900
          },
          {
            saleId: sale1.id,
            productId: product6.id,
            quantity: 2,
            price: 6700
          }
        ],
        { transaction }
      )

      const sale2 = await Sale.create(
        { userId: user2.id, date: new Date(), total: 11900 },
        { transaction }
      )

      await SaleDetail.bulkCreate(
        [
          {
            saleId: sale2.id,
            productId: product3.id,
            quantity: 2,
            price: 4200
          },
          {
            saleId: sale2.id,
            productId: product1.id,
            quantity: 1,
            price: 3500
          }
        ],
        { transaction }
      )

      await transaction.commit()
    } catch (error) {
      await transaction.rollback()
      throw error
    }
  }
}

export default SeedService
