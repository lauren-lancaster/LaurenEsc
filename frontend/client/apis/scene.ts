import request from 'superagent'
import { Scene } from '../../models/scenes'

const sceneUrl = '/api/v1/scenes'

export async function fetchAllScenes(): Promise<Scene> {
  const res = await request.get(sceneUrl)
  return res.body
}

export async function fetchScene(id: number): Promise<Scene> {
  const res = await request.get(`${sceneUrl}/${id}`)
  return res.body
}
