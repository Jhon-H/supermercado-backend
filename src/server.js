import express from 'express'
import rootRoutes from './routes/router.js'
import sequelizeConfig from './config/database.js'

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use(rootRoutes)

sequelizeConfig
  .authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.')
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err)
  })

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`)
})
