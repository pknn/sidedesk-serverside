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

export const toPresenter = (ticket: Ticket): TicketPresenter => ({})
