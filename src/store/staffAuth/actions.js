import {
  STAFF_LOGIN_SUCCESS,
  STAFF_LOGIN_FAILURE,
  STAFF_LOGOUT_SUCCESS,
  STAFF_LOGOUT_FAILURE
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
      localStorage.setItem("auth-token", JSON.stringify(`Bearer ${data.token}`));
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

