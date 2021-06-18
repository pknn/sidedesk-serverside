import { expect } from 'chai'

import * as VersionUseCase from '../../../src/useCases/Version'

describe('Version Use Case', () => {
  describe('getVersion()', () => {
    it('should return the Version object', () => {
      const versionObject = VersionUseCase.getVersion()

      expect(versionObject).to.be.an('object')
      expect(versionObject).to.have.property('version')
    })

    describe('when process.env.VERSION is available', () => {
      before(() => {
        process.env.SS_VERSION = '12.0.0'
      })

      after(() => {
        delete process.env.SS_VERSION
      })

      it('should return the Version object with version from env', () => {
        const { version } = VersionUseCase.getVersion()

        expect(version).to.equal(process.env.SS_VERSION)
      })
    })

    describe('when process.env.VERSION is not available', () => {
      it('should return the Version object with fallback version 1.0.0', () => {
        const { version } = VersionUseCase.getVersion()

        expect(version).to.equal('1.0.0')
      })
    })
  })
})
