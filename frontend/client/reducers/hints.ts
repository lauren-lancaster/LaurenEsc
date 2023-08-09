import { HintsAction, GET_HINTS } from '../actions/hints'
import { Hints } from '../../models/hints'

const initialState = [] as Hints[]

export default function hintsReducer(
  state = initialState,
  action: HintsAction
) {
  const { type, payload } = action
  switch (type) {
    case GET_HINTS:
      return payload
    default:
      return state
  }
}
