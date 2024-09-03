import type { Request, Response, NextFunction } from 'express'
import { z } from 'zod'
import { HttpError } from '@src/lib/http-error'

type Schema = z.ZodObject<any, any> | z.ZodEffects<any>
type ValidationType = 'body' | 'params' | 'query'

export default function validateSchema(schema: Schema, vt: ValidationType) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const validation = await schema.safeParseAsync(req[vt])

      if (!validation.success) {
        throw new HttpError(
          400,
          'Bad Request',
          validation.error.flatten().fieldErrors
        )
      }

      next()
    } catch (error) {
      next(error)
    }
  }
}
