import { post } from "./index";
export const getSubServiceByCategoryID = (data) => {
  const request = {
    subUrl: `/service/getListByServiceId`,
    data,
  };
  return post(request);
};

export const changeSubServiceCategoryStatus = (data) => {
    const request = {
      subUrl: `/service/changeStatus`,
      data,
    };
    return post(request);
  };