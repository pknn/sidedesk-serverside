import faker from 'faker'

import { Ticket } from '../../src/models/Ticket'
import { TicketStatus } from '../../src/types/TicketStatus'

export const getRandomItemAndNeighbor = <T>(items: T[]): [T, T] => {
  const randomIndex = faker.datatype.number(items.length - 2)
  const randomItemA = items[randomIndex] as T
  const randomItemB = items[randomIndex + 1] as T

  return [randomItemA, randomItemB]
}

export const filterStatus = (
  tickets: Ticket[],
  ticketStatus: TicketStatus,
): Ticket[] => tickets.filter((ticket) => ticket.status === ticketStatus)

export const filteredStatusLength = (
  tickets: Ticket[],
  ticketStatus: TicketStatus,
): number => filterStatus(tickets, ticketStatus).length
