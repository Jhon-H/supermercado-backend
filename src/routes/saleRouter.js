import { Router } from 'express'
import SaleController from '../controllers/saleController.js'

const router = Router()
const controller = new SaleController()

router.get('/', controller.getAllSales)
router.get('/:id', controller.getSaleById)
router.post('/', controller.createSale)
router.put('/:id', controller.updateSale)
router.delete('/:id', controller.deleteSale)

export default router
