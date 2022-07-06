import {
  loginApi,
  logOutApi,

  // updatePlayerID,

  // sendOTPApi,
} from "../Services/session";


import {
  navigateToIndex,
  appRoutesConst,
  navigateToHome,

} from "../App/navigation";
import { getErrorObject, errorToast, successToast, verifyObject } from "../utilities/utils";
;
export const types = {
  LOGIN_REQUEST: "session/LOGIN_REQUEST",
  LOGIN_SUCCESS: "session/LOGIN_SUCCESS",
  LOGIN_FAILURE: "session/LOGIN_FAILURE",
  LOGOUT_REQUEST: "session/LOGOUT_REQUEST",
  LOGOUT_FAILURE: "session/LOGOUT_FAILURE",


  SEND_OTP_REQUEST: "session/SEND_OTP_REQUEST",
  SEND_OTP_SUCCESS: "session/SEND_OTP_SUCCESS",
  SEND_OTP_FAILURE: "session/SEND_OTP_FAILURE",
  VERIFY_OTP_REQUEST: "session/VERIFY_OTP_REQUEST",
  VERIFY_OTP_SUCCESS: "session/VERIFY_OTP_SUCCESS",
  VERIFY_OTP_FAILURE: "session/VERIFY_OTP_FAILURE",
  RESET_PASS_REQUEST: "session/RESET_PASS_REQUEST",
  RESET_PASS_SUCCESS: "session/RESET_PASS_SUCCESS",
  RESET_PASS_FAILURE: "session/RESET_PASS_FAILURE",
  RESET_FORM_STATE: "session/RESET_FORM_STATE",
  FORGOT_PASSWORD_REQUEST: "session/ FORGOT_PASSWORD_REQUEST",
  FORGOT_PASSWORD_SUCCESS: "session/ FORGOT_PASSWORD_SUCCESS",
  FORGOT_PASSWORD_FAILURE: "session/ FORGOT_PASSWORD_FAILURE",
  LOG_OUT: "session/LOG_OUT",
};

const initialState = {
  isLoading: false,
  error: null,
  loginId: null,
};

export const session = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_REQUEST:
      return { ...state, isLoading: true };
    case types.LOGOUT_REQUEST:
      return { ...state, isLoading: true };
    case types.LOGIN_SUCCESS:
      return { ...state, error: null, isLoading: false };
    case types.LOGIN_FAILURE: {
      const { error } = action.payload;
      return { ...state, error, isLoading: false };
    }
    case types.LOGOUT_FAILURE: {
      const { error } = action.payload;
      return { ...state, error, isLoading: false };
    }
    case types.RESET_FORM_STATE:
      return { ...state, error: null };
    case types.LOG_OUT:
      return initialState;
    case types.FORGOT_PASSWORD_REQUEST:
      return { ...state, isLoading: true };
    case types.FORGOT_PASSWORD_SUCCESS:
      const { data } = action.payload;
      return { ...state, error: null, isLoading: false, role: data };

    case types.FORGOT_PASSWORD_FAILURE: {
      const { error } = action.payload;
      return { ...state, error, isLoading: false };
    }

    case types.RESET_PASS_REQUEST:
      return { ...state, isLoading: true };
    case types.RESET_PASS_SUCCESS:
      return { ...state, error: null, isLoading: false };

    case types.RESET_PASS_FAILURE: {
      const { error } = action.payload;
      return { ...state, error, isLoading: false };
    }
    default:
      return state;
  }
};

export const login = (data, navigate) => {
  return async (dispatch) => {
    dispatch({ type: types.LOGIN_REQUEST });

    try {
      let response = await loginApi(data);
      const auth = response.data;
      console.log("Log in success", response)
      let tokenparams = {};
      if (auth.token) {
        tokenparams = { token: auth.token, user: auth.result };
      }
      dispatch({
        type: types.LOGIN_SUCCESS,
        payload: { ...tokenparams },
      });
      successToast({
        content: verifyObject(response, "message", "Success")
      });
      // await props.history.push(`${appRoutesConst.dashboard}`);
      await navigate(`${appRoutesConst.dashboard}`);

    } catch (error) {

      const { message } = getErrorObject(error);
      dispatch({ type: types.LOGIN_FAILURE, payload: { error: message } });
      errorToast({ content: message });
    }
  };
};


export const logOut = (data, navigate) => {
  return async (dispatch) => {
    dispatch({ type: types.LOGOUT_REQUEST });
    try {
      let response = await logOutApi(data);
      // let logout = response.data;
      dispatch({
        type: types.LOG_OUT,
      });
      dispatch({ type: "CLEAR_LOCAL_STATE" });
      successToast({
        content: verifyObject(response, "message", "Success")
      });
      await navigate(`/staff-login`);
    } catch (error) {

      const { message } = getErrorObject(error);
      dispatch({ type: types.LOGOUT_FAILURE, payload: { error: message } });
      errorToast({ content: message });
    }


    // localStorage.clear();
  };
};

export const resetFormState = () => {
  return (dispatch) => {
    dispatch({
      type: types.RESET_FORM_STATE,
    });
  };
};
