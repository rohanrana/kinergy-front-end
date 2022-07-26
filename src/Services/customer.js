import { post } from "./index";
export const loginWithMobile = (data) => {
  const request = {
    subUrl: `/customer/loginWithMobile`,
    data,
  };
  return post(request);
};

export const loginWithEmail = (data) => {
  const request = {
    subUrl: `/customer/loginWithEmail`,
    data,
  };
  return post(request);
};

export const verifyOTPViaMobile = (data) => {
  const request = {
    subUrl: `/customer/verifyMobileOtp`,
    data,
  };
  return post(request);
};

export const verifyOTPViaEmail = (data) => {
  const request = {
    subUrl: `/customer/verifyEmailOtp`,
    data,
  };
  return post(request);
};

export const resendOTPMobile = (data) => {
  const request = {
    subUrl: `/customer/resendMobileOtp`,
    data,
  };
  return post(request);
};

export const registerNewCustomer = (data) => {
  const request = {
    subUrl: `/customer/register`,
    data,
  };
  return post(request);
};

export const resendOTPMail = (data) => {
  const request = {
    subUrl: `/customer/resendEmailOtp`,
    data,
  };
  return post(request);
};

export const registerSomeOneElse = (data) => {
  const request = {
    subUrl: `/customer/registerSomeOneElse`,
    data,
  };
  return post(request);
};

export const getExistingProfileList = (data) => {
  const request = {
    subUrl: `/customer/getExistingProfileList`,
    data,
  };
  return post(request);
};
