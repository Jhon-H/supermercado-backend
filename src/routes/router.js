import { Router } from 'express'
import userRouter from './userRouter.js'
import providerRouter from './providerRouter.js'
import productRouter from './productRouter.js'
import saleRouter from './saleRouter.js'
import saleDetailRouter from './saleDetailRouter.js'

const rootRouter = Router()
const basePath = process.env.API_BASE_PATH || ''

rootRouter.use(`${basePath}/users`, userRouter)
rootRouter.use(`${basePath}/providers`, providerRouter)
rootRouter.use(`${basePath}/products`, productRouter)
rootRouter.use(`${basePath}/sales`, saleRouter)
rootRouter.use(`${basePath}/sale-details`, saleDetailRouter)

export default rootRouter
