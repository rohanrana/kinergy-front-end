import { combineReducers } from 'redux'
import { types as sessionTypes } from '../Reducers/session'
import { routerReducer } from "react-router-redux"
import {
    session,
    localStore,
    facilities

} from "../Reducers/index"



const appReducer = combineReducers({

    session,
    localStore,
    routing: routerReducer,
    facilities

})
const rootReducers = (state, action) => {
    if (action.type === sessionTypes.LOG_OUT) {
        return {}
    }
    return appReducer(state, action)
}
export default rootReducers