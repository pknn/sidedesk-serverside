import { VersionPresenter } from 'app/presenters/Version'

export interface Version {
  version: string
}

export const toPresenter = ({ version }: Version): VersionPresenter => ({
  version,
})
