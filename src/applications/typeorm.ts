import { createConnection } from 'typeorm'

export const initializeTypeOrm = async () => {
  process.env.NODE_ENV === 'test'
    ? await createConnection({
        name: 'default',
        type: 'sqlite',
        database: './test.db',
        entities: ['dist/entities/*.js', 'src/entities/*.ts'],
        synchronize: true,
      })
    : await createConnection()
}
