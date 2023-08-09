// Data Models
export interface SceneData {
  id: number
  level_id: number
  text: string
  slack: string
}

export interface Scene extends SceneData {
  levelId: number | string
  id: number
  final: boolean
}

// Actions

export type SceneAction =
  | { type: 'SET_SCENE'; payload: Scene[] }
  | { type: 'GET_SCENE'; payload: Scene[] }
