import { createConnection } from 'typeorm'

export const initializeTypeOrm = async () => {
  await createConnection(process.env.NODE_ENV === 'test' ? 'test' : 'default')
}
