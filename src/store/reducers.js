import { combineReducers } from "redux";
import staffAuthReducer from "./staffAuth/reducer";
import loadingReducer from "./loading/reducer";
import userProfileReducer from './userProfile/reducer'

const rootReducer = combineReducers({
  staffAuth: staffAuthReducer,
  loading: loadingReducer,
  user: userProfileReducer,
});

export default rootReducer;
