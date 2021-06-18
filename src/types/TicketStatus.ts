/* eslint-disable no-unused-vars */
export enum TicketStatus {
  pending,
  accepted,
  resolved,
  rejected,
}

export const ticketStatusOptions: TicketStatus[] = [
  TicketStatus.pending,
  TicketStatus.accepted,
  TicketStatus.resolved,
  TicketStatus.rejected,
]
