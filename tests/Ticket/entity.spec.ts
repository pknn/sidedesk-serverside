import { expect } from 'chai'
import { getConnection } from 'typeorm'

import { initializeTypeOrm } from '../../src/applications/typeorm'
import { Ticket, toModel } from '../../src/entities/Ticket'
import { TicketStatus } from '../../src/types/TicketStatus'
import { getMockDescription, getMockEntity } from './ticket.mock'

describe('Ticket Entity', () => {
  describe('contructor()', () => {
    it('should get new Ticket entity with correct information', () => {
      const mockTicket = getMockEntity()
      const ticket = new Ticket(
        mockTicket.title,
        mockTicket.description,
        mockTicket.reporterName,
        mockTicket.reporterEmail,
      )

      expect(ticket).to.be.an('object')
      expect(ticket).to.have.property('id')
      expect(ticket).to.have.property('title')
      expect(ticket.title).to.equal(mockTicket.title)
      expect(ticket).to.have.property('description')
      expect(ticket.description).to.equal(mockTicket.description)
      expect(ticket).to.have.property('reporterName')
      expect(ticket.reporterName).to.equal(mockTicket.reporterName)
      expect(ticket).to.have.property('reporterEmail')
      expect(ticket.reporterEmail).to.equal(mockTicket.reporterEmail)
      expect(ticket).to.have.property('status')
      expect(ticket.status).to.equal(mockTicket.status)
      expect(ticket).to.have.property('createdAt')
      expect(ticket).to.have.property('updatedAt')
    })
  })

  describe('toModel()', () => {
    it('should return correct Ticket model', () => {
      const ticketEntity = getMockEntity()
      const ticketModel = toModel(ticketEntity)

      expect(ticketModel).to.be.an('object')
      expect(ticketModel).to.have.property('id')
      expect(ticketModel.id).to.equal(ticketEntity.id)
      expect(ticketModel).to.have.property('title')
      expect(ticketModel.title).to.equal(ticketEntity.title)
      expect(ticketModel).to.have.property('description')
      expect(ticketModel.description).to.equal(ticketEntity.description)
      expect(ticketModel).to.have.property('reporterName')
      expect(ticketModel.reporterName).to.equal(ticketEntity.reporterName)
      expect(ticketModel).to.have.property('reporterEmail')
      expect(ticketModel.reporterEmail).to.equal(ticketEntity.reporterEmail)
      expect(ticketModel).to.have.property('status')
      expect(ticketModel.status).to.equal(ticketEntity.status)
      expect(ticketModel).to.have.property('createdAt')
      expect(ticketModel.createdAt).to.equal(ticketEntity.createdAt)
      expect(ticketModel).to.have.property('updatedAt')
      expect(ticketModel.updatedAt).to.equal(ticketEntity.updatedAt)
    })
  })

  describe('Entity Operations', () => {
    let mockTicket: Ticket
    before(async () => {
      await initializeTypeOrm()
    })

    after(async () => {
      await getConnection().close()
    })

    beforeEach(async () => {
      mockTicket = await getMockEntity().save()
    })

    afterEach(async () => {
      await getConnection().query('DELETE from ticket')
    })

    describe('Create Ticket', () => {
      it('should create the correct record to the database', async () => {
        const newTicket = getMockEntity()
        const savedTicket = await newTicket.save()

        const rowCount = await Ticket.createQueryBuilder().getCount()

        expect(savedTicket).to.deep.equal(newTicket)
        expect(rowCount).to.equal(2)
      })
    })

    describe('Get Ticket', () => {
      it('should get the correct ticket record from the database', async () => {
        const result = await Ticket.findOne(mockTicket.id)

        expect(result).to.deep.equal(mockTicket)
      })
    })

    describe('Update Ticket', () => {
      it('should update the ticket to the database', async () => {
        const updatingInfo: Partial<Ticket> = {
          description: getMockDescription(),
          status: TicketStatus.accepted,
        }
        const updatedTicket = await mockTicket.update(updatingInfo)

        expect(updatedTicket.description).to.equal(updatingInfo.description)
        expect(updatedTicket.status).to.equal(updatedTicket.status)
      })
    })
  })
})
