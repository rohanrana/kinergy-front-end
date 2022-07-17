import { post } from "./index";
export const getServiceByCategoryByID = (data) => {
  const request = {
    subUrl: `/service/getListByCategoryId`,
    data,
  };
  return post(request);
};
