import type { Request, Response, NextFunction } from 'express'
import { registerSchema } from '@src/schema/auth'

export default class AuthController {
  public async register(
    req: Request,
    res: Response<APIResponse>,
    next: NextFunction
  ) {
    try {
      const input = await registerSchema.parseAsync(req.body)

      console.log(input)

      res.status(200).json({
        message: 'User registered successfully',
        error: null,
        data: null,
      })
    } catch (error) {
      next(error)
    }
  }
}
