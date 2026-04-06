import { Router } from 'express'

const router = Router()

router.post(
  '/seeds',
  /* #swagger.tags = ['Seeds']
     #swagger.summary = 'Poblar la base de datos con datos de ejemplo'
     #swagger.description = 'Elimina todos los datos existentes e inserta datos de prueba.'
     #swagger.responses[200] = { description: 'Datos insertados', schema: { $ref: '#/definitions/SuccessResponse' } }
     #swagger.responses[500] = { description: 'Error interno', schema: { $ref: '#/definitions/ErrorServer' } }
  */
  () => {}
)

export default router
