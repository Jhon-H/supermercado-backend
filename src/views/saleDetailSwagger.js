import { Router } from 'express'

const router = Router()

router.get(
  '/sale-details',
  /* #swagger.tags = ['Sale Details']
     #swagger.summary = 'Obtener todos los detalles de venta'
     #swagger.responses[200] = { description: 'Lista de detalles', schema: { $ref: '#/definitions/SuccessResponse' } }
     #swagger.responses[500] = { description: 'Error interno', schema: { $ref: '#/definitions/ErrorServer' } }
  */
  () => {}
)

router.get(
  '/sale-details/:id',
  /* #swagger.tags = ['Sale Details']
     #swagger.summary = 'Obtener detalle de venta por ID'
     #swagger.parameters['id'] = { description: 'ID del detalle de venta' }
     #swagger.responses[200] = { description: 'Detalle encontrado', schema: { $ref: '#/definitions/SuccessResponse' } }
     #swagger.responses[404] = { description: 'Detalle no encontrado', schema: { $ref: '#/definitions/ErrorNotFound' } }
     #swagger.responses[500] = { description: 'Error interno', schema: { $ref: '#/definitions/ErrorServer' } }
  */
  () => {}
)

router.post(
  '/sale-details',
  /* #swagger.tags = ['Sale Details']
     #swagger.summary = 'Crear un detalle de venta'
     #swagger.requestBody = { required: true, content: { 'application/json': { schema: { $ref: '#/definitions/SaleDetailInput' } } } }
     #swagger.responses[201] = { description: 'Detalle creado', schema: { $ref: '#/definitions/SuccessResponse' } }
     #swagger.responses[400] = { description: 'Datos inválidos', schema: { $ref: '#/definitions/ErrorValidation' } }
     #swagger.responses[500] = { description: 'Error interno', schema: { $ref: '#/definitions/ErrorServer' } }
  */
  () => {}
)

router.put(
  '/sale-details/:id',
  /* #swagger.tags = ['Sale Details']
     #swagger.summary = 'Actualizar detalle de venta por ID'
     #swagger.parameters['id'] = { description: 'ID del detalle de venta' }
     #swagger.requestBody = { required: true, content: { 'application/json': { schema: { $ref: '#/definitions/SaleDetailInput' } } } }
     #swagger.responses[200] = { description: 'Detalle actualizado', schema: { $ref: '#/definitions/SuccessResponse' } }
     #swagger.responses[400] = { description: 'Datos inválidos', schema: { $ref: '#/definitions/ErrorValidation' } }
     #swagger.responses[404] = { description: 'Detalle no encontrado', schema: { $ref: '#/definitions/ErrorNotFound' } }
     #swagger.responses[500] = { description: 'Error interno', schema: { $ref: '#/definitions/ErrorServer' } }
  */
  () => {}
)

router.delete(
  '/sale-details/:id',
  /* #swagger.tags = ['Sale Details']
     #swagger.summary = 'Eliminar detalle de venta por ID'
     #swagger.parameters['id'] = { description: 'ID del detalle de venta' }
     #swagger.responses[200] = { description: 'Detalle eliminado', schema: { $ref: '#/definitions/SuccessResponse' } }
     #swagger.responses[404] = { description: 'Detalle no encontrado', schema: { $ref: '#/definitions/ErrorNotFound' } }
     #swagger.responses[500] = { description: 'Error interno', schema: { $ref: '#/definitions/ErrorServer' } }
  */
  () => {}
)

export default router
