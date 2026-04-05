import { Router } from 'express'
import sequelize from '../config/database.js'
import { asyncErrorWrapper } from '../errors/asyncErrorWrapper.js'
import SeedController from '../controllers/seedController.js'
import SeedService from '../services/seedService.js'

const router = Router()
const service = new SeedService(sequelize)
const controller = new SeedController(service)

router.post(
  '/',
  asyncErrorWrapper((req, res) => controller.seed(req, res))
)

export default router
