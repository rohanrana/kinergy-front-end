import {
  STAFF_LOGIN_SUCCESS,
  STAFF_LOGIN_FAILURE,
  STAFF_LOGOUT_SUCCESS,
  STAFF_LOGOUT_FAILURE
} from '../actionTypes';

const initialState = {
  status: '',
  staffLoginData: null,
  staffLoginErr: null,
  staffLogoutData: null,
  staffLogoutErr: false
};

const staffAuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case STAFF_LOGIN_SUCCESS:
      return {
        ...state,
        status: 'SUCCESS',
        staffLoginData: action.payload,
        staffLoginErr: null
      };
    case STAFF_LOGIN_FAILURE: 
      return {
      ...state,
      status: 'FAILED',
      staffLoginErr: action.payload
    };
    case STAFF_LOGOUT_SUCCESS:
      return {
        ...state,
        staffLogoutData: action.payload,
        staffLogoutErr: null
      };
    case STAFF_LOGOUT_FAILURE:
      return {
        ...state,
        staffLogoutErr: action.payload,
      };
 

    default:
      return state;
  }
};

export default staffAuthReducer;
