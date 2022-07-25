import { combineReducers } from "redux";
import { sessionTypes } from "../Reducers/session";
import { routerReducer } from "react-router-redux";
import {
  session,
  localStore,
  serviceCategories,
  servicesByCateID,
  providers,
} from "../Reducers/index";

const appReducer = combineReducers({
  session,
  localStore,
  routing: routerReducer,
  serviceCategories,
  servicesByCateID,
  providers,
});
const rootReducers = (state, action) => {
  if (action.type === sessionTypes.LOG_OUT) {
    return {};
  }
  return appReducer(state, action);
};
export default rootReducers;
