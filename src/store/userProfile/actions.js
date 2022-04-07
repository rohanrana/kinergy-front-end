import {
    GET_USER_PROFILE_SUCCESS,
    GET_USER_PROFILE_FAILURE,
    CLEAR_GET_USER_PROFILE,
  } from "../actionTypes";
  import { uiStartLoading, uiStopLoading } from "../loading/actions";
  import { api } from "../../utils/api";
  
  const getUserProfileSuccess = payload => ({
    type: GET_USER_PROFILE_SUCCESS,
    payload
  });
  
  const getUserProfileFailure = payload => ({
    type: GET_USER_PROFILE_FAILURE,
    payload
  });
  
  export const clearGetUserProfile = payload => ({
    type: CLEAR_GET_USER_PROFILE,
    payload
  });
  
  
  export const getUserProfile = () => async dispatch => {
    dispatch(uiStartLoading());
    try {
      const token = JSON.parse(localStorage.getItem("auth-token"));
      const _id = JSON.parse(localStorage.getItem("_id"));
      const headers = {
        token: token
      };
      const { data } = await api.post("/staff/getProfile",{_id:_id}, {
        headers
      });
      console.log("get user profile data",data)
      if(data.response_code!=200){
        dispatch(getUserProfileFailure(data));
        dispatch(uiStopLoading());
      }
      else{
        dispatch(getUserProfileSuccess(data));
        dispatch(uiStopLoading());
      }
    } catch (err) {
      dispatch(getUserProfileFailure(err));
      dispatch(uiStopLoading());
    }
  };
  
  