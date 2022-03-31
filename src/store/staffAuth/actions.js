import {
  STAFF_LOGIN_SUCCESS,
  STAFF_LOGIN_FAILURE,
  STAFF_LOGOUT_SUCCESS,
  STAFF_LOGOUT_FAILURE,
  USER_LISTING_SUCCESS,
  USER_LISTING_FAILURE
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

