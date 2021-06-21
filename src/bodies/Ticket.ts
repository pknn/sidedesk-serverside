import { Ticket } from 'app/entities/Ticket'
import { QueryDeepPartialEntity } from 'typeorm/query-builder/QueryPartialEntity'

export interface TicketCreationJsonBody {
  title: string
  description: string
  reporter_name: string
  reporter_email?: string
}

export type TicketUpdateJsonBody = Partial<TicketCreationJsonBody>

export const toEntity = (body: TicketCreationJsonBody): Ticket =>
  new Ticket(
    body.title,
    body.description,
    body.reporter_name,
    body.reporter_email,
  )

export const toPartialEntity = (
  ticketUpdateBody: TicketUpdateJsonBody,
): QueryDeepPartialEntity<Ticket> => ({
  title: ticketUpdateBody.title,
  description: ticketUpdateBody.description,
  reporterName: ticketUpdateBody.reporter_name,
  reporterEmail: ticketUpdateBody.reporter_email,
})
