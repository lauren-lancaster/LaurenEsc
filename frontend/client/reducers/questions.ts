import { QuestionAction, GET_QUESTIONS } from '../actions/questions'
import { Question } from '../../models/questions'

const initialState = [] as Question[]

export default function questionReducer(
  state = initialState,
  action: QuestionAction
) {
  const { type, payload } = action
  switch (type) {
    case GET_QUESTIONS:
      return payload
    default:
      return state
  }
}
