import faker from 'faker'

import { TicketStatus } from '../../src/types/TicketStatus'
import { Ticket as TicketEntity } from '../../src/entities/Ticket'
import { Ticket as TicketModel } from '../../src/models/Ticket'
import { TicketCreationJsonBody } from '../../src/bodies/Ticket'

export const ticketStatusOptions: TicketStatus[] = [
  TicketStatus.pending,
  TicketStatus.accepted,
  TicketStatus.resolved,
  TicketStatus.rejected,
]

export const getMockDescription = () => faker.lorem.sentences(50)

export const getMockEntity = (): TicketEntity =>
  new TicketEntity(
    faker.lorem.sentence(5),
    faker.lorem.sentences(50),
    faker.name.firstName(),
    faker.internet.email(),
  )

export const getBulkMockEntity = (n: number = 10): TicketEntity[] => {
  const result = []
  for (let i = 0; i < n; i += 1) {
    const mockEntity = getMockEntity()
    mockEntity.status = faker.random.arrayElement(ticketStatusOptions)
    result.push(mockEntity)
  }
  return result
}

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

export const getMockCreationBody = (): TicketCreationJsonBody => ({
  title: faker.lorem.sentence(5),
  description: faker.lorem.sentences(50),
  reporter_name: faker.name.firstName(),
  reporter_email: faker.internet.email(),
})
