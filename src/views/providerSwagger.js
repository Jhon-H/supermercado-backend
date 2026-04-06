import { Router } from 'express'

const router = Router()

router.get(
  '/providers',
  /* #swagger.tags = ['Providers']
     #swagger.summary = 'Obtener todos los proveedores'
     #swagger.responses[200] = { description: 'Lista de proveedores', schema: { $ref: '#/definitions/SuccessResponse' } }
     #swagger.responses[500] = { description: 'Error interno', schema: { $ref: '#/definitions/ErrorServer' } }
  */
  () => {}
)

router.get(
  '/providers/:id',
  /* #swagger.tags = ['Providers']
     #swagger.summary = 'Obtener proveedor por ID'
     #swagger.parameters['id'] = { description: 'ID del proveedor' }
     #swagger.responses[200] = { description: 'Proveedor encontrado', schema: { $ref: '#/definitions/SuccessResponse' } }
     #swagger.responses[404] = { description: 'Proveedor no encontrado', schema: { $ref: '#/definitions/ErrorNotFound' } }
     #swagger.responses[500] = { description: 'Error interno', schema: { $ref: '#/definitions/ErrorServer' } }
  */
  () => {}
)

router.post(
  '/providers',
  /* #swagger.tags = ['Providers']
     #swagger.summary = 'Crear un proveedor'
     #swagger.requestBody = { required: true, content: { 'application/json': { schema: { $ref: '#/definitions/ProviderInput' } } } }
     #swagger.responses[201] = { description: 'Proveedor creado', schema: { $ref: '#/definitions/SuccessResponse' } }
     #swagger.responses[400] = { description: 'Datos inválidos', schema: { $ref: '#/definitions/ErrorValidation' } }
     #swagger.responses[409] = { description: 'Email ya existe', schema: { $ref: '#/definitions/ErrorConflict' } }
     #swagger.responses[500] = { description: 'Error interno', schema: { $ref: '#/definitions/ErrorServer' } }
  */
  () => {}
)

router.put(
  '/providers/:id',
  /* #swagger.tags = ['Providers']
     #swagger.summary = 'Actualizar proveedor por ID'
     #swagger.parameters['id'] = { description: 'ID del proveedor' }
     #swagger.requestBody = { required: true, content: { 'application/json': { schema: { $ref: '#/definitions/ProviderInput' } } } }
     #swagger.responses[200] = { description: 'Proveedor actualizado', schema: { $ref: '#/definitions/SuccessResponse' } }
     #swagger.responses[400] = { description: 'Datos inválidos', schema: { $ref: '#/definitions/ErrorValidation' } }
     #swagger.responses[404] = { description: 'Proveedor no encontrado', schema: { $ref: '#/definitions/ErrorNotFound' } }
     #swagger.responses[409] = { description: 'Email ya existe', schema: { $ref: '#/definitions/ErrorConflict' } }
     #swagger.responses[500] = { description: 'Error interno', schema: { $ref: '#/definitions/ErrorServer' } }
  */
  () => {}
)

router.delete(
  '/providers/:id',
  /* #swagger.tags = ['Providers']
     #swagger.summary = 'Eliminar proveedor por ID'
     #swagger.parameters['id'] = { description: 'ID del proveedor' }
     #swagger.responses[200] = { description: 'Proveedor eliminado', schema: { $ref: '#/definitions/SuccessResponse' } }
     #swagger.responses[404] = { description: 'Proveedor no encontrado', schema: { $ref: '#/definitions/ErrorNotFound' } }
     #swagger.responses[500] = { description: 'Error interno', schema: { $ref: '#/definitions/ErrorServer' } }
  */
  () => {}
)

export default router
