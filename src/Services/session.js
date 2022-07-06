import { post, patch } from "./index";


export const loginApi = (data) => {
  const request = {
    subUrl: `/staff/login`,
    data,
  };
  return post(request);
};
export const updatePlayerID = (data) => {
  const request = {
    subUrl: `/users/update_player_id.json`,
    data: {
      player_id: data.player_id,
    },
  };
  return patch(request);
};
export const logOutApi = (data) => {
  console.log("data logout", data)
  const request = {
    subUrl: `/staff/logout`,
    data
  };
  return post(request);
};

export const forgotPasswordApi = (data) => {
  const request = {
    subUrl: `/priory/users/forgot_password.json`,
    data,
  };
  return post(request);
};
export const resetPasswordApi = (data) => {
  const request = {
    subUrl: `/priory/users/reset_password.json`,
    data,
  };
  return post(request);
};
export const changePasswordApi = (data) => {
  const request = {
    subUrl: `/priory/users/password/change.json`,
    data,
  };
  return post(request);
};
export const sendOTPApi = (data) => {
  const request = {
    subUrl: `/priory/users/verify_otp/send_otp.json`,
    data,
  };
  return post(request);
};
export const getOTPApi = (data) => {
  const request = {
    subUrl: `/users/get_otp.json`,
    data,
  };
  return post(request);
};
export const verifyUserApi = (data) => {
  const request = {
    subUrl: `/priory/users/verify_otp/verify_doctor.json`,
    data,
  };
  return post(request);
};
export const verifyOTPApi = (data) => {
  const request = {
    subUrl: `/priory/users/verify_otp/otp_verification.json`,
    data,
  };
  return post(request);
};
export const ResetPasswordWithTokenApi = (data) => {
  const request = {
    // subUrl: `/users/reset_password_with_token.json`,
    subUrl: `/priory/users/reset_password.json`,
    data,
  };
  return post(request);
};

export const signUp = (data) => {
  const request = {
    subUrl: `/staff/signup`,
    data,
  };
  return post(request);
};

export const updateTokenForSessionExpiration = (params) => {
  const request = {
    subUrl: `/device_details/update_token`,
    params,
  };
  return patch(request);
};
