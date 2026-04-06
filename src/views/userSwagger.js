import { Router } from 'express'

const router = Router()

router.get(
  '/users',
  /* #swagger.tags = ['Users']
     #swagger.summary = 'Obtener todos los usuarios'
     #swagger.responses[200] = { description: 'Lista de usuarios', schema: { $ref: '#/definitions/SuccessResponse' } }
     #swagger.responses[500] = { description: 'Error interno', schema: { $ref: '#/definitions/ErrorServer' } }
  */
  () => {}
)

router.get(
  '/users/:id',
  /* #swagger.tags = ['Users']
     #swagger.summary = 'Obtener usuario por ID'
     #swagger.parameters['id'] = { description: 'ID del usuario' }
     #swagger.responses[200] = { description: 'Usuario encontrado', schema: { $ref: '#/definitions/SuccessResponse' } }
     #swagger.responses[404] = { description: 'Usuario no encontrado', schema: { $ref: '#/definitions/ErrorNotFound' } }
     #swagger.responses[500] = { description: 'Error interno', schema: { $ref: '#/definitions/ErrorServer' } }
  */
  () => {}
)

router.post(
  '/users',
  /* #swagger.tags = ['Users']
     #swagger.summary = 'Crear un usuario'
     #swagger.requestBody = { required: true, content: { 'application/json': { schema: { $ref: '#/definitions/UserInput' } } } }
     #swagger.responses[201] = { description: 'Usuario creado', schema: { $ref: '#/definitions/SuccessResponse' } }
     #swagger.responses[400] = { description: 'Datos inválidos', schema: { $ref: '#/definitions/ErrorValidation' } }
     #swagger.responses[409] = { description: 'Email ya existe', schema: { $ref: '#/definitions/ErrorConflict' } }
     #swagger.responses[500] = { description: 'Error interno', schema: { $ref: '#/definitions/ErrorServer' } }
  */
  () => {}
)

router.put(
  '/users/:id',
  /* #swagger.tags = ['Users']
     #swagger.summary = 'Actualizar usuario por ID'
     #swagger.parameters['id'] = { description: 'ID del usuario' }
     #swagger.requestBody = { required: true, content: { 'application/json': { schema: { $ref: '#/definitions/UserInput' } } } }
     #swagger.responses[200] = { description: 'Usuario actualizado', schema: { $ref: '#/definitions/SuccessResponse' } }
     #swagger.responses[400] = { description: 'Datos inválidos', schema: { $ref: '#/definitions/ErrorValidation' } }
     #swagger.responses[404] = { description: 'Usuario no encontrado', schema: { $ref: '#/definitions/ErrorNotFound' } }
     #swagger.responses[409] = { description: 'Email ya existe', schema: { $ref: '#/definitions/ErrorConflict' } }
     #swagger.responses[500] = { description: 'Error interno', schema: { $ref: '#/definitions/ErrorServer' } }
  */
  () => {}
)

router.delete(
  '/users/:id',
  /* #swagger.tags = ['Users']
     #swagger.summary = 'Eliminar usuario por ID'
     #swagger.parameters['id'] = { description: 'ID del usuario' }
     #swagger.responses[200] = { description: 'Usuario eliminado', schema: { $ref: '#/definitions/SuccessResponse' } }
     #swagger.responses[404] = { description: 'Usuario no encontrado', schema: { $ref: '#/definitions/ErrorNotFound' } }
     #swagger.responses[500] = { description: 'Error interno', schema: { $ref: '#/definitions/ErrorServer' } }
  */
  () => {}
)

export default router
