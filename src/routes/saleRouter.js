import { Router } from 'express'
import { asyncErrorWrapper } from '../errors/asyncErrorWrapper.js'
import SaleController from '../controllers/saleController.js'
import SaleService from '../services/saleService.js'

const router = Router()
const service = new SaleService()
const controller = new SaleController(service)

router.get(
  '/',
  asyncErrorWrapper((req, res) => controller.getAllSales(req, res))
)

router.get(
  '/:id',
  asyncErrorWrapper((req, res) => controller.getSaleById(req, res))
)

router.post(
  '/',
  asyncErrorWrapper((req, res) => controller.createSale(req, res))
)

router.put(
  '/:id',
  asyncErrorWrapper((req, res) => controller.updateSale(req, res))
)

router.delete(
  '/:id',
  asyncErrorWrapper((req, res) => controller.deleteSale(req, res))
)

export default router
