import { Router } from 'express'
import SaleDetailController from '../controllers/saleDetailController.js'

const router = Router()
const controller = new SaleDetailController()

router.get('/', controller.getAllSaleDetails)
router.get('/:id', controller.getSaleDetailById)
router.post('/', controller.createSaleDetail)
router.put('/:id', controller.updateSaleDetail)
router.delete('/:id', controller.deleteSaleDetail)

export default router
