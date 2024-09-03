import path from 'path'
import { createServer } from 'http'
import express from 'express'
import helmet from 'helmet'
import cookieParser from 'cookie-parser'
import compression from 'compression'
import cors from 'cors'
import morgan from 'morgan'
import errorHandler from './middlewares/error-handler'
import maintenance from './middlewares/maintenance'
import routes from './routes'

const app = express()

app.use(helmet())
app.use(cors())
app.use(compression())
app.use(cookieParser())
app.use(express.json({ limit: '100mb' }))
app.use(morgan(':date[iso] :status | :method :url | :response-time ms'))
app.use(maintenance)
app.use(express.static(path.join('public')))
app.use(maintenance)
app.use(routes)
app.use(errorHandler)

export default createServer(app)
