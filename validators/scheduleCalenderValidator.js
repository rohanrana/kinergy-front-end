const { check, validationResult } = require("express-validator");
const resCode = require("../helper/httpResponseCode.js");
const resMessage = require("../helper/httpResponseMessage.js");
const Response = require("../common_functions/response_handler");
const generateAddValidation = (req, res, next) => [
  check("provider")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Please enter provider."),
  check("name")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Please enter day name."),
  check("type")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Please enter type."),
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
};
