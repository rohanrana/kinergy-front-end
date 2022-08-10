const { check, validationResult } = require("express-validator");

const Staffs = require("../models/staffModel.js");
const Customers = require("../models/customersModel.js");
const resCode = require("../helper/httpResponseCode.js");
const resMessage = require("../helper/httpResponseMessage.js");
const Response = require("../common_functions/response_handler");



var fs = require('fs');
// consent and certificate
  
const waiver = (req, res, next) => [
  check("signature")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Please enter signature."),
];
const reporter = (req, res, next) => {
  // ================== IF FILE ERROR =============
  console.log(req.file);
  if (req.file) {
    if (req.file.error != "undefined" && req.file.error == true) {
      for (let i = 0; i < Object.keys(req.files).length; i++) {
        // console.log('files', i, req.files);
        let fieldname = Object.keys(req.files)[i];
        let filePath = "public/uploads/user/signature" + "/" + req.body[fieldname];
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

  // ==================

  var errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log('requestFiles',req.files.signature);
    if (req.files.signature) {
      if (req.files.signature.length > 0) {
        if (req.files.signature != "undefined" && req.files.signature != null) {
            console.log("If condition");
          for (let i = 0; i < Object.keys(req.files.signature).length; i++) {
            console.log("loop IN");
            let fieldname = Object.keys(req.files.signature)[i];
            // let filePath = "public/uploads/user/signature" + "/" + req.body[fieldname];
            let filePath = req.files.signature[i].path;
            console.log('filePath',filePath);
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

module.exports = {
  waiver: [waiver(), reporter],
};
