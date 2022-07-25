import { post } from "./index";
export const getProviders = (data) => {
  const request = {
    subUrl: `/service/getServiceProvider`,
    data,
  };
  return post(request);
};
