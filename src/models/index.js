import User from './userModel.js'
import Provider from './providerModel.js'
import Product from './productModel.js'
import Sale from './saleModel.js'
import SaleDetail from './saleDetailModel.js'

Provider.hasMany(Product, {
  foreignKey: 'providerId',
  as: 'products',
  onDelete: 'RESTRICT',
  onUpdate: 'CASCADE'
})
Product.belongsTo(Provider, {
  foreignKey: 'providerId',
  as: 'provider',
  onDelete: 'RESTRICT',
  onUpdate: 'CASCADE'
})

User.hasMany(Sale, {
  foreignKey: 'userId',
  as: 'sales',
  onDelete: 'RESTRICT',
  onUpdate: 'CASCADE'
})
Sale.belongsTo(User, {
  foreignKey: 'userId',
  as: 'user',
  onDelete: 'RESTRICT',
  onUpdate: 'CASCADE'
})

Sale.hasMany(SaleDetail, {
  foreignKey: 'saleId',
  as: 'details',
  onDelete: 'RESTRICT',
  onUpdate: 'CASCADE'
})
SaleDetail.belongsTo(Sale, {
  foreignKey: 'saleId',
  as: 'sale',
  onDelete: 'RESTRICT',
  onUpdate: 'CASCADE'
})

Product.hasMany(SaleDetail, {
  foreignKey: 'productId',
  as: 'saleDetails',
  onDelete: 'RESTRICT',
  onUpdate: 'CASCADE'
})
SaleDetail.belongsTo(Product, {
  foreignKey: 'productId',
  as: 'product',
  onDelete: 'RESTRICT',
  onUpdate: 'CASCADE'
})

export { User, Provider, Product, Sale, SaleDetail }
