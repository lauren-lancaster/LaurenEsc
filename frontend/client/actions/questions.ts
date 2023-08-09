import type { ThunkAction } from '../store'
import * as api from '../apis/questions'
import { Question } from '../../models/questions'

export const GET_QUESTIONS = 'GET_QUESTIONS'
export const SHOW_ERROR = 'SHOW_ERROR'

export type QuestionAction =
  | { type: typeof GET_QUESTIONS; payload: Question }
  | { type: typeof SHOW_ERROR; payload: string }

export function showError(errorMessage: string): QuestionAction {
  return {
    type: SHOW_ERROR,
    payload: errorMessage,
  }
}

export function setQuestions(question: Question[]): QuestionAction {
  return {
    type: GET_QUESTIONS,
    payload: question,
  }
}

//THUNK ACTIONS

export function getQuestionsThunk(): ThunkAction {
  return async (dispatch) => {
    try {
      const question = await api.getSingleQuestion()
      dispatch(setQuestions(question))
    } catch (err) {
      dispatch(showError(String(err)))
    }
  }
}
