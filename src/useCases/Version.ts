import { Version } from 'app/models/Version'

export const getVersion = (): Version => ({
  version: process.env.SS_VERSION || '1.0.0',
})
