import createSaleTotalTrigger from '../models/saleTotalTrigger.js'

class DatabaseSync {
  constructor(sequelize) {
    this.sequelize = sequelize
  }

  async sync() {
    try {
      await this.sequelize
        .authenticate()
        .then(() => {
          console.log('Database connection has been established successfully.')
        })
        .catch((err) => {
          console.error('Unable to connect to the database:', err)
        })

      await this.sequelize.sync({ alter: false })

      await createSaleTotalTrigger()

      console.log('Database synchronized successfully.')
    } catch (error) {
      console.error('Error synchronizing database:', error)
    }
  }
}

export default DatabaseSync
