import { post } from "./index";

export const getFacilities = (data) => {
  const request = {
    subUrl: `/facility/facilityList`,
    data,
  };
  return post(request);
};

export const getFacilitiesByID = (data) => {
  const request = {
    subUrl: `/facility/facilityById`,
    data,
  };
  return post(request);
};
