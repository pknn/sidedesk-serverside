import { Ticket } from 'app/entities/Ticket'
import { TicketStatus } from 'app/types/TicketStatus'

export interface TicketCreationJsonBody {
  title: string
  description: string
  reporter_name: string
  reporter_email?: string
  status: TicketStatus
}

export type TicketUpdateJsonBody = Partial<TicketCreationJsonBody>

export const toEntity = (body: TicketCreationJsonBody): Ticket => {}
