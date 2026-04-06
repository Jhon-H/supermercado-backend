import { Router } from 'express'

const router = Router()

router.get(
  '/products',
  /* #swagger.tags = ['Products']
     #swagger.summary = 'Obtener todos los productos'
     #swagger.responses[200] = { description: 'Lista de productos', schema: { $ref: '#/definitions/SuccessResponse' } }
     #swagger.responses[500] = { description: 'Error interno', schema: { $ref: '#/definitions/ErrorServer' } }
  */
  () => {}
)

router.get(
  '/products/:id',
  /* #swagger.tags = ['Products']
     #swagger.summary = 'Obtener producto por ID'
     #swagger.parameters['id'] = { description: 'ID del producto' }
     #swagger.responses[200] = { description: 'Producto encontrado', schema: { $ref: '#/definitions/SuccessResponse' } }
     #swagger.responses[404] = { description: 'Producto no encontrado', schema: { $ref: '#/definitions/ErrorNotFound' } }
     #swagger.responses[500] = { description: 'Error interno', schema: { $ref: '#/definitions/ErrorServer' } }
  */
  () => {}
)

router.post(
  '/products',
  /* #swagger.tags = ['Products']
     #swagger.summary = 'Crear un producto'
     #swagger.requestBody = { required: true, content: { 'application/json': { schema: { $ref: '#/definitions/ProductInput' } } } }
     #swagger.responses[201] = { description: 'Producto creado', schema: { $ref: '#/definitions/SuccessResponse' } }
     #swagger.responses[400] = { description: 'Datos inválidos', schema: { $ref: '#/definitions/ErrorValidation' } }
     #swagger.responses[500] = { description: 'Error interno', schema: { $ref: '#/definitions/ErrorServer' } }
  */
  () => {}
)

router.put(
  '/products/:id',
  /* #swagger.tags = ['Products']
     #swagger.summary = 'Actualizar producto por ID'
     #swagger.parameters['id'] = { description: 'ID del producto' }
     #swagger.requestBody = { required: true, content: { 'application/json': { schema: { $ref: '#/definitions/ProductInput' } } } }
     #swagger.responses[200] = { description: 'Producto actualizado', schema: { $ref: '#/definitions/SuccessResponse' } }
     #swagger.responses[400] = { description: 'Datos inválidos', schema: { $ref: '#/definitions/ErrorValidation' } }
     #swagger.responses[404] = { description: 'Producto no encontrado', schema: { $ref: '#/definitions/ErrorNotFound' } }
     #swagger.responses[500] = { description: 'Error interno', schema: { $ref: '#/definitions/ErrorServer' } }
  */
  () => {}
)

router.delete(
  '/products/:id',
  /* #swagger.tags = ['Products']
     #swagger.summary = 'Eliminar producto por ID'
     #swagger.parameters['id'] = { description: 'ID del producto' }
     #swagger.responses[200] = { description: 'Producto eliminado', schema: { $ref: '#/definitions/SuccessResponse' } }
     #swagger.responses[404] = { description: 'Producto no encontrado', schema: { $ref: '#/definitions/ErrorNotFound' } }
     #swagger.responses[500] = { description: 'Error interno', schema: { $ref: '#/definitions/ErrorServer' } }
  */
  () => {}
)

export default router
