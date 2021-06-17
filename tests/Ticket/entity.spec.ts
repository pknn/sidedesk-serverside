import { expect } from 'chai'

// import { initializeTypeOrm } from '../../src/applications/typeorm'
import { Ticket, toModel } from '../../src/entities/Ticket'
import { getMockTicket } from './entity.mock'

describe('Ticket Entity', () => {
  describe('contructor()', () => {
    it('should get new Ticket entity with correct information', () => {
      const mockTicket = getMockTicket()
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
      expect(ticket).to.have.property('descriptiom')
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
      const ticketEntity = getMockTicket()
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
      expect(ticketModel).to.have.property('createdAt')
      expect(ticketModel.createdAt).to.equal(ticketEntity.createdAt)
      expect(ticketModel).to.have.property('updatedAt')
      expect(ticketModel.updatedAt).to.equal(ticketEntity.updatedAt)
    })
  })
})
