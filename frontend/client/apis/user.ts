import request from 'superagent'
import { User } from '../../models/users'

export async function addUser(user: User) {
  const res = await request.post('/api/v1/users').send(user)
  return res.body
}

export async function getPlayingUser() {
  const res = await request.get('/api/v1/users')
  return res.body
}

export async function updateUserTime(id: number, time: number) {
  return request.patch(`/api/v1/users/updatetime/${id}`).send({ time }) //send time in here TS error is occurring currently
}

export async function completeGame(id: number) {
  return request.patch(`/api/v1/users/${id}`)
}

export async function getUsers() {
  const res = await request.get('/api/v1/users/allusers')
  return res.body
}

export async function getUsersStatus() {
  return request.patch('/api/v1/users')
}
