import { combineReducers } from "redux";
import staffAuthReducer from "./staffAuth/reducer";
import loadingReducer from "./loading/reducer";

const rootReducer = combineReducers({
  staffAuth: staffAuthReducer,
  loading: loadingReducer,
});

export default rootReducer;
