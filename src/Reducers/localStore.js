import { types as sessionTypes } from "./session";

const initialState = {
  token: null,
  user: null,
  serviceCategory: null,

  // dynamicInputs: null,
};
export const actionTypes = {
  CLEAR_LOCAL_STATE: "CLEAR_LOCAL_STATE",
  SET_SERVICE_CATEGORY: "serviceCategories/SET_SERVICE_CATEGORY",
};
export const localStore = (state = initialState, action) => {
  switch (action.type) {
    case sessionTypes.LOGIN_SUCCESS: {
      const { token, user, reset_pass_token } = action.payload;
      return { ...state, user, token, reset_pass_token };
    }
    case actionTypes.SET_SERVICE_CATEGORY: {
      return { ...state, serviceCategory: action.payload };
    }
    case sessionTypes.LOG_OUT:
      return initialState;

    case actionTypes.CLEAR_LOCAL_STATE:
      return { ...initialState };

    default:
      return state;
  }
};
