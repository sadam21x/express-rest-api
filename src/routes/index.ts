import { Router } from 'express'
import v1Routes from './v1'

const router = Router()

router.get('/', (_, res) => res.send('Hello World!'))
router.get('/ping', (_, res) => res.send('pong'))
router.use('/v1', v1Routes)

export default router
