import valid from "card-validator";

import isEmpty from "lodash/isEmpty";

export function ValidateCreditCardInput(values) {
  let errors = {};

  let creditCard = valid.number(values.cardNumber);

  creditCard.expirationDate = valid.expirationDate(values.cardExpiration);
  creditCard.cvv = valid.cvv(values.cardSecurityCode);
  creditCard.cardholderName = valid.cardholderName(values.cardName);
  creditCard.postalCode = valid.postalCode(values.cardPostalCode);

  errors.show = true;
  errors.variant = "danger";
  errors.message = "An unknown error occured. Please try again later";
  errors.cname = false;
  errors.cnumber = false;
  //   errors.ctype = false;
  errors.cexp = false;
  errors.ccvv = false;
  errors.cpostal = false;
  //   cardName: "",
  //   cardNumber: "",
  //   cardExpiration: "",
  //   cardSecurityCode: "",
  //Card CVV expiration
  if (values.cardSecurityCode === null || !values.cardSecurityCode.trim()) {
    errors.cardSecurityCode = "Credit card CVC is required";
  } else if (creditCard.cvv.isValid) {
    errors.cardSecurityCode = true;
  } else {
    errors.cardSecurityCode = "Credit card CVC is invalid";
  }

  //Card Expiration Verification
  if (values.cardExpiration === null || !values.cardExpiration.trim()) {
    errors.cardExpiration = "Credit card expiration date is required";
  } else if (creditCard.expirationDate.isValid) {
    errors.cardExpiration = true;
  } else {
    errors.cardExpiration = "Credit card expiration date is invalid";
  }

  //Card Number Verification
  if (values.cardNumber === null || !values.cardNumber.trim()) {
    errors.cardNumber = "Credit card number is required";
  } else if (creditCard.isValid) {
    errors.cardNumber = true;
  } else {
    errors.cardNumber = "Credit card number is invalid";
  }

  //Cardholder Name Verification
  if (values.cardName === null || !values.cardName.trim()) {
    errors.cardName = "Cardholder name is required";
  } else if (creditCard.cardholderName.isValid) {
    errors.cardName = true;
  } else {
    errors.cardName = "Cardholder name is invalid";
  }
  console.log("DATA", values);
  return { errors, isValid: isEmpty(errors) };
}
