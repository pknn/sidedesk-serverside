import { Ticket } from 'app/entities/Ticket'

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
