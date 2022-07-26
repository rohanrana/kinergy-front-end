const { check, validationResult } = require("express-validator");
const resCode = require("../helper/httpResponseCode.js");
const resMessage = require("../helper/httpResponseMessage.js");
const Response = require("../common_functions/response_handler");

const Groups = require("../models/permissionGroupModel");
const Feature = require("../models/featureModel");
const generalHelper = require("../helper/general");

const BlockCalender = require("../models/blockCalenderModel");
// const fs = require('fs');
const generateAddValidation = (req, res, next) => [
  check("provider")
    // .custom((value) => {
    //   if (value) {
    //     return BlockCalender.findOne({ provider: value }).then(
    //       (feature) => {
    //         if (feature) {
    //           return Promise.reject("Provider already exist.");
    //         }
    //       }
    //     );
    //   }
    // })
    // .withMessage("Provider already exist.")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Please enter provider name."),
    check("title")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Please enter title."),
];
const addTimeSlots = (req, res, next) => [
    check("from")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Please enter from date time."),
];

const generateEditValidation = (req, res, next) => [
  check("name")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Please enter access level Group Name."),
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
  edit: [generateEditValidation(), reporter],
  addTimeSlots : [addTimeSlots(), reporter],

};
