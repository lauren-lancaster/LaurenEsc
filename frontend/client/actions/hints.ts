import type { ThunkAction } from '../store'
import * as api from '../apis/hints'

import { Hints } from '../../models/hints'

export const GET_HINTS = 'GET_HINTS'

export type HintsAction = { type: typeof GET_HINTS; payload: Hints }

export function setHints(Hints: Hints): HintsAction {
  return {
    type: GET_HINTS,
    payload: Hints,
  }
}

export function getSingleHintThunk(id: number): ThunkAction {
  return async (dispatch) => {
    try {
      const hint = await api.getSingleHint(id)
      dispatch(setHints(hint))
    } catch (err) {
      console.error
    }
  }
}
