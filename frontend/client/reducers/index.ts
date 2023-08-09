import { combineReducers } from 'redux'

// import stuff from './stuff'

import scene from './scene'
import user from './user'
import timer from './timer'
import question from './questions'
import hints from './hints'

export default combineReducers({
  // stuff
  scene,
  user,
  timer,
  question,
  hints,
})
