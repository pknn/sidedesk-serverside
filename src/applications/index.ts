import Express from 'express'
import Morgan from 'morgan'
import cors from 'cors'

import { AppRouter } from 'app/routers'

const morganLogPreference =
  process.env.NODE_ENV === 'development' ? 'dev' : 'combined'

const morganOption = {
  skip: () => process.env.NODE_ENV === 'test',
}

export const getExpressApplication = () =>
  Express()
    .use(
      cors({
        origin: ['http://localhost:3000', 'http://localhost'],
      }),
    )
    .use(Express.json())
    .use(Morgan(morganLogPreference, morganOption))
    .use('/', AppRouter)
