import { expect } from 'chai'
import * as VersionUseCase from '.'

describe('Version Use Case', () => {
  describe('getVersion()', () => {
    describe('when process.env.VERSION is available', () => {
      it('should return the Version object with version from env', () => {
        process.env.VERSION = '12.0.0'
        const versionObject = VersionUseCase.getVersion()

        expect(versionObject).to.be.an('object')
        expect(versionObject).to.have.property('version')
        expect(versionObject.version).to.equal(process.env.VERSION)
      })
    })
  })
})
