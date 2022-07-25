import { sessionTypes } from "./session";

const initialState = {
  token: null,
  user: null,
  serviceCategory: null,
  selectedService: null,
  appointmentBookingDetails: null,
  selectedProviders: null,

  // dynamicInputs: null,
};
export const actionTypes = {
  CLEAR_LOCAL_STATE: "CLEAR_LOCAL_STATE",
  SET_SERVICE_CATEGORY: "serviceCategories/SET_SERVICE_CATEGORY",
  SET_SERVICE: "services/SET_SERVICE",
  SET_APPOINTMENT_BOOKING_DETAIL: "appointments/SET_APPOINTMENT_BOOKING_DETAIL",
  SET_APPOINTMENT_PROVIDER: "appointments/SET_APPOINTMENT_PROVIDER",
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
    case actionTypes.SET_SERVICE: {
      return { ...state, selectedService: action.payload };
    }
    case actionTypes.SET_APPOINTMENT_BOOKING_DETAIL: {
      return { ...state, appointmentBookingDetails: action.payload };
    }
    case actionTypes.SET_APPOINTMENT_PROVIDER: {
      return { ...state, selectedProviders: action.payload };
    }
    case sessionTypes.LOG_OUT:
      return initialState;

    case actionTypes.CLEAR_LOCAL_STATE:
      return { ...initialState };

    default:
      return state;
  }
};
