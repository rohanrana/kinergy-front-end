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
} from "../actionTypes";
import { uiStartLoading, uiStopLoading } from "../loading/actions";
import { api } from "../../utils/api";

const staffLoginSuccess = payload => ({
  type: STAFF_LOGIN_SUCCESS,
  payload
});

const staffLoginFailure = payload => ({
  type: STAFF_LOGIN_FAILURE,
  payload
});

const staffLogoutSuccess = payload => ({
  type: STAFF_LOGOUT_SUCCESS,
  payload
});

const staffLogoutFailure = payload => ({
  type: STAFF_LOGOUT_FAILURE,
  payload
});

const userListingSuccess = payload => ({
  type: USER_LISTING_SUCCESS,
  payload
});

const userListingFailure = payload => ({
  type: USER_LISTING_FAILURE,
  payload
});

const otpSuccess = payload => ({
  type: OTP_SUCCESS,
  payload
});

const otpFailure = payload => ({
  type: OTP_FAILURE,
  payload
});

export const clearOtp = payload => ({
  type: CLEAR_OTP,
  payload
});

export const clearStaffLogin = payload => ({
  type: CLEAR_STAFF_LOGIN,
  payload
});

export const staffLogin = (email, password,type) => async dispatch => {
  dispatch(uiStartLoading());
  try {
    const { data } = await api.post("/staff/login", {
      email,
      password,
      type
    });
    if(data.response_code!=200){
      dispatch(staffLoginFailure(data));
      dispatch(uiStopLoading());
    }
    else{
      localStorage.setItem("auth-token", JSON.stringify(data.token));
      localStorage.setItem("email", JSON.stringify(data.result.email));
      localStorage.setItem("_id", JSON.stringify(data.result._id));
      localStorage.setItem("type", JSON.stringify(data.result.type));
      localStorage.setItem("otp", JSON.stringify(data.result.otp));
      dispatch(staffLoginSuccess(data));
      dispatch(uiStopLoading());
    }
  } catch (err) {
    dispatch(staffLoginFailure(err));
    dispatch(uiStopLoading());
  }
};

export const staffLogout = (_id) => async dispatch => {
  dispatch(uiStartLoading());
  try {
    const { data } = await api.post("/staff/logout", {
    _id
    });
    if(data.response_code!=200){
      dispatch(staffLogoutFailure(data));
      dispatch(uiStopLoading());
    }
    else{
      localStorage.removeItem("auth-token");
      localStorage.removeItem("email");
      localStorage.removeItem("type");
      localStorage.removeItem("_id");
      localStorage.removeItem("otp");
      dispatch(staffLogoutSuccess(data));
      dispatch(uiStopLoading());
    }
  } catch (err) {
    dispatch(staffLogoutFailure(err));
    dispatch(uiStopLoading());
  }
};

export const userListing = () => async dispatch => {
  dispatch(uiStartLoading());
  try {
    const token = JSON.parse(localStorage.getItem("auth-token"));
    const headers = {
      token: token
    };
    const { data } = await api.get("/staff/userList", {
      headers
    });
    console.log("user list data",data)
    if(data.response_code!=200){
      dispatch(userListingFailure(data));
      dispatch(uiStopLoading());
    }
    else{
      dispatch(userListingSuccess(data));
      dispatch(uiStopLoading());
    }
  } catch (err) {
    dispatch(userListingFailure(err));
    dispatch(uiStopLoading());
  }
};

export const otpVerify = (otp) => async dispatch => {
  dispatch(uiStartLoading());
  try {
    const email = JSON.parse(localStorage.getItem("email"));
    const type = JSON.parse(localStorage.getItem("type"));
    const { data } = await api.post("/staff/otp", 
    {
      email,
      otp,
      type
    });
    console.log("otp=====",data)
    if(data.response_code!=200){
      dispatch(otpFailure(data));
      dispatch(uiStopLoading());
    }
    else{
      localStorage.removeItem("otp");
      dispatch(otpSuccess(data));
      dispatch(uiStopLoading());
    }
  } catch (err) {
    dispatch(otpFailure(err));
    dispatch(uiStopLoading());
  }
};

