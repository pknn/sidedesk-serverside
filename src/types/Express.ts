import { TicketCreationJsonBody, TicketUpdateJsonBody } from 'app/bodies/Ticket'
import { Request } from 'express'
import {
  TicketSortingColumn,
  TicketSortingStrategy,
} from './TicketQueryOptions'
import { TicketStatus } from './TicketStatus'

export interface GetsRequestQuery {
  offset?: number
  limit?: number
  sort_by?: TicketSortingColumn
  strategy?: TicketSortingStrategy
  status?: TicketStatus
  each?: number
}

export type GetsRequestType = Request<{}, {}, {}, GetsRequestQuery>

export type CreateRequestType = Request<{}, TicketCreationJsonBody>

export type UpdateRequestType = Request<{ id: number }, TicketUpdateJsonBody>
