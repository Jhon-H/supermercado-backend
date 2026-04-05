import express from 'express'
import rootRoutes from './routes/router.js'
import sequelizeConfig from './config/database.js'
import DatabaseSync from './config/databaseSync.js'
import './models/index.js'

const app = express()
const PORT = process.env.PORT || 3000
const db = new DatabaseSync(sequelizeConfig)

app.use(express.json())
app.use(rootRoutes)

app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`)
})

await db.sync();
