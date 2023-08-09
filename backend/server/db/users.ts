import { User } from '../../models/users'
import connection from './connection'

const db = connection

export function addUser(user: User) {
  return db('users').insert(user)
}

export function getPlayingUser() {
  return db('users').where({ active_player: true })
}

export function updatePlayingTime(id: number, time: number) {
  return db('users').select().where({ id }).update('time', time)
}

export function completeGame(id: number) {
  return db('users').select().where('id', id).first().update({
    complete: true,
    active_player: false,
  })
}

export function getAllUsers() {
  return db('users').select().where('complete', true)
}

export function updateStatus() {
  return db('users')
    .select('*')
    .where('active_player', true)
    .update({ active_player: false })
}
