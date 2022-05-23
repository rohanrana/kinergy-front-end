const { check, validationResult } = require("express-validator");

const resCode = require("../helper/httpResponseCode.js");
const resMessage = require("../helper/httpResponseMessage.js");
const Response = require("../common_functions/response_handler");
const Service = require("../models/serviceModel");
const slugify = require("slugify");
var fs = require("fs");

const otherPreferences = (req, res, next) => [
  check("_id")
  .trim()
  .escape()
  .not()
  .isEmpty()
  .withMessage(resMessage.ENTER_USER_ID),
];

const getUserDetails = (req, res, next) => [
  check("_id")
  .trim()
  .escape()
  .not()
  .isEmpty()
  .withMessage(resMessage.ENTER_USER_ID),
];
const generateUpdatePasswordValidatrion = (req, res, next) => [
  check("_id")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.ENTER_USER_ID),
  check("currentPassword")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.ENTER_CURRENT_PASSWORD),
  check("newPassword")
    .matches(
      /^(?=.*[A-Za-z])(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/
    )
    .withMessage(resMessage.PASSWORD_STRONG)
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.ENTER_NEW_PASSWORD),
  check("confirmPassword")
    .custom((value, { req, loc, path }) => {
        if(req.body.newPassword === req.body.confirmPassword){
            return true;
        }else{
            return false;
        }
    })
    .withMessage(resMessage.MATCH_CONFIRM_PASSWORD)
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.ENTER_CONFIRM_PASSWORD),
];

const reporter = (req, res, next) => {
  // __if file has any error
  if (req.file) {
    if (req.file.error != "undefined" && req.file.error == true) {
      for (let i = 0; i < Object.keys(req.files).length; i++) {
        console.log("error", i, req.files);
        let fieldname = Object.keys(req.files)[i];
        let filePath = "public/uploads/service/" + "/" + req.body[fieldname];
        console.log("path", filePath);
        fs.unlink(filePath, function (err) {
          if (!err) {
            console.log("removed");
          }
        });
      }
      // return res.status(resCode.UNPROCESSABLE_ENTITY).json({
      //     errors: req.file
      // });
      Response.sendResponseWithError(
        res,
        resCode.UNPROCESSABLE_ENTITY,
        "Validation Errors",
        req.file
      );
    }
  }

  // unlink file if any error occurs

  // Check validation other fields
  var errors = validationResult(req);
  if (!errors.isEmpty()) {
    if (req.files) {
      if (req.files.length > 0) {
        if (req.files != "undefined" && req.files && req.files.length != 0) {
          for (let i = 0; i < Object.keys(req.files).length; i++) {
            let fieldname = Object.keys(req.files)[i];
            let filePath =
              "public/uploads/service/" + "/" + req.body[fieldname];
            fs.unlink(filePath, function (err) {
              if (!err) {
                console.info(`removed`);
              }
            });
          }
        }
      }
    }

    const errorMessages = errors.array().map((error) => ({
      title: error.param,
      msg: error.msg,
    }));
    const dedupThings = Array.from(
      errorMessages.reduce((m, t) => m.set(t.title, t), new Map()).values()
    );
    // return res.status(resCode.UNPROCESSABLE_ENTITY).json({
    //     errors: dedupThings
    // });
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
// checkProvider

module.exports = {
  updatePassword: [generateUpdatePasswordValidatrion(), reporter],
  otherPreferences:[otherPreferences(),reporter],
  getUserDetails:[getUserDetails(),reporter]
  
};
