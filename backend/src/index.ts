import 'express-async-errors'

import errorHandler from './common/middlewares/error-handler'
import EnvConfig from './common/config'
import { PORT } from './common/config/constants'
import { makeConnection } from './database'
import router from './router'
import app from './server'

const port = EnvConfig.getValueAsNumber(PORT)

makeConnection()

app.use(router)
app.use(errorHandler)

app.listen(port, () => {
  console.log(`API listening at the port ${port}`)
})
