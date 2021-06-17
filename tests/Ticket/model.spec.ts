import { expect } from 'chai'

import { Ticket, toPresenter } from '../../src/models/Ticket'
import { getMockModel } from './ticket.mock'

describe('Ticker Model', () => {
  describe('toPresenter()', () => {
    it('should return correct TicketPresenter', () => {
      const mockTicket: Ticket = getMockModel()
      const ticketPresenter = toPresenter(mockTicket)

      expect(ticketPresenter).to.be.an('object')
      expect(ticketPresenter).to.have.property('id')
      expect(ticketPresenter.id).to.equal(mockTicket.id)
      expect(ticketPresenter).to.have.property('title')
      expect(ticketPresenter.title).to.equal(mockTicket.title)
      expect(ticketPresenter).to.have.property('description')
      expect(ticketPresenter.description).to.equal(mockTicket.description)
      expect(ticketPresenter).to.have.property('reporter_name')
      expect(ticketPresenter.reporter_name).to.equal(mockTicket.reporterName)
      expect(ticketPresenter).to.have.property('reporter_email')
      expect(ticketPresenter.reporter_email).to.equal(mockTicket.reporterEmail)
      expect(ticketPresenter).to.have.property('status')
      expect(ticketPresenter.status).to.equal(mockTicket.status)
      expect(ticketPresenter).to.have.property('created_at')
      expect(ticketPresenter.created_at).to.equal(mockTicket.createdAt)
      expect(ticketPresenter).to.have.property('updated_at')
      expect(ticketPresenter.updated_at).to.equal(mockTicket.updatedAt)
    })
  })
})
