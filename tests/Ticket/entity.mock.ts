import faker from 'faker'

import { Ticket } from '../../src/entities/Ticket'

export const getMockTicket = (): Ticket =>
  new Ticket(
    faker.lorem.sentence(5),
    faker.lorem.sentences(50),
    faker.name.firstName(),
    faker.internet.email(),
  )

export const getMockDescription = () => faker.lorem.sentences(50)
