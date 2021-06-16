import { Router } from 'express'

import { get } from 'app/controllers/Version'

export const VersionRouter = Router().get('/', get)
