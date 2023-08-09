import type { ThunkAction } from '../store'
import * as api from '../apis/user'

import { User } from '../../models/users'
import { UserTime } from '../../models/users'

export const ADD_USER = 'ADD_USER'
export const REQUEST_USER = 'REQUEST_USER'
export const RECEIVE_USER = 'RECEIVE_USER'
export const SET_USER = 'SET_USER'
export const FINISH_GAME = 'FINISH_GAME'
export const SHOW_ERROR = 'SHOW_ERROR'
export const SET_USER_TIME = 'SET_USER_TIME'
export const SET_USER_STATUS = 'SET_USER_STATUS'
export const TOGGLE_TIMER = 'TOGGLE_TIMER'

export type UserAction =
  | { type: typeof ADD_USER; payload: User }
  | { type: typeof REQUEST_USER; payload: User }
  | { type: typeof RECEIVE_USER; payload: User }
  | { type: typeof SET_USER; payload: User[] }
  | { type: typeof SET_USER_STATUS; payload: User[] }
  | { type: typeof FINISH_GAME; payload: number }
  | { type: typeof SHOW_ERROR; payload: string }
  | { type: typeof SET_USER_TIME; payload: UserTime }
  | { type: typeof TOGGLE_TIMER; payload: boolean }

export function showError(errorMessage: string): UserAction {
  return {
    type: SHOW_ERROR,
    payload: errorMessage,
  }
}

export function setUsers(users: User[]): UserAction {
  return {
    type: SET_USER,
    payload: users,
  }
}

export function setUsersStatus(users: User[]): UserAction {
  return {
    type: SET_USER_STATUS,
    payload: users,
  }
}

export function finishGame(id: number): UserAction {
  return {
    type: FINISH_GAME,
    payload: id,
  }
}

export function addUser(user: User): UserAction {
  return {
    type: ADD_USER,
    payload: user,
  }
}

export function getPlayingUser(user: User): UserAction {
  return {
    type: REQUEST_USER,
    payload: user,
  }
}

export function setUserPlayingTime(id: number, time: number): UserAction {
  return {
    type: SET_USER_TIME,
    payload: { id, time }, //not 100% sure if this is correct
  }
}

export function toggleTimer(isOn: boolean): UserAction {
  return {
    type: TOGGLE_TIMER,
    payload: isOn,
  }
}

export function getUsersThunk(): ThunkAction {
  return async (dispatch) => {
    try {
      const userArray = await api.getUsers()
      dispatch(setUsers(userArray))
    } catch (err) {
      dispatch(showError(String(err)))
    }
  }
}

export function setUserStatusThunk(users: User[]): ThunkAction {
  return async (dispatch) => {
    try {
      await api.getUsersStatus()
      dispatch(setUsersStatus(users))
    } catch (err) {
      dispatch(showError(String(err)))
    }
  }
}

export function finishGameThunk(id: number): ThunkAction {
  return async (dispatch) => {
    try {
      await api.completeGame(id)
      dispatch(finishGame(id))
    } catch (err) {
      dispatch(showError(String(err)))
    }
  }
}

export function addUserThunk(user: User): ThunkAction {
  return async (dispatch) => {
    try {
      const newUser = await api.addUser(user)
      dispatch(addUser(newUser))
    } catch (err) {
      dispatch(showError(String(err)))
    }
  }
}

export function getPlayingUserThunk(): ThunkAction {
  return async (dispatch) => {
    try {
      const playingUser = await api.getPlayingUser()
      dispatch(getPlayingUser(playingUser))
    } catch (err) {
      dispatch(showError(String(err)))
    }
  }
}

export function setUserPlayingTimeThunk(id: number, time: number): ThunkAction {
  return async (dispatch) => {
    try {
      await api.updateUserTime(id, time)
      dispatch(setUserPlayingTime(id, time))
    } catch (err) {
      dispatch(showError(String(err)))
    }
  }
}
