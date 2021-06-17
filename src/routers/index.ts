import { Router } from 'express'

import { VersionRouter } from './Version'
import { TicketRouter } from './Ticket'

export const AppRouter = Router()
  .use('/version', VersionRouter)
  .use('/tickets', TicketRouter)
