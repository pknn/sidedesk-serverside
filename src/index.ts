import Consola from 'consola'

import { getExpressApplication } from 'app/applications'
import { initializeTypeOrm } from './applications/typeorm'

const host = process.env.HOST || 'localhost'
const port = parseInt(process.env.PORT || '9000')

export const application = getExpressApplication()
initializeTypeOrm()

application.listen(port, host, () => {
  Consola.start(
    `🚀 Serverside Application is running at http://${host}:${port}`,
  )
})
