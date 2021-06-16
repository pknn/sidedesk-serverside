import { Request, Response } from 'express'

import { toPresenter } from 'app/models/Version'
import { VersionPresenter } from 'app/presenters/Version'
import { getVersion } from 'app/useCases/Version'

export const get = async (
  _: Request,
  response: Response,
): Promise<Response<VersionPresenter>> => {
  const version = getVersion()
  const versionPresenter = toPresenter(version)

  return response.json(versionPresenter)
}
