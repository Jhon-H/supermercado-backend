import { Router } from 'express'
import ProductController from '../controllers/productController.js'

const router = Router()
const controller = new ProductController()

router.get('/', controller.getAllProducts)
router.get('/:id', controller.getProductById)
router.post('/', controller.createProduct)
router.put('/:id', controller.updateProduct)
router.delete('/:id', controller.deleteProduct)

export default router
