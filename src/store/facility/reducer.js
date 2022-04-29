import {
    FACILITY_ADD_SUCCESS,
    FACILITY_ADD_FAILURE,
    CLEAR_STAFF_ONBOARDING,
    FACILITY_ADD_VALIDATION_FAILURE
} from '../actionTypes';

const initialState = {
    status: '',
    facilityData: null,
    facilityErr: null,
    facilityValidationErr: null
};

const facilityReducer = (state = initialState, action) => {
    switch (action.type) {
        case FACILITY_ADD_SUCCESS:
            return {
                ...state,
                status: 'SUCCESS',
                facilityData: action.payload,
                facilityErr: null
            };
        case FACILITY_ADD_FAILURE:
            return {
                ...state,
                status: 'FAILED',
                facilityErr: action.payload
            };
        case FACILITY_ADD_VALIDATION_FAILURE:
            return {
                ...state,
                status: 'FAILED',
                facilityValidationErr: action.payload
            };
        default:
            return state;
    }
};

export default facilityReducer;