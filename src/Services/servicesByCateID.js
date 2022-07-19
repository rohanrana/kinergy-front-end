import { post } from "./index";
export const getServiceByCategoryByID = (data) => {
  const request = {
    subUrl: `/service/getServiceList`,
    data,
  };
  return post(request);
};
