import { combineReducers } from 'redux'

import posts from './posts'
import header from './header'

export default combineReducers({
  posts,
  header,
})
