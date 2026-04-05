import { Router } from 'express'
import ProviderController from '../controllers/providerController.js'

const router = Router()
const controller = new ProviderController()

router.get('/', controller.getAllProviders)
router.get('/:id', controller.getProviderById)
router.post('/', controller.createProvider)
router.put('/:id', controller.updateProvider)
router.delete('/:id', controller.deleteProvider)

export default router
