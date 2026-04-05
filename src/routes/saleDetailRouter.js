import { Router } from 'express'
import { asyncErrorWrapper } from '../errors/asyncErrorWrapper.js'
import SaleDetailController from '../controllers/saleDetailController.js'
import SaleDetailService from '../services/saleDetailService.js'

const router = Router()
const service = new SaleDetailService()
const controller = new SaleDetailController(service)

router.get(
  '/',
  asyncErrorWrapper((req, res) => controller.getAllSaleDetails(req, res))
)

router.get(
  '/:id',
  asyncErrorWrapper((req, res) => controller.getSaleDetailById(req, res))
)

router.post(
  '/',
  asyncErrorWrapper((req, res) => controller.createSaleDetail(req, res))
)

router.put(
  '/:id',
  asyncErrorWrapper((req, res) => controller.updateSaleDetail(req, res))
)

router.delete(
  '/:id',
  asyncErrorWrapper((req, res) => controller.deleteSaleDetail(req, res))
)

export default router
