import { TicketPresenter } from 'app/presenters/Ticket'
import { TicketStatus } from 'app/types/TicketStatus'

export interface Ticket {
  id: number
  title: string
  description: string
  reporterName: string
  reporterEmail?: string
  status: TicketStatus
  createdAt: Date
  updatedAt: Date
}

export const toPresenter = (ticket: Ticket): TicketPresenter => ({
  id: ticket.id,
  title: ticket.title,
  description: ticket.description,
  reporter_name: ticket.reporterName,
  reporter_email: ticket.reporterEmail,
  status: ticket.status,
  created_at: ticket.createdAt,
  updated_at: ticket.updatedAt,
})
