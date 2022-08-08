const { check, validationResult } = require("express-validator");
const resCode = require("../helper/httpResponseCode.js");
const resMessage = require("../helper/httpResponseMessage.js");
const Response = require("../common_functions/response_handler");
const Form = require("../models/formBuilderModel");
const Staff = require("../models/staffModel");
const path = require('path');
const fs = require('fs');
const generateAddValidation = (req, res, next) => [
  check("title")
    .custom((value) => {
      try{
        return Form.findOne({ title: value }).then((formTitle) => {
          console.log("formTitle", formTitle);
          if (formTitle) {
            // return false;
            return Promise.reject(resMessage.FORM_TITLE_ALREADY_EXIST);
          }
        });
      }catch(err){
        Response.sendResponseWithError(
          res,
          resCode.WENT_WRONG,
          "Something went wrong. Please Try again some time."
        );
      }
      
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

const submitForm = (req, res, next) => [
  check("formId")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Enter formId")
];



const reporter = (req, res, next) => {
  console.log('req.body',req.body);
  if (req.file) {
    if (req.file.error != "undefined" && req.file.error == true) {
      for (let i = 0; i < Object.keys(req.files).length; i++) {
        // console.log('files', i, req.files);
        let fieldname = Object.keys(req.files)[i];
        let filePath = "public/uploads/form" + "/" + req.body[fieldname];
        // console.log('path', filePath)
        fs.unlink(filePath, function (err) {
          if (!err) {
            console.log("removed");
          } else {
            console.log("removing_file_error", err);
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
   return  Response.sendResponseWithError(
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
  submitForm: [submitForm(), reporter],
};
