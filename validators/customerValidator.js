const { check, validationResult } = require("express-validator");

const Staffs = require("../models/staffModel.js");
const Customers = require("../models/customersModel.js");
const resCode = require("../helper/httpResponseCode.js");
const resMessage = require("../helper/httpResponseMessage.js");
const Response = require("../common_functions/response_handler");
var fs = require('fs');
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

const CustomerAddSomeOneValidation = (req, res, next) => [
  check("refCustomer")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Enter referance customer."), 
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

const generateSurgeryRecordValidators = (req, res, next) => [
  check("dateOfSurgery")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Please enter Date Of Surgery."),
];

const generateProgressReportValidators = (req, res, next) => [
  check("dateOfSurgery")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Please enter Date Of Surgery."),
];

const emergencyContact = (req, res, next) => [
  check("emergencyContact")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Please enter emergencyContact."),

  // check("emergencyContact.0.fullName")
  //   .custom((value, { req, loc, path }) => {
  //     if (
  //       req.body.emergencyContact &&
  //       req.body.emergencyContact.length > 0 &&
  //       req.body.emergencyContact[0].fullName &&
  //       req.body.emergencyContact[0].fullName != ""
  //     ) {

  //       console.log("111" + req.body.emergencyContact.length);
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   })
  //   .withMessage("Please enter fullName."),
  // check("relationShip")
  //   .trim()
  //   .escape()
  //   .not()
  //   .isEmpty()
  //   .withMessage("Please enter relationShip."),
  // check("language")
  //   .trim()
  //   .escape()
  //   .not()
  //   .isEmpty()
  //   .withMessage("Please enter language."),
  // check("phoneType")
  //   .trim()
  //   .escape()
  //   .not()
  //   .isEmpty()
  //   .withMessage("Please enter phoneType."),
  // check("phone")
  //   .trim()
  //   .escape()
  //   .not()
  //   .isEmpty()
  //   .withMessage("Please enter phone."),
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

const clientPortalClientDetail = (req, res, next) => [
  check("customerId")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Enter customer id."),
  check("firstName")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.FIRST_NAME_REQUIRED),
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
  check("ssnNumber")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Enter ssn number."),
  check("contactInfo")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Enter contact info."),

  check("primaryEmail")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Enter primary email.")
    .bail()
    .normalizeEmail()
    .isEmail()
    .withMessage(resMessage.EMAIL_VALID),
  check("secondaryEmail")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Enter  secondary email.")
    .bail()
    .normalizeEmail()
    .isEmail()
    .withMessage(resMessage.EMAIL_VALID),
];
const clientPortalCommunicationPreferences = (req, res, next) => [
  check("customerId")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Enter customer id."),
  check("appointmentReminders")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Enter appointment reminders."),
  check("appointmentConfirmation")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Enter appointment confirmation."),
];
const clientPortalEmergencyContact = (req, res, next) => [
  check("customerId")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Enter customer id."),
  check("fullName")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Enter full name."),
  check("relationship")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Select relationship."),
  check("language")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Select language."),
];
const medicalProviderInformation = (req, res, next) => [
  check("customerId")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Enter customer id."),
  check("familyDoctorName")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Enter family doctor name."),
  check("familyDoctorPhone")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Enter family doctor phone."),
];
const medicationAndSupplement = (req, res, next) => [
  check("customerId")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Enter customer id."),
  // check("medication")
  //   .trim()
  //   .escape()
  //   .not()
  //   .isEmpty()
  //   .withMessage("Enter medication description."),
  // check("supplement")
  //   .trim()
  //   .escape()
  //   .not()
  //   .isEmpty()
  //   .withMessage("Enter supplement description."),
];
const personalHabit = (req, res, next) => [
  check("customerId")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Enter customer id."),
  check("smoke")
    .custom((value, { req, loc, path }) => {
      if (value === false || value === true || value === 0 || value === 1) {
        return true;
      } else {
        return Promise.reject("Value Should be true or false.");
      }
    })
    .withMessage("Value Should be true or false.")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Enter smoke/chew tobacco."),
  check("drinkAlcohol")
    .custom((value, { req, loc, path }) => {
      if (value === false || value === true || value === 0 || value === 1) {
        return true;
      } else {
        return Promise.reject("Value Should be true or false.");
      }
    })
    .withMessage("Value Should be true or false.")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Enter drink alcohol."),
  check("drinkCoffee")
    .custom((value, { req, loc, path }) => {
      if (value === false || value === true || value === 0 || value === 1) {
        return true;
      } else {
        return Promise.reject("Value Should be true or false.");
      }
    })
    .withMessage("Value Should be true or false.")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Enter drink coffee."),
  check("drinkSoda")
    .custom((value, { req, loc, path }) => {
      if (value === false || value === true || value === 0 || value === 1) {
        return true;
      } else {
        return Promise.reject("Value Should be true or false.");
      }
    })
    .withMessage("Value Should be true or false.")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Enter drink soda."),
];





// consent and certificate
  
const concentAndCertification = (req, res, next) => [
  check("customerId")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Enter customer id."),
  check("fullName")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Enter full name."),
  check("relationship")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Select relationship."),
  check("language")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Select language."),
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
    console.log('requestFiles',req.files);
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
  CustomerAddSomeOneValidation: [CustomerAddSomeOneValidation(), reporter],
  verifyOtp: [verifyOtpValidation(), reporter],

  // Admin Side
  medicalRecordAdd: [generateMedicalRecordValidators(), reporter],
  surgeryRecordAdd: [generateSurgeryRecordValidators(), reporter],
  progressReportAdd: [generateProgressReportValidators(), reporter],
  emergencyContact: [emergencyContact(), reporter],
  clientPortalClientDetail: [clientPortalClientDetail(), reporter],
  clientPortalCommunicationPreferences: [
    clientPortalCommunicationPreferences(),
    reporter,
  ],
  clientPortalEmergencyContact: [clientPortalEmergencyContact(), reporter],
  medicalProviderInformation: [medicalProviderInformation(), reporter],
  personalHabit: [personalHabit(), reporter],
  medicationAndSupplement: [medicationAndSupplement(), reporter],
  concentAndCertification: [concentAndCertification(), reporter],
};
