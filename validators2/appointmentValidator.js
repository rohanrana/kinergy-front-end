const { check, validationResult } = require("express-validator");
const resCode = require("../helper/httpResponseCode.js");
const resMessage = require("../helper/httpResponseMessage.js");
const Response = require("../common_functions/response_handler");
const Customer = require("../models/customersModel");
const Staff = require("../models/staffModel");
// const path = require('path');
// const fs = require('fs');
const generateAddByCustomerValidation = (req, res, next) => [
  check("service")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Please select service"),
  check("appointmentDate")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Please select appointmentDate"),
  check("appointmentTime")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Please select appointmentTime"),
  check("appointmentTime")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Appointment Time is required"),
  check("appointmentDate")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Appointment Date is required"),
  check("customer")
    .custom((value) => {
      if (value) {
        return Customer.findOne({ _id: value }).then((customer) => {
          if (!customer) {
            return Promise.reject("Customer not exist");
          }
        });
      }
    })
    .withMessage("Customer not exist")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Customer is required"),
  // check("staff")
  //   .custom((value) => {
  //     return Staff.findOne({ _id: value }).then((staff) => {
  //       if (!staff) {
  //         return Promise.reject("Staff not exist");
  //       }
  //     });
  //   })
  //   .withMessage("Staff not exist")
  //   .trim()
  //   .escape()
  //   .not()
  //   .isEmpty()
  //   .withMessage("Staff is required"),
];
const generateAddValidation = (req, res, next) => [
  check("service")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Please select service"),
  check("appointmentDate")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Please select appointmentDate"),
  check("appointmentTime")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Please select appointmentTime"),
  // check("staff")
  //   .trim()
  //   .escape()
  //   .not()
  //   .isEmpty()
  //   .withMessage("Please select staff"),
  check("appointmentTime")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Appointment Time is required"),
  check("appointmentDate")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Appointment Date is required"),
  check("customer")
    .custom((value) => {
      if (value) {
        return Customer.findOne({ _id: value }).then((customer) => {
          if (!customer) {
            return Promise.reject("Customer not exist");
          }
        });
      }
    })
    .withMessage("Customer not exist")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Customer is required"),
  // check("staff")
  //   .custom((value) => {
  //     return Staff.findOne({ _id: value }).then((staff) => {
  //       if (!staff) {
  //         return Promise.reject("Staff not exist");
  //       }
  //     });
  //   })
  //   .withMessage("Staff not exist")
  //   .trim()
  //   .escape()
  //   .not()
  //   .isEmpty()
  //   .withMessage("Staff is required"),
];
const generateEditValidation = (req, res, next) => [
  check("service")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Please select service"),
  
  check("appointmentDate")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Please select appointmentDate"),
  check("appointmentTime")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Please select appointmentTime"),
  // check("staff")
  //   .trim()
  //   .escape()
  //   .not()
  //   .isEmpty()
  //   .withMessage("Please select Staff"),
  check("appointmentTime")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Appointment Time is required"),
  check("appointmentDate")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Appointment Date is required"),
];

const reporter = (req, res, next) => {
  var errors = validationResult(req);
  // console.log(errors);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map((error) => ({
      title: error.param,
      msg: error.msg,
    }));
    const dedupThings = Array.from(
      errorMessages.reduce((m, t) => m.set(t.title, t), new Map()).values()
    );
    Response.sendResponseWithError(
      res,
      resCode.UNPROCESSABLE_ENTITY,
      "Validation Errors",
      dedupThings
    );
  } else {
    next();
  }
};

module.exports = {
  add: [generateAddValidation(), reporter],
  addByCustomer: [generateAddByCustomerValidation(), reporter],
  edit: [generateEditValidation(), reporter],
};
