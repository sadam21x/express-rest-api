import type { Request, Response, NextFunction } from 'express'
import fs from 'fs'
import path from 'path'

export default function maintenance(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (fs.existsSync(path.join('public', 'maintenance'))) {
    return res.status(503).send('Service Unavailable')
  }

  next()
}
