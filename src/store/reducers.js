import { combineReducers } from "redux";
import staffAuthReducer from "./staffAuth/reducer";
import loadingReducer from "./loading/reducer";
import userProfileReducer from './userProfile/reducer'
import staffOnboardingReducer from "./staffOnboarding/reducer"
import facilityReducer from "./facility/reducer"
const rootReducer = combineReducers({
    staffAuth: staffAuthReducer,
    staffOnboarding: staffOnboardingReducer,
    loading: loadingReducer,
    user: userProfileReducer,
    facility: facilityReducer
});

export default rootReducer;