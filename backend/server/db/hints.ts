import connection from './connection'

const db = connection

export function getSingleHint(id: number) {
  return db('hints').select().where({ id })
}
