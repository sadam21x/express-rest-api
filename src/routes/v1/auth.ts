import { Router } from 'express'
import validateSchema from '@src/middlewares/schema-validator'
import AuthController from '@src/controllers/v1/auth'
import { registerSchema } from '@src/schema/auth'

const router = Router()
const authController = new AuthController()

router.post(
  '/register',
  validateSchema(registerSchema, 'body'),
  authController.register.bind(authController)
)

export default router
