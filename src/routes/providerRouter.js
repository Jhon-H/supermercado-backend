import { Router } from 'express'
import { asyncErrorWrapper } from '../errors/asyncErrorWrapper.js'
import ProviderController from '../controllers/providerController.js'
import ProviderService from '../services/providerService.js'

const router = Router()
const service = new ProviderService()
const controller = new ProviderController(service)

router.get(
  '/',
  asyncErrorWrapper((req, res) => controller.getAllProviders(req, res))
)

router.get(
  '/:id',
  asyncErrorWrapper((req, res) => controller.getProviderById(req, res))
)

router.post(
  '/',
  asyncErrorWrapper((req, res) => controller.createProvider(req, res))
)

router.put(
  '/:id',
  asyncErrorWrapper((req, res) => controller.updateProvider(req, res))
)

router.delete(
  '/:id',
  asyncErrorWrapper((req, res) => controller.deleteProvider(req, res))
)

export default router
