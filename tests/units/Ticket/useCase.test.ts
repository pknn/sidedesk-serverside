import chai, { expect } from 'chai'
import chaiExclude from 'chai-exclude'

import faker from 'faker'
import { getConnection } from 'typeorm'

import {
  getBulkMockEntity,
  getMockCreationBody,
  getMockDescription,
} from '../../helpers/ticket.mock'
import { initializeTypeOrm } from '../../../src/applications/typeorm'
import { Ticket as TicketEntity } from '../../../src/entities/Ticket'
import * as TicketUseCase from '../../../src/useCases/Ticket'
import { TicketStatus } from '../../../src/types/TicketStatus'
import { toEntity } from '../../../src/bodies/Ticket'

chai.use(chaiExclude)

describe('Ticket Use Case', () => {
  let mockEntities: TicketEntity[]
  before(async () => {
    await initializeTypeOrm()
  })

  beforeEach(async () => {
    mockEntities = await TicketEntity.save(getBulkMockEntity(100))
  })

  afterEach(async () => {
    await TicketEntity.query('DELETE from ticket')
  })

  after(async () => {
    await getConnection().close()
  })

  describe('getTicket(id)', () => {
    it('should return Ticket entity with specified ID', async () => {
      const randomItem = faker.random.arrayElement(mockEntities)

      const result = await TicketUseCase.getTicket(randomItem.id!)

      expect(result)
        .excluding(['createdAt', 'updatedAt'])
        .to.deep.equal(randomItem)
    })
  })

  describe('getTickets(options?)', () => {
    describe('when offset option was provided', () => {
      it('should return Tickets with specified offseted from start', async () => {
        const result = await TicketUseCase.getTickets({
          offset: 10,
        })

        expect(result[0])
          .excluding(['createdAt', 'updatedAt'])
          .to.deep.equal(mockEntities[10])
      })
    })
    describe('when limit option was provided', () => {
      it('should return Tickets with specified limit', async () => {
        const result = await TicketUseCase.getTickets({
          limit: 10,
        })

        expect(result).to.have.lengthOf(10)
      })
    })
    describe('when sorting option was provided', () => {
      describe('when sort with status', () => {
        it('should return Tickets with status ordered descending', async () => {
          const randomIndex = faker.datatype.number(8)
          const result = await TicketUseCase.getTickets({
            limit: 10,
            sorting: {
              sortBy: 'status',
              strategy: 'DESC',
            },
          })
          const randomItemA = result[randomIndex] as TicketEntity
          const randomItemB = result[randomIndex + 1] as TicketEntity

          expect(randomItemA.status).to.be.greaterThanOrEqual(
            randomItemB.status,
          )
        })
        it('should return Tickets with status ordered ascending', async () => {
          const randomIndex = faker.datatype.number(8)
          const result = await TicketUseCase.getTickets({
            limit: 10,
            sorting: {
              sortBy: 'status',
              strategy: 'ASC',
            },
          })
          const randomItemA = result[randomIndex] as TicketEntity
          const randomItemB = result[randomIndex + 1] as TicketEntity

          expect(randomItemA.status).to.be.lessThanOrEqual(randomItemB.status)
        })
      })

      describe('when sort with createdAt', () => {
        it('should return Tickets with createdAt ordered', () => {
          it('should return Tickets with createdAt ordered descending', async () => {
            const randomIndex = faker.datatype.number(8)
            const result = await TicketUseCase.getTickets({
              limit: 10,
              sorting: {
                sortBy: 'createdAt',
                strategy: 'DESC',
              },
            })
            const randomItemA = result[randomIndex] as TicketEntity
            const randomItemB = result[randomIndex + 1] as TicketEntity

            expect(randomItemA.createdAt).to.be.greaterThanOrEqual(
              randomItemB.createdAt,
            )
          })
          it('should return Tickets with createdAt ordered descending', async () => {
            const randomIndex = faker.datatype.number(8)
            const result = await TicketUseCase.getTickets({
              limit: 10,
              sorting: {
                sortBy: 'createdAt',
                strategy: 'DESC',
              },
            })
            const randomItemA = result[randomIndex] as TicketEntity
            const randomItemB = result[randomIndex + 1] as TicketEntity

            expect(randomItemA.createdAt).to.be.greaterThanOrEqual(
              randomItemB.createdAt,
            )
          })
        })
      })
    })

    describe('when status option was provided', () => {
      it('should return Tickets with applied filter', async () => {
        const result = await TicketUseCase.getTickets({
          status: TicketStatus.resolved,
        })

        expect(result).to.satisfy((entries: TicketEntity[]) =>
          entries.every((entry) => entry.status === TicketStatus.resolved),
        )
      })
    })
  })

  describe('create(body)', () => {
    it('should create a new Ticket entity from received creation body', async () => {
      const mockCreationBody = getMockCreationBody()
      const ticketEntityFromBody = toEntity(mockCreationBody)
      const result = await TicketUseCase.create(mockCreationBody)

      expect(result)
        .excluding(['createdAt', 'updatedAt', 'id'])
        .to.deep.equal(ticketEntityFromBody)
    })
  })

  describe('update(id, body)', () => {
    it('should update a Ticket specified by ID from receive body', async () => {
      const randomItem = faker.random.arrayElement(mockEntities)
      const updatedItem = {
        ...randomItem,
        status: TicketStatus.rejected,
        description: getMockDescription(),
      }
      const result = await TicketUseCase.update(updatedItem.id!, updatedItem)

      expect(result)
        .excluding(['createdAt', 'updatedAt'])
        .to.deep.equal(updatedItem)
    })
  })
})
