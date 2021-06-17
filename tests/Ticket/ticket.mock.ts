import faker from 'faker'

import { TicketStatus } from '../../src/types/TicketStatus'
import { Ticket as TicketEntity } from '../../src/entities/Ticket'
import { Ticket as TicketModel } from '../../src/models/Ticket'

export const ticketStatusOptions: TicketStatus[] = [
  'pending',
  'accepted',
  'resolved',
  'rejected',
]

export const getMockDescription = () => faker.lorem.sentences(50)

export const getMockEntity = (): TicketEntity =>
  new TicketEntity(
    faker.lorem.sentence(5),
    faker.lorem.sentences(50),
    faker.name.firstName(),
    faker.internet.email(),
  )

export const getMockModel = (): TicketModel => ({
  id: faker.datatype.number(),
  title: faker.lorem.sentence(5),
  description: faker.lorem.sentences(50),
  reporterName: faker.name.firstName(),
  reporterEmail: faker.internet.email(),
  status: faker.random.arrayElement(ticketStatusOptions),
  createdAt: faker.date.future(),
  updatedAt: faker.date.future(),
})
