import Express from 'express'
import Morgan from 'morgan'

import { AppRouter } from 'app/routers'

const morganLogPreference =
  process.env.NODE_ENV === 'development' ? 'dev' : 'combined'

const morganOption = {
  skip: () => process.env.NODE_ENV === 'test',
}

export const getExpressApplication = () =>
  Express()
    .use(Express.json())
    .use(Morgan(morganLogPreference, morganOption))
    .use('/', AppRouter)
