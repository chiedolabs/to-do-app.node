import { combineReducers } from 'redux'
import authReducer from './authReducers'
import errorReducer from './errorReducers'

import todos from './todos'
import visibilityFilter from './visibilityFilter'

export default combineReducers({
    auth: authReducer,
    errors: errorReducer,
    todos,
    visibilityFilter
})