import { Router } from 'express'
import { asyncErrorWrapper } from '../errors/asyncErrorWrapper.js'
import ProductController from '../controllers/productController.js'
import ProductService from '../services/productService.js'

const router = Router()
const service = new ProductService()
const controller = new ProductController(service)

router.get(
  '/',
  asyncErrorWrapper((req, res) => controller.getAllProducts(req, res))
)

router.get(
  '/:id',
  asyncErrorWrapper((req, res) => controller.getProductById(req, res))
)

router.post(
  '/',
  asyncErrorWrapper((req, res) => controller.createProduct(req, res))
)

router.put(
  '/:id',
  asyncErrorWrapper((req, res) => controller.updateProduct(req, res))
)

router.delete(
  '/:id',
  asyncErrorWrapper((req, res) => controller.deleteProduct(req, res))
)

export default router
