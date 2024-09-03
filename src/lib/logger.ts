import path from 'path'
import { Request } from 'express'
import winston from 'winston'
import DailyRotateFile from 'winston-daily-rotate-file'

const consoleLogger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ level, message, timestamp }) => {
      return `${timestamp} ${level}: ${message}`
    })
  ),
  transports: [new winston.transports.Console()],
})

const fileLogger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new DailyRotateFile({
      filename: '%DATE%-app.log',
      dirname: path.join('logs'),
      maxSize: '20m',
      maxFiles: '30d',
    }),
  ],
})

function httpError(req: Request, msg: string, err: any) {
  fileLogger.error(msg, {
    data: {
      req: {
        path: req.path,
        headers: req.headers,
        params: req.params,
        cookies: req.cookies,
        body: req.body,
      },
      err,
    },
  })
}

export default {
  console: consoleLogger,
  file: fileLogger,
  httpError,
}
