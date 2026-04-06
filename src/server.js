import express from 'express'
import swaggerUi from 'swagger-ui-express'
import { readFileSync } from 'node:fs'
import rootRouter from './routes/router.js'
import sequelizeConfig from './config/database.js'
import DatabaseSync from './config/databaseSync.js'
import './models/index.js'

const swaggerDocument = JSON.parse(
  readFileSync(new URL('./config/swagger-output.json', import.meta.url), 'utf-8')
)

const app = express()
const basePath = process.env.API_BASE_PATH || ''
const port = process.env.PORT || 3000
const db = new DatabaseSync(sequelizeConfig)

app.use(express.json())
app.use(`${basePath}/docs`, swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.use(rootRouter)

app.listen(port, () => {
  console.log(`App is running on port ${port}`)
  console.log(`Swagger docs available at http://localhost:${port}${basePath}/docs`)
})

await db.sync();
