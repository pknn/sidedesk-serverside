import { expect } from 'chai'

import { Version, toPresenter } from '../../src/models/Version'

describe('Version Model', () => {
  it('should structured correctly', () => {
    const versionModel: Version = {
      version: '1.0.0',
    }

    expect(versionModel).to.be.an('object')
    expect(versionModel).to.have.property('version')
  })
  describe('toPresenter()', () => {
    it('should return correct VersionPresenter', () => {
      const versionModel: Version = {
        version: '1.0.0',
      }
      const versionPresenter = toPresenter(versionModel)

      expect(versionPresenter).to.be.an('object')
      expect(versionPresenter).to.have.property('version')
      expect(versionPresenter.version).to.equal(versionModel.version)
    })
  })
})
