import type {
  Request,
  Response,
  ErrorRequestHandler,
  NextFunction,
} from 'express'
import { returnHttpError } from '@src/lib/http-error'

export default function errorHandler(
  err: ErrorRequestHandler,
  req: Request,
  res: Response,
  next: NextFunction
) {
  returnHttpError({ req, res, err, msg: 'Something went wrong' })
}
