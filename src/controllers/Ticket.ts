import { Request, Response } from 'express'
import Consola from 'consola'

import * as TicketUseCase from 'app/useCases/Ticket'
import { toPresenter } from 'app/models/Ticket'
import { toTicketQueryOption } from 'app/helpers/misc'
import {
  CreateRequestType,
  GetsRequestType,
  UpdateRequestType,
} from 'app/types/Express'
import { TicketCreationJsonBody, TicketUpdateJsonBody } from 'app/bodies/Ticket'
import { EntityNotFoundError } from 'typeorm'

export const get = async (request: Request, response: Response) => {
  const { id } = request.params
  if (!id) {
    return response.sendStatus(401)
  }
  try {
    const idNumber = parseInt(id)
    const ticket = await TicketUseCase.getTicket(idNumber)
    return response.json(toPresenter(ticket))
  } catch (error) {
    if (error instanceof EntityNotFoundError) {
      return response.sendStatus(404)
    } else {
      Consola.error(error)
      return response.sendStatus(500)
    }
  }
}

export const gets = async (request: GetsRequestType, response: Response) => {
  const queryOption = toTicketQueryOption(request.query)
  const result = await TicketUseCase.getTickets(queryOption)
  return response.json(result.map(toPresenter))
}

export const create = async (
  request: CreateRequestType,
  response: Response,
) => {
  const body: TicketCreationJsonBody = request.body
  try {
    const result = await TicketUseCase.create(body)
    return response.status(201).send(toPresenter(result))
  } catch (error) {
    Consola.error(error)
    return response.sendStatus(400)
  }
}

export const update = async (
  request: UpdateRequestType,
  response: Response,
) => {
  const { id } = request.params
  if (!id) {
    return response.sendStatus(401)
  }

  const body: TicketUpdateJsonBody = request.body
  try {
    const updatedTicket = await TicketUseCase.update(id, body)
    return response.json(toPresenter(updatedTicket))
  } catch (error) {
    Consola.error(error)
    return response.sendStatus(400)
  }
}
