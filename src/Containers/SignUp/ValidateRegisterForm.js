import validator from "validator";
import isEmpty from "lodash/isEmpty";
import { passwordRegex, spaceRegex } from "../../Constants/common";

export function ValidateSignupInput(data) {
  let errors = {};

  if (data.firstName !== undefined && validator.isEmpty(data.firstName)) {
    errors.firstName = "First name  is required";
  }

  if (
    data.firstName !== undefined &&
    !validator.isEmpty(data.firstName) &&
    data.firstName.length > 40
  ) {
    errors.firstName = "First name should be less than  of 40 characters only";
  }

  if (
    data.firstName !== undefined &&
    !validator.isEmpty(data.firstName) &&
    spaceRegex.test(data.firstName) === false
  ) {
    errors.firstName = "First name  is invalid";
  }

  if (data.lastName !== undefined && validator.isEmpty(data.lastName)) {
    errors.lastName = "Last name  is required";
  }
  if (
    data.lastName !== undefined &&
    !validator.isEmpty(data.lastName) &&
    data.lastName.length > 40
  ) {
    errors.lastName = "Last name should be less than  of 40 characters only";
  }

  if (
    data.lastName !== undefined &&
    !validator.isEmpty(data.lastName) &&
    spaceRegex.test(data.lastName) === false
  ) {
    errors.lastName = "Last name  is invalid";
  }
  if (data.contact !== undefined && validator.isEmpty(data.contact)) {
    errors.contact = "Phone number is required";
  }
  if (data.contact !== undefined && validator.isEmpty(data.contact) === false) {
    if (!validator.isLength(data.contact, { min: 10, max: 10 })) {
      errors.contact = "Mobile no should be of 10 digit";
    }
  }

  if (data.contact !== undefined && validator.isEmpty(data.contact) === false) {
    if (!validator.isNumeric(data.contact)) {
      errors.contact = "Please enter valid mobile number";
    }
  }

  if (data.email !== undefined && validator.isEmpty(data.email)) {
    errors.email = "Email is required";
  }

  if (data.email !== undefined && validator.isEmpty(data.email) === false) {
    if (!validator.isEmail(data.email)) {
      errors.email = "Email is invalid";
    }
  }

  if (
    data.email !== undefined &&
    !validator.isEmpty(data.email) &&
    data.email.length > 40
  ) {
    errors.email = "Email should be less than  of 40 characters only";
  }
  if (data.dob === null) {
    errors.dob = "Date of birth is required";
  }
  if (data.gender === null) {
    errors.gender = "Gender is required";
  }

  console.log("DATA", data);
  return { errors, isValid: isEmpty(errors) };
}
