import supertest from 'supertest'
import chai, { expect } from 'chai'
import chaiExclude from 'chai-exclude'
import { getConnection } from 'typeorm'
import faker from 'faker'

import { getExpressApplication } from '../../src/applications'
import { getBulkMockEntity, getMockCreationBody } from '../helpers/ticket.mock'
import { initializeTypeOrm } from '../../src/applications/typeorm'
import { Ticket as TicketEntity, toModel } from '../../src/entities/Ticket'
import { TicketPresenter } from '../../src/presenters/Ticket'
import { toPresenter } from '../../src/models/Ticket'
import { describe } from 'mocha'
import { TicketStatus } from '../../src/types/TicketStatus'

const request = supertest(getExpressApplication())
chai.use(chaiExclude)

describe('Ticket Endpoint /ticket', () => {
  let mockPresenters: TicketPresenter[]
  before(async () => {
    await initializeTypeOrm()
    const mockEntities: TicketEntity[] = await TicketEntity.save(
      getBulkMockEntity(50),
    )
    mockPresenters = mockEntities.map(toModel).map(toPresenter)
  })

  after(async () => {
    const connection = getConnection()
    await connection.query('DELETE from ticket')
    await connection.close()
  })

  describe('GET /', () => {
    it('should get response with Tickets', async () => {
      const { statusCode, body } = await request.get('/tickets')

      expect(statusCode).to.equal(200)
      expect(body).to.have.lengthOf(50)
      expect(body)
        .excludingEvery(['created_at', 'updated_at'])
        .to.deep.equal(mockPresenters)
    })
  })

  describe('POST /', () => {
    it('should get response 201', async () => {
      const requestBody = getMockCreationBody()
      const { statusCode } = await request.post('/tickets').send(requestBody)

      expect(statusCode).to.equal(201)
    })
  })

  describe('GET /:id', () => {
    describe('when ticket with ID is exists', () => {
      it('should get response with Ticket', async () => {
        const randomElement = faker.random.arrayElement(mockPresenters)
        const { statusCode, body } = await request.get(
          `/tickets/${randomElement.id}`,
        )

        expect(statusCode).to.equal(200)
        expect(body).to.be.an('object')
        expect(body)
          .excluding(['created_at', 'updated_at'])
          .to.deep.equal(randomElement)
      })
    })

    describe('when ticket with ID is not exists', () => {
      it('should get response with 404 status', async () => {
        const { statusCode } = await request.get(
          `/tickets/${Number.MAX_SAFE_INTEGER}`,
        )

        expect(statusCode).to.equal(404)
      })
    })
  })

  describe('PUT /:id', () => {
    it('should get response with updated Ticket', async () => {
      const { id } = faker.random.arrayElement(mockPresenters)
      const status = TicketStatus.rejected
      const { description } = getMockCreationBody()

      const { statusCode, body } = await request
        .put(`/tickets/${id}`)
        .send({ status, description })

      expect(statusCode).to.equal(200)
      expect(body.status).to.equal(status)
      expect(body.description).to.equal(description)
    })
  })
})
