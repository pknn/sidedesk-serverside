import { Router } from 'express'

import { VersionRouter } from './Version'

export const AppRouter = Router().use('/version', VersionRouter)
