import {
    STAFF_ADD_SUCCESS,
    STAFF_ADD_FAILURE,
    CLEAR_STAFF_ONBOARDING,
    STAFF_DOCUMENT_UPLOAD_SUCCESS,
    STAFF_DOCUMENT_UPLOAD_FAILURE,
} from '../actionTypes';

const initialState = {
    status: '',
    staffOnboardingData: null,
    staffOnboardingErr: null,
    staffOnboardingDocumentData: null,
    staffOnboardingDocumentErr: null
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
        case STAFF_DOCUMENT_UPLOAD_SUCCESS:
            return {
                ...state,
                status: 'SUCCESS',
                staffOnboardingDocumentData: action.payload,
                staffOnboardingDocumentErr: null
            };
        case STAFF_DOCUMENT_UPLOAD_FAILURE:
            return {
                ...state,
                status: 'FAILED',
                staffOnboardingDocumentErr: action.payload
            };
        default:
            return state;
    }
};

export default staffOnboardingReducer;