import { post, postFormData } from "./index";

export const getServiceCategories = (data) => {
  const request = {
    subUrl: `/service/category/getList`,
    data,
  };
  return post(request);
};

export const getServiceCategoryByID = (data) => {
  const request = {
    subUrl: `/service/category/getListById`,
    data,
  };
  return post(request);
};

export const changeServiceCategoryStatus = (data) => {
  const request = {
    subUrl: `/service/category/changeStatus`,
    data,
  };
  return post(request);
};

export const addServiceCategory = (data) => {
  console.log("formData", data);
  const request = {
    subUrl: `/service/category/add`,
    data: data,
    isFile: true,
  };
  return postFormData(request);
};

export const editServiceCategory = (data) => {
  const request = {
    subUrl: `/service/category/edit`,
    data: data,
    isFile: true,
  };
  return postFormData(request);
};

export const addService = (data) => {
  console.log("formData", data);
  const request = {
    subUrl: `/service/add`,
    data: data,
    isFile: true,
  };
  return postFormData(request);
};

export const editService = (data) => {
  console.log("formData", data);
  const request = {
    subUrl: `/service/edit`,
    data: data,
    isFile: true,
  };
  return postFormData(request);
};
