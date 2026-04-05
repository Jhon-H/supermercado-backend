import { Router } from 'express'
import { asyncErrorWrapper } from '../errors/asyncErrorWrapper.js'
import UserController from '../controllers/userController.js'
import UserService from '../services/userService.js'

const router = Router()
const service = new UserService()
const controller = new UserController(service)

router.get(
  '/',
  asyncErrorWrapper((req, res) => controller.getAllUsers(req, res))
)

router.get(
  '/:id',
  asyncErrorWrapper((req, res) => controller.getUserById(req, res))
)

router.post(
  '/',
  asyncErrorWrapper((req, res) => controller.createUser(req, res))
)

router.put(
  '/:id',
  asyncErrorWrapper((req, res) => controller.updateUser(req, res))
)

router.delete(
  '/:id',
  asyncErrorWrapper((req, res) => controller.deleteUser(req, res))
)

export default router
