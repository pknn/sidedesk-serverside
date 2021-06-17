import { TicketStatus } from './TicketStatus'

export type TicketSortingColumn = 'status' | 'createdAt'
export type TicketSortingStrategy = 'ASC' | 'DESC'
export interface TicketSortingOption {
  sortBy?: TicketSortingColumn
  strategy?: TicketSortingStrategy
}

export interface TicketQueryOption {
  offset?: number
  limit?: number
  sorting?: TicketSortingOption
  status?: TicketStatus
}
