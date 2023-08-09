import { TOGGLE_TIMER, UserAction } from '../actions/user'

const initialState = false

export default function timerReducer(
  state = initialState,
  action: UserAction
): boolean {
  const { type, payload } = action
  switch (type) {
    case TOGGLE_TIMER:
      return payload
    default:
      return state
  }
}
