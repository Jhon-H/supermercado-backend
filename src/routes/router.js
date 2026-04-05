import { Router } from 'express'
import userRouter from './userRouter.js'

const rootRouter = Router()
const basePath = process.env.API_BASE_PATH || ''

rootRouter.use(`${basePath}/users`, userRouter)

export default rootRouter
