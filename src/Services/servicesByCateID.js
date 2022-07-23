import { post } from "./index";
export const getServiceByCategoryByID = (data) => {
  const request = {
    subUrl: `/service/getServiceList`,
    data,
  };
  return post(request);
};

export const getServiceDetailByByID = (data) => {
  const request = {
    subUrl: `/service/getServiceDetailById`,
    data,
  };
  return post(request);
};
