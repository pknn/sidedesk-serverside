import Consola from 'consola'

import { getExpressApplication } from 'app/applications'

const host = process.env.HOST || 'localhost'
const port = parseInt(process.env.PORT || '9000')

export const application = getExpressApplication()

application.listen(port, host, () => {
  Consola.start(
    `🚀 Serverside Application is running at http://${host}:${port}`,
  )
})
