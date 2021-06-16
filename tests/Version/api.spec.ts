import supertest from 'supertest'
import { expect } from 'chai'

import { getExpressApplication } from '../../src/applications'

const request = supertest(getExpressApplication())

describe('Version Endpoint /version', () => {
  describe('GET /version', () => {
    it('should have success response with version information', async () => {
      const { statusCode, body } = await request.get('/version')

      expect(statusCode).to.be.equal(200)
      expect(body).to.be.an('object')
      expect(body).to.have.property('version')
      expect(body.version).to.be.a('string')
    })
  })
})
