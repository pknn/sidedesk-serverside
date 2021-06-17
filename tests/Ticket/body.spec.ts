import { expect } from 'chai'

import { getMockCreationBody } from './ticket.mock'
import { TicketCreationJsonBody, toEntity } from '../../src/bodies/Ticket'

describe('Ticket Bodies', () => {
  describe('TicketCreationJsonBody', () => {
    describe('toEntity()', () => {
      it('should return new Ticket Entity correctly', () => {
        const ticketCreationBody: TicketCreationJsonBody = getMockCreationBody()
        const ticketEntity = toEntity(ticketCreationBody)

        expect(ticketEntity).to.be.an('object')
        expect(ticketEntity).to.have.property('title')
        expect(ticketEntity.title).to.equal(ticketCreationBody.title)
        expect(ticketEntity).to.have.property('description')
        expect(ticketEntity.description).to.equal(
          ticketCreationBody.description,
        )
        expect(ticketEntity).to.have.property('reporterName')
        expect(ticketEntity.reporterName).to.equal(
          ticketCreationBody.reporter_name,
        )
        expect(ticketEntity).to.have.property('reporterEmail')
        expect(ticketEntity.reporterEmail).to.equal(
          ticketCreationBody.reporter_email,
        )
      })
    })
  })
})
