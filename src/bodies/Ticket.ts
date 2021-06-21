import { Ticket } from 'app/entities/Ticket'
import { TicketStatus } from 'app/types/TicketStatus'
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity'

export interface TicketCreationJsonBody {
  title: string
  description: string
  reporter_name: string
  reporter_email?: string
}

export type TicketUpdateJsonBody = {
  title?: string
  description?: string
  reporter_name?: string
  reporter_email?: string
  status?: TicketStatus
}

export const toEntity = (body: TicketCreationJsonBody): Ticket =>
  new Ticket(
    body.title,
    body.description,
    body.reporter_name,
    body.reporter_email,
  )

export const toPartialEntity = (
  ticketUpdateBody: TicketUpdateJsonBody,
): QueryDeepPartialEntity<Ticket> => {
  const preparedBody = Object.entries({
    title: ticketUpdateBody.title,
    description: ticketUpdateBody.description,
    reporterName: ticketUpdateBody.reporter_name,
    reporterEmail: ticketUpdateBody.reporter_email,
    status: ticketUpdateBody.status,
  })
  return Object.fromEntries(preparedBody.filter(([_, v]) => !!v))
}
