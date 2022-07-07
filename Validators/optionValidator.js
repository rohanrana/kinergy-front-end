const { check, validationResult } = require("express-validator");
const resCode = require("../helper/httpResponseCode.js");
const resMessage = require("../helper/httpResponseMessage.js");
const Response = require("../common_functions/response_handler");
const optionModel = require("../models/optionModel");
const generalHelper = require("../helper/general");

// const fs = require('fs');
const generateAddValidation = (req, res, next) => [
  check("name")
    .custom((value, { req, loc, path }) => {
      if (value) {
        return optionModel
          .findOne({ slug:generalHelper.slugify(req.body.name), relTo: req.body.relTo })
          .then((option) => {
            if (option) {
              return Promise.reject("This option already exist.");
            }
          });
      }
    })
    .withMessage("This option already exist.")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Please enter option name."),
  check("relTo")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Please enter related To."),
];

const generategetByIdValidation = (req, res, next) => [
  check("_id")
    .custom((value) => {
      console.log(value);
      if (!generalHelper.checkObjectId(value)) {
        return Promise.reject("Please enter valid id.");
      } else {
        return true;
      }
    })
    .withMessage("Please enter valid id.")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Please enter option id."),
];

const generateEditValidation = (req, res, next) => [
  check("_id")
    .custom((value) => {
      console.log(value);
      if (!generalHelper.checkObjectId(value)) {
        return Promise.reject("Please enter valid id.");
      } else {
        return true;
      }
    })
    .withMessage("Please enter valid id.")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Please enter option id."),
  check("name")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Please enter option name."),
  check("relTo")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Please enter related To."),
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
  getById: [generategetByIdValidation(), reporter],
};
