import * as api from '../apis/scene'
import { Scene, SceneAction } from '../../models/scenes'
import { ThunkAction } from '../store'

// Consts

export const SET_SCENE = 'SET_SCENE'
export const GET_SCENE = 'GET_SCENE'

// Simple Actions

export function allScenes(scene: Scene[]): SceneAction {
  return {
    type: SET_SCENE,
    payload: scene,
  }
}

export function getScene(scene: Scene[]): SceneAction {
  return {
    type: GET_SCENE,
    payload: scene,
  }
}

// Thunk Actions

export function getAllScenes(): ThunkAction {
  return async (dispatch) => {
    try {
      const sceneArr = await api.fetchAllScenes()
      dispatch(allScenes(sceneArr))
    } catch (err) {
      console.error('oh oh, action bad', err)
    }
  }
}

export function getOneScene(id: number): ThunkAction {
  return async (dispatch) => {
    try {
      const sceneArr = await api.fetchScene(id)
      dispatch(getScene(sceneArr))
    } catch (err) {
      console.error('oh no, get one scene bad', err)
    }
  }
}
