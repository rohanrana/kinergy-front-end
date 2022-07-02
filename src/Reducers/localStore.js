import { types as sessionTypes } from "./session";

const initialState = {
  token: null,
  user: null,

  // dynamicInputs: null,
};
const actionTypes = {
  CLEAR_LOCAL_STATE: "CLEAR_LOCAL_STATE",
};
export const localStore = (state = initialState, action) => {
  switch (action.type) {
    case sessionTypes.LOGIN_SUCCESS: {
      const { token, user, reset_pass_token } = action.payload;
      return { ...state, user, token, reset_pass_token };
    }
    case sessionTypes.LOG_OUT:
      return initialState;

    case actionTypes.CLEAR_LOCAL_STATE:
      return { ...initialState };

    default:
      return state;
  }
};