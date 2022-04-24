import {
    STAFF_ADD_SUCCESS,
    STAFF_ADD_FAILURE,
    CLEAR_STAFF_ONBOARDING
} from '../actionTypes';

const initialState = {
    status: '',
    staffOnboardingData: null,
    staffOnboardingErr: null,
};

const staffOnboardingReducer = (state = initialState, action) => {
    switch (action.type) {
        case STAFF_ADD_SUCCESS:
            return {
                ...state,
                status: 'SUCCESS',
                staffOnboardingData: action.payload,
                staffOnboardingErr: null
            };
        case STAFF_ADD_FAILURE:
            return {
                ...state,
                status: 'FAILED',
                staffOnboardingErr: action.payload
            };
        default:
            return state;
    }
};

export default staffOnboardingReducer;