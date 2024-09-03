import 'dotenv/config'
import server from './server'
import env from './lib/env'
import logger from './lib/logger'

async function startServer() {
  try {
    server.listen(env.PORT, () =>
      logger.console.info(`[Server] Listening on port ${env.PORT}`)
    )
  } catch (error: any) {
    console.error(error)
    process.exit(1)
  }
}

startServer()
