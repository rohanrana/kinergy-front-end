import { post } from "./index";
export const getProviders = (data) => {
  const request = {
    subUrl: `/service/getServiceProvider`,
    data,
  };
  return post(request);
};

export const getProvidersAvailability = (data) => {
  const request = {
    subUrl: `/scheduleCalender/getDays`,
    data,
  };
  return post(request);
};

export const bookAppointment = (data) => {
  const request = {
    subUrl: `/appointments/customerBooking`,
    data,
  };
  return post(request);
};

export const applyCoupon = (data) => {
  const request = {
    subUrl: `/coupon/apply`,
    data,
  };
  return post(request);
};
