import validator from "validator";
import isEmpty from "lodash/isEmpty";
import { spaceRegex } from "../../Constants/common";

export function ValidateConsentForm(data) {
  console.log("DTA", data);
  let errors = {};

  if (
    data.authPersonName !== undefined &&
    validator.isEmpty(data.authPersonName)
  ) {
    errors.authPersonName = "Represntative name  is required";
  }

  if (
    data.authPersonName !== undefined &&
    !validator.isEmpty(data.authPersonName) &&
    data.authPersonName.length > 40
  ) {
    errors.authPersonName =
      "Represntative name  should be less than  of 40 characters only";
  }

  if (
    data.authPersonName !== undefined &&
    !validator.isEmpty(data.authPersonName) &&
    spaceRegex.test(data.authPersonName) === false
  ) {
    errors.authPersonName = "Represntative name  is invalid";
  }

  if (data.clientName !== undefined && validator.isEmpty(data.clientName)) {
    errors.clientName = "Client name  is required";
  }
  if (
    data.clientName !== undefined &&
    !validator.isEmpty(data.clientName) &&
    data.clientName.length > 40
  ) {
    errors.clientName =
      "Client name should be less than  of 40 characters only";
  }

  if (
    data.clientName !== undefined &&
    !validator.isEmpty(data.clientName) &&
    spaceRegex.test(data.clientName) === false
  ) {
    errors.clientName = "Client name  is invalid";
  }

  if (data.signImage === null) {
    errors.signImage = "Signature  is required";
  }
  if (data.date === null) {
    errors.date = "Date is required";
  }

  if (data.checkbox1 === false) {
    errors.checkbox1 = "Please mark this checkbox";
  }
  if (data.checkbox2 === false) {
    errors.checkbox2 = "Please mark this checkbox";
  }

  if (data.checkbox3 === false) {
    errors.checkbox3 = "Please mark this checkbox";
  }
  console.log("DATA", data);
  return { errors, isValid: isEmpty(errors) };
}
