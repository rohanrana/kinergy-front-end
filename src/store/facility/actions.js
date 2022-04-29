import {
    FACILITY_ADD_SUCCESS,
    FACILITY_ADD_FAILURE,
    FACILITY_ADD_VALIDATION_FAILURE,
    CLEAR_STAFF_ONBOARDING
} from "../actionTypes";
import { uiStartLoading, uiStopLoading } from "../loading/actions";
import { api } from "../../utils/api";
import { useHistory } from 'react-router-dom';

import history from 'history'
export const facilitySuccess = payload => ({
    type: FACILITY_ADD_SUCCESS,
    payload
});

export const facilityFailure = payload => ({
    type: FACILITY_ADD_FAILURE,
    payload
});
export const facilityValidationFailure = payload => ({
    type: FACILITY_ADD_VALIDATION_FAILURE,
    payload
});


export const clearFacility = payload => ({
    type: CLEAR_STAFF_ONBOARDING,
    payload
});

export const facilityAdd = (addData) => async dispatch => {

    dispatch(uiStartLoading());
    try {
        const token = JSON.parse(localStorage.getItem("auth-token"));
        const headers = {
            token: token
        };
        const { data } = await api.post("/facility/add", addData, {
            headers
        });
        console.log(data)
        if (data.response_code != 200) {
            dispatch(facilityFailure(data));
            dispatch(uiStopLoading());
        } else if (data.response_code === 422) {
            dispatch(facilityValidationFailure(data));
            dispatch(uiStopLoading());
        } else {
            // dispatch(facilitySuccess(data));
            // dispatch(uiStopLoading());
            alert('Facility Add Successfully')
            useHistory().push('facility');
            // history.push('facility');
        }
    } catch (err) {
        dispatch(facilityFailure(err));
        dispatch(uiStopLoading());
    }
};