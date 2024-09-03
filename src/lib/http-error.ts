import type { Request, Response } from 'express'
import logger from '@src/lib/logger'

type ReturnHttpError = {
  req: Request
  res: Response
  err: any
  msg: string
}

export class HttpError extends Error {
  status: number
  errors: any

  constructor(status: number, message: string, errors: any = null) {
    super(message)
    this.status = status
    this.errors = errors
  }
}

export async function returnHttpError(params: ReturnHttpError) {
  logger.httpError(params.req, params.err.message || params.msg, params.err)

  params.res.status(params.err.status || 500).json({
    message: params.err.message || params.msg,
    error: params.err.errors || params.err,
    data: null,
  })
}
