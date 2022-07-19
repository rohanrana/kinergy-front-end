const { check, validationResult } = require("express-validator");
const resCode = require("../helper/httpResponseCode.js");
const resMessage = require("../helper/httpResponseMessage.js");
const Response = require("../common_functions/response_handler");

const Groups = require("../models/permissionGroupModel");
const Feature = require("../models/featureModel");
const generalHelper = require("../helper/general");
// const fs = require('fs');
const generateAddValidation = (req, res, next) => [
  check("name")
    .custom((value) => {
      if (value) {
        return Feature.findOne({ featureSlug: generalHelper.slugify(value) }).then(
          (feature) => {
            if (feature) {
              return Promise.reject("Feature already exist.");
            }
          }
        );
      }
    })
    .withMessage("Feature already exist.")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Please enter Feature Name."),
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
};
