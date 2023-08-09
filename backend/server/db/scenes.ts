import { Scene } from '../../models/scenes'
import connection from './connection'

const db = connection

export function getAllScenes(): Promise<Scene[]> {
  return db('scenes').select('id', 'level_id  AS levelId', 'text', 'slack')
}

export function getScene(id: number): Promise<Scene[]> {
  return db('scenes')
    .where({ id })
    .select('id', 'text', 'level_id  AS levelId', 'final', 'slack')
}
