import faker from 'faker'

import { Ticket } from '../../src/entities/Ticket'

export const getMockTicket = (includeEmail: boolean = true): Ticket =>
  new Ticket(
    faker.lorem.sentence(5),
    faker.lorem.sentences(50),
    faker.name.firstName(),
    includeEmail ? faker.internet.email() : undefined,
  )
