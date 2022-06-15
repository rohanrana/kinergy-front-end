const { check, validationResult } = require("express-validator");
const resCode = require("../helper/httpResponseCode.js");
const resMessage = require("../helper/httpResponseMessage.js");
const Response = require("../common_functions/response_handler");
const Form = require("../models/formBuilderModel");
const Staff = require("../models/staffModel");
// const path = require('path');
// const fs = require('fs');
const generateAddValidation = (req, res, next) => [
  check("title")
    .custom((value) => {
      return Form.findOne({ title: value }).then((formTitle) => {
        console.log("formTitle", formTitle);
        if (formTitle) {
          // return false;
          return Promise.reject(resMessage.FORM_TITLE_ALREADY_EXIST);
        }
      });
    })
    .withMessage(resMessage.FORM_TITLE_ALREADY_EXIST)
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.TITLE_REQUIRED),
];
const generateEditValidation = (req, res, next) => [
  check("title")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.TITLE_REQUIRED),
  check("_id")
    .custom((value) => {
      if (value) {
        return Form.findOne({ _id: value }).then((formTitle) => {
          if (!formTitle) {
            return Promise.reject(resMessage.ID_NOT_EXIST);
          }
        });
      }
    })
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.ENTER_FORM_ID),
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
};
