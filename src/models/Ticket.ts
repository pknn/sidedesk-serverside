export type TicketStatus = 'pending' | 'accepted' | 'resolved' | 'rejected'

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
