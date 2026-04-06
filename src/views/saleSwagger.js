import { Router } from 'express'

const router = Router()

router.get(
  '/sales',
  /* #swagger.tags = ['Sales']
     #swagger.summary = 'Obtener todas las ventas'
     #swagger.responses[200] = { description: 'Lista de ventas', schema: { $ref: '#/definitions/SuccessResponse' } }
     #swagger.responses[500] = { description: 'Error interno', schema: { $ref: '#/definitions/ErrorServer' } }
  */
  () => {}
)

router.get(
  '/sales/:id',
  /* #swagger.tags = ['Sales']
     #swagger.summary = 'Obtener venta por ID'
     #swagger.parameters['id'] = { description: 'ID de la venta' }
     #swagger.responses[200] = { description: 'Venta encontrada', schema: { $ref: '#/definitions/SuccessResponse' } }
     #swagger.responses[404] = { description: 'Venta no encontrada', schema: { $ref: '#/definitions/ErrorNotFound' } }
     #swagger.responses[500] = { description: 'Error interno', schema: { $ref: '#/definitions/ErrorServer' } }
  */
  () => {}
)

router.post(
  '/sales',
  /* #swagger.tags = ['Sales']
     #swagger.summary = 'Crear una venta'
     #swagger.description = 'Crea una venta. El total inicia en 0 y se actualiza automáticamente mediante triggers al agregar detalles de venta.'
     #swagger.requestBody = { required: true, content: { 'application/json': { schema: { $ref: '#/definitions/SaleInput' } } } }
     #swagger.responses[201] = { description: 'Venta creada', schema: { $ref: '#/definitions/SuccessResponse' } }
     #swagger.responses[400] = { description: 'Datos inválidos', schema: { $ref: '#/definitions/ErrorValidation' } }
     #swagger.responses[500] = { description: 'Error interno', schema: { $ref: '#/definitions/ErrorServer' } }
  */
  () => {}
)

router.put(
  '/sales/:id',
  /* #swagger.tags = ['Sales']
     #swagger.summary = 'Actualizar venta por ID'
     #swagger.parameters['id'] = { description: 'ID de la venta' }
     #swagger.requestBody = { required: true, content: { 'application/json': { schema: { $ref: '#/definitions/SaleInput' } } } }
     #swagger.responses[200] = { description: 'Venta actualizada', schema: { $ref: '#/definitions/SuccessResponse' } }
     #swagger.responses[400] = { description: 'Datos inválidos', schema: { $ref: '#/definitions/ErrorValidation' } }
     #swagger.responses[404] = { description: 'Venta no encontrada', schema: { $ref: '#/definitions/ErrorNotFound' } }
     #swagger.responses[500] = { description: 'Error interno', schema: { $ref: '#/definitions/ErrorServer' } }
  */
  () => {}
)

router.delete(
  '/sales/:id',
  /* #swagger.tags = ['Sales']
     #swagger.summary = 'Eliminar venta por ID'
     #swagger.parameters['id'] = { description: 'ID de la venta' }
     #swagger.responses[200] = { description: 'Venta eliminada', schema: { $ref: '#/definitions/SuccessResponse' } }
     #swagger.responses[404] = { description: 'Venta no encontrada', schema: { $ref: '#/definitions/ErrorNotFound' } }
     #swagger.responses[500] = { description: 'Error interno', schema: { $ref: '#/definitions/ErrorServer' } }
  */
  () => {}
)

export default router
