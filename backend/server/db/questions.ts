import connection from './connection'

const db = connection

export function getQuestions() {
  return db('questions').select()
}
