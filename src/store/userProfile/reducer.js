import {
    GET_USER_PROFILE_SUCCESS,
    GET_USER_PROFILE_FAILURE,
    CLEAR_GET_USER_PROFILE,
  } from '../actionTypes';
  
  const initialState = {
    getUserProfileData: null,
    getUserProfileErr: null,
  };
  
  const userProfileReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_USER_PROFILE_SUCCESS:
        return {
          ...state,
          getUserProfileData: action.payload,
          getUserProfileErr: null
        };
      case GET_USER_PROFILE_FAILURE: 
        return {
        ...state,
        getUserProfileErr: action.payload
      };
      case CLEAR_GET_USER_PROFILE:
        return {
          ...state,
          getUserProfileData: null,
          getUserProfileErr: null
        };
      default:
        return state;
    }
  };
  
  export default userProfileReducer;
  