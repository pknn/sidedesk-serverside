import { Router } from 'express'

import { create, get, gets, update } from 'app/controllers/Ticket'

export const TicketRouter = Router()
  .get('/', gets)
  .post('/', create)
  .get('/:id', get)
  .put('/:id', update)
