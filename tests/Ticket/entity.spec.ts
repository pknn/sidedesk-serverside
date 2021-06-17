import { expect } from 'chai'

// import { initializeTypeOrm } from '../../src/applications/typeorm'
import { Ticket } from '../../src/entities/Ticket'
import { getMockTicket } from './entity.mock'

describe('Ticket Entity', () => {
  describe('contructor()', () => {
    describe('when reporterEmail is defined', () => {
      it('should get new Ticket entity with correct information', () => {
        const mockTicket = getMockTicket()
        const ticket = new Ticket(
          mockTicket.title,
          mockTicket.description,
          mockTicket.reporterName,
          mockTicket.reporterEmail,
        )

        expect(ticket).to.be.an('object')
        expect(ticket.title).to.be.a('string')
        expect(ticket.title).to.equal(mockTicket.title)
        expect(ticket.description).to.be.a('string')
        expect(ticket.description).to.equal(mockTicket.description)
        expect(ticket.reporterName).to.be.a('string')
        expect(ticket.reporterName).to.equal(mockTicket.reporterName)
        expect(ticket.reporterEmail).to.be.a('string')
        expect(ticket.reporterEmail).to.equal(mockTicket.reporterEmail)
      })
    })
    describe('when reporterEmail is NOT defined', () => {
      it('should get new Ticket entity with correct information', () => {
        const mockTicket = getMockTicket(false)
        const ticket = new Ticket(
          mockTicket.title,
          mockTicket.description,
          mockTicket.reporterName,
        )

        expect(ticket).to.be.an('object')
        expect(ticket.title).to.be.a('string')
        expect(ticket.title).to.equal(mockTicket.title)
        expect(ticket.description).to.be.a('string')
        expect(ticket.description).to.equal(mockTicket.description)
        expect(ticket.reporterName).to.be.a('string')
        expect(ticket.reporterName).to.equal(mockTicket.reporterName)
        expect(ticket.reporterEmail).to.be.an('undefined')
        expect(ticket.reporterEmail).to.equal(mockTicket.reporterEmail)
      })
    })
  })
})
