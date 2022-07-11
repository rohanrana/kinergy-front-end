import validator from "validator";
import isEmpty from "lodash/isEmpty";
// import { spaceRegex } from "../../constants/common";

export function ValidateAddServiceCategory(data) {
  console.log("data", data);
  let errors = {};

  if (data.title !== undefined && validator.isEmpty(data.title)) {
    errors.title = "Title  is required";
  }

  if (data.description !== undefined && validator.isEmpty(data.description)) {
    errors.description = "Description  is required";
  }

  // if (data.image === null) {
  //   errors.image = "Please Select and Image";
  // }

  if (data.role === "") {
    errors.role = "Role is required";
  }

  // if (data.role === null) {
  //   errors.role = "Role is required";
  // }
  console.log("error", errors);

  return { errors, isValid: isEmpty(errors) };
}
