const { check, validationResult } = require("express-validator");

const Staffs = require("../models/staffModel.js");
const Customers = require("../models/customersModel.js");
const resCode = require("../helper/httpResponseCode.js");
const resMessage = require("../helper/httpResponseMessage.js");
const Response = require("../common_functions/response_handler");

const generateMobileloginValidators = (req, res, next) => [
  check("phone")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Please enter phone number"),
];
const generateEmailLoginValidators = (req, res, next) => [
  check("email")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.EMAIL_REQUIRED)
    .bail()
    .normalizeEmail()
    .isEmail()
    .withMessage(resMessage.EMAIL_VALID),
];
const generateValidators = (req, res, next) => [
  check("email")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.EMAIL_REQUIRED)
    .bail()
    .normalizeEmail()
    .isEmail()
    .withMessage(resMessage.EMAIL_VALID),
  check("password")
    // .matches(/^(?=.*[A-Za-z])(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/)
    // .withMessage(resMessage.PASSWORD_STRONG)
    .notEmpty()
    .withMessage(resMessage.PASSWORD_REQUIRED),
];

const CustomerAddValidation = (req, res, next) => [
  check("firstName")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.FIRST_NAME_REQUIRED),
  check("phone")
    .custom((value, { req, loc, path }) => {
      return Customers.findOne({ phone: value }).then((customer) => {
        if (customer) {
          return Promise.reject("Phone number already exist.");
        }
      });
    })
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.CONTACT_REQUIRED),

  check("dob")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.DOB_REQUIRED),
  check("gender")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.GENDER_REQUIRED),
  check("email")
    .custom((value, { req, loc, path }) => {
      return Customers.findOne({ email: value }).then((customer) => {
        if (customer) {
          return Promise.reject(resMessage.EMAIL_ALREADY_EXISTS);
        }
      });
    })
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.EMAIL_REQUIRED)
    .bail()
    .normalizeEmail()
    .isEmail()
    .withMessage(resMessage.EMAIL_VALID),
];

const verifyOtpValidation = (req, res, next) => [
  check("otp").trim().escape().not().isEmpty().withMessage("Please enter otp"),
];
const StaffEditValidation = (req, res, next) => [
  check("firstName")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.FIRST_NAME_REQUIRED),
  check("contact")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.CONTACT_REQUIRED),
  check("type")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.TYPE_REQUIRED),
  check("address")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.ADDRESS_REQUIRED),
  check("country")
    .isInt()
    .withMessage(resMessage.COUNTRY_INT)
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.COUNTRY_REQUIRED),

  check("state")
    .isInt()
    .withMessage(resMessage.STATE_INT)
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.STATE_REQUIRED),

  check("city")
    .isInt()
    .withMessage(resMessage.CITY_INT)
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.CITY_REQUIRED),

  check("pin")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.PIN_REQUIRED),
  check("dob")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.DOB_REQUIRED),
  check("gender")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.GENDER_REQUIRED),
  check("email")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.EMAIL_REQUIRED)
    .bail()
    .normalizeEmail()
    .isEmail()
    .withMessage(resMessage.EMAIL_VALID),
];

const generateMedicalRecordValidators = (req, res, next) => [
  check("dateOnSet")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Please enter Date Of Onset."),
  check("treatedBy")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Please enter tready by."),
  check("casePhysician")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Please select case physician."),
  check("injuryType")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Please select injury type."),
  // check("bodyParts")
  //   .trim()
  //   .escape()
  //   .not()
  //   .isEmpty()
  //   .withMessage("Please select body part."),
  // check("bodySides")
  //   .trim()
  //   .escape()
  //   .not()
  //   .isEmpty()
  //   .withMessage("Please select body side."),
];

const StaffSignUpValidation = (req, res, next) => [
  check("firstName")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.FIRST_NAME_REQUIRED),
  check("email")
    .custom((value, { req, loc, path }) => {
      let userOptions = {};
      userOptions = { ...userOptions, email: value };

      if (req.body.type) {
        userOptions = { ...userOptions, type: req.body.type };
      }
      console.log("userOptions", userOptions);
      return Staffs.findOne(userOptions).then((staff) => {
        if (staff) {
          return Promise.reject(resMessage.EMAIL_ALREADY_EXISTS);
        }
      });
    })
    .bail()
    .normalizeEmail()
    .isEmail()
    .withMessage(resMessage.EMAIL_VALID)
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.EMAIL_REQUIRED),
  check("contact")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.CONTACT_REQUIRED),
  check("password")
    .matches(
      /^(?=.*[A-Za-z])(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/
    )
    .withMessage(resMessage.PASSWORD_STRONG)
    .notEmpty()
    .withMessage(resMessage.PASSWORD_REQUIRED),
];

const reporter = (req, res, next) => {
  // ================== IF FILE ERROR =============
  console.log(req.file);
  if (req.file) {
    if (req.file.error != "undefined" && req.file.error == true) {
      for (let i = 0; i < Object.keys(req.files).length; i++) {
        // console.log('files', i, req.files);
        let fieldname = Object.keys(req.files)[i];
        let filePath = "public/uploads/user" + "/" + req.body[fieldname];
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
    console.log(req.files);
    if (req.files) {
      if (req.files.length > 0) {
        if (req.files != "undefined" && req.files != null) {
          for (let i = 0; i < Object.keys(req.files).length; i++) {
            let fieldname = Object.keys(req.files)[i];
            let filePath = "public/uploads/user/" + "/" + req.body[fieldname];
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
  mobileLogin: [generateMobileloginValidators(), reporter],
  emailLogin: [generateEmailLoginValidators(), reporter],
  registerNewCustomer: [CustomerAddValidation(), reporter],
  verifyOtp: [verifyOtpValidation(), reporter],
  // Admin Side
  medicalRecordAdd: [generateMedicalRecordValidators(), reporter],
};
