'use strict'

import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import router from './services/api/routes'
import exceptionHandler from './utils/exceptionHandler'
import requestLog from './utils/requestLog'
import logger from './config/winston.user'
import { PORT, NODE_ENV } from './config/env.config'

const app = new Koa()

app
  .use(bodyParser())
  .use(requestLog)
  .use(exceptionHandler)
  .use(router.routes())

export default app.listen(PORT, () => {
  logger.debug(`HTTP Server listening on port: ${PORT}`)
  logger.debug(`Environment: ${NODE_ENV}`)
})
