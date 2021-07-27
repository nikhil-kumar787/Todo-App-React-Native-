import { combineReducers } from "redux";
import todos from './todos'
import visbilityFilter from './visibilityFilter'

export default combineReducers({
    todos,
    visbilityFilter
})