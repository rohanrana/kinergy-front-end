import {
  STAFF_LOGIN_SUCCESS,
  STAFF_LOGIN_FAILURE,
  STAFF_LOGOUT_SUCCESS,
  STAFF_LOGOUT_FAILURE,
  USER_LISTING_SUCCESS,
  USER_LISTING_FAILURE,
  OTP_SUCCESS,
  OTP_FAILURE,
  CLEAR_OTP,
  CLEAR_STAFF_LOGIN
} from '../actionTypes';

const initialState = {
  status: '',
  staffLoginData: null,
  staffLoginErr: null,
  staffLogoutData: null,
  staffLogoutErr: false,
  userListingData: null,
  userListingErr: null,
  otpData: null,
  otpErr: null
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
    case CLEAR_STAFF_LOGIN:
      return {
        ...state,
        status: null,
        staffLoginData: null,
        staffLoginErr: null
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
      case USER_LISTING_SUCCESS:
        return {
          ...state,
          userListingData: action.payload,
          userListingErr: null
        };
      case USER_LISTING_FAILURE:
        return {
          ...state,
          userListingErr: action.payload,
        };
     case OTP_SUCCESS:
        return {
          ...state,
          otpData: action.payload,
          otpErr: null
        };
      case OTP_FAILURE:
        return {
          ...state,
          otpErr: action.payload,
        };
      case CLEAR_OTP:
        return {
          ...state,
          otpErr: null,
          otpData: null
        };
    default:
      return state;
  }
};

export default staffAuthReducer;
