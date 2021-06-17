import { TicketStatus } from 'app/types/TicketStatus'

export interface TicketPresenter {
  id: number
  title: string
  description: string
  reporter_name: string
  reporter_email?: string
  status: TicketStatus
  created_at: Date
  updated_at: Date
}
