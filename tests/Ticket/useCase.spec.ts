import { expect } from 'chai'

describe('Ticket Use Case', () => {
  describe('getTicket(id)', () => {
    it('should return Ticket entity with specified ID', () => {})
  })
  describe('getTickets(options?)', () => {
    describe('when offset option was provided', () => {
      it('should return Tickets with specified offseted from start with limit of 50 ascending ordered by Created Date', () => {})
    })
    describe('when limit option was provided', () => {
      it('should return Tickets from the start with specified limit ascending ordered by Created Date', () => {})
    })
    describe('when sorting option was provided', () => {
      it('should return Tickets from the start with limit of 50 and specified ordering strategy', () => {})
    })
    describe('when status option was provided', () => {
      it('should return Tickets from the start with limit of 50 ascending ordered by Created Date and applied filter', () => {})
    })
  })
  describe('create(body)', () => {
    it('should create a new Ticket entity from received creation body', () => {})
  })
  describe('update(id, body)', () => {
    it('should update a Ticket specified by ID from receive body', () => {})
  })
})
