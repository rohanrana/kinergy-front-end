import {
    STAFF_ADD_SUCCESS,
    STAFF_ADD_FAILURE,
    CLEAR_STAFF_ONBOARDING
} from "../actionTypes";
import { uiStartLoading, uiStopLoading } from "../loading/actions";
import { api } from "../../utils/api";

export const staffOnboardingSuccess = payload => ({
    type: STAFF_ADD_SUCCESS,
    payload
});

export const staffOnboardingFailure = payload => ({
    type: STAFF_ADD_FAILURE,
    payload
});

export const clearStaffOnboarding = payload => ({
    type: CLEAR_STAFF_ONBOARDING,
    payload
});

export const staffAddOnboarding = (addData) => async dispatch => {
    dispatch(uiStartLoading());
    try {
        const token = JSON.parse(localStorage.getItem("auth-token"));
        const headers = {
            token: token
        };
        const { data } = await api.post("/employee/add", addData, {
            headers
        });
        if (data.response_code != 200) {
            dispatch(staffOnboardingFailure(data));
            dispatch(uiStopLoading());
        } else {
            dispatch(staffOnboardingSuccess(data));
            dispatch(uiStopLoading());
        }
    } catch (err) {
        dispatch(staffOnboardingFailure(err));
        dispatch(uiStopLoading());
    }
};