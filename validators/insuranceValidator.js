const { check, validationResult } = require("express-validator");

const resCode = require("../helper/httpResponseCode.js");
const resMessage = require("../helper/httpResponseMessage.js");
const Response = require("../common_functions/response_handler");
const generalHelper = require("../helper/general");
const add = (req, res, next) => [
  // check("clientFirstName")
  //   .trim()
  //   .escape()
  //   .not()
  //   .isEmpty()
  //   .withMessage("Enter client first name."),
  // check("clientLastName")
  //   .trim()
  //   .escape()
  //   .not()
  //   .isEmpty()
  //   .withMessage("Enter client last name."),
  // check("clientDob")
  //   .trim()
  //   .escape()
  //   .not()
  //   .isEmpty()
  //   .withMessage("Enter client date of birth."),
  // check("clientGender")
  //   .trim()
  //   .escape()
  //   .not()
  //   .isEmpty()
  //   .withMessage("Enter client gender."),
  // check("clientPhone")
  //   .trim()
  //   .escape()
  //   .not()
  //   .isEmpty()
  //   .withMessage("Enter client contact number."),
  // check("clientEmail")
  //   .trim()
  //   .escape()
  //   .not()
  //   .isEmpty()
  //   .withMessage("Enter client contact email.")
  //   .bail()
  //   .normalizeEmail()
  //   .isEmail()
  //   .withMessage("Enter valied client contact email."),

  check("providerName")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Enter provider name."),
  check("providerPhone")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Enter provider phone."),
  check("insuranceNumber")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Enter insurance number."),
  // check("claimNumber")
  //   .trim()
  //   .escape()
  //   .not()
  //   .isEmpty()
  //   .withMessage("Enter claim number."),
  check("orderOfBenefits")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Select order of benefits."),
  // check("effectiveFrom")
  //   .trim()
  //   .escape()
  //   .not()
  //   .isEmpty()
  //   .withMessage("Enter effective from."),
  // check("effectiveTill")
  //   .trim()
  //   .escape()
  //   .not()
  //   .isEmpty()
  //   .withMessage("Enter effective tille."),
  // check("copayType")
  //   .trim()
  //   .escape()
  //   .not()
  //   .isEmpty()
  //   .withMessage("Enter copay type."),
  // check("copayValue")
  //   .trim()
  //   .escape()
  //   .not()
  //   .isEmpty()
  //   .withMessage("Enter copay value."),
  check("relationToInsured")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Enter relation to insured."),
];
const clientAdd = (req, res, next) => [
  check("sign")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Enter signature please."),
  check("clientId")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Enter client id."),
  // check("clientLastName")
  //   .trim()
  //   .escape()
  //   .not()
  //   .isEmpty()
  //   .withMessage("Enter client last name."),
  // check("clientDob")
  //   .trim()
  //   .escape()
  //   .not()
  //   .isEmpty()
  //   .withMessage("Enter client date of birth."),
  // check("clientGender")
  //   .trim()
  //   .escape()
  //   .not()
  //   .isEmpty()
  //   .withMessage("Enter client gender."),
  // check("clientPhone")
  //   .trim()
  //   .escape()
  //   .not()
  //   .isEmpty()
  //   .withMessage("Enter client contact number."),
  // check("clientEmail")
  //   .trim()
  //   .escape()
  //   .not()
  //   .isEmpty()
  //   .withMessage("Enter client contact email.")
  //   .bail()
  //   .normalizeEmail()
  //   .isEmail()
  //   .withMessage("Enter valied client contact email."),

  check("providerName")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Enter provider name."),
  check("providerPhone")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Enter provider phone."),
  check("insuranceNumber")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Enter insurance number."),
  // check("claimNumber")
  //   .trim()
  //   .escape()
  //   .not()
  //   .isEmpty()
  //   .withMessage("Enter claim number."),
  check("orderOfBenefits")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Select order of benefits."),
  // check("effectiveFrom")
  //   .trim()
  //   .escape()
  //   .not()
  //   .isEmpty()
  //   .withMessage("Enter effective from."),
  // check("effectiveTill")
  //   .trim()
  //   .escape()
  //   .not()
  //   .isEmpty()
  //   .withMessage("Enter effective tille."),
  // check("copayType")
  //   .trim()
  //   .escape()
  //   .not()
  //   .isEmpty()
  //   .withMessage("Enter copay type."),
  // check("copayValue")
  //   .trim()
  //   .escape()
  //   .not()
  //   .isEmpty()
  //   .withMessage("Enter copay value."),
  check("relationToInsured")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Enter relation to insured."),
];

const clientEdit = (req, res, next) => [
  check("sign")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Enter signature please."),
  check("clientId")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Enter client id."),
  // check("clientFirstName")
  //   .trim()
  //   .escape()
  //   .not()
  //   .isEmpty()
  //   .withMessage("Enter client first name."),
  // check("clientLastName")
  //   .trim()
  //   .escape()
  //   .not()
  //   .isEmpty()
  //   .withMessage("Enter client last name."),
  // check("clientDob")
  //   .trim()
  //   .escape()
  //   .not()
  //   .isEmpty()
  //   .withMessage("Enter client date of birth."),
  // check("clientGender")
  //   .trim()
  //   .escape()
  //   .not()
  //   .isEmpty()
  //   .withMessage("Enter client gender."),
  // check("clientPhone")
  //   .trim()
  //   .escape()
  //   .not()
  //   .isEmpty()
  //   .withMessage("Enter client contact number."),
  // check("clientEmail")
  //   .trim()
  //   .escape()
  //   .not()
  //   .isEmpty()
  //   .withMessage("Enter client contact email.")
  //   .bail()
  //   .normalizeEmail()
  //   .isEmail()
  //   .withMessage("Enter valied client contact email."),

  check("providerName")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Enter provider name."),
  check("providerPhone")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Enter provider phone."),
  check("insuranceNumber")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Enter insurance number."),
  // check("claimNumber")
  //   .trim()
  //   .escape()
  //   .not()
  //   .isEmpty()
  //   .withMessage("Enter claim number."),
  check("orderOfBenefits")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Select order of benefits."),
  // check("effectiveFrom")
  //   .trim()
  //   .escape()
  //   .not()
  //   .isEmpty()
  //   .withMessage("Enter effective from."),
  // check("effectiveTill")
  //   .trim()
  //   .escape()
  //   .not()
  //   .isEmpty()
  //   .withMessage("Enter effective tille."),
  // check("copayType")
  //   .trim()
  //   .escape()
  //   .not()
  //   .isEmpty()
  //   .withMessage("Enter copay type."),
  // check("copayValue")
  //   .trim()
  //   .escape()
  //   .not()
  //   .isEmpty()
  //   .withMessage("Enter copay value."),
  check("relationToInsured")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Enter relation to insured."),
];

const edit = (req, res, next) => [
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
    .withMessage("Please enter insurance id."),
  check("clientFirstName")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Enter client first name."),
  check("clientLastName")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Enter client last name."),
  check("clientDob")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Enter client date of birth."),
  check("clientGender")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Enter client gender."),
  check("clientPhone")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Enter client contact number."),
  check("clientEmail")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Enter client contact email.")
    .bail()
    .normalizeEmail()
    .isEmail()
    .withMessage("Enter valied client contact email."),

  check("providerName")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Enter provider name."),
  check("providerPhone")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Enter provider phone."),
  check("insuranceNumber")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Enter insurance number."),
  check("claimNumber")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Enter claim number."),
  check("orderOfBenefits")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Select order of benefits."),
  check("effectiveFrom")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Enter effective from."),
  check("effectiveTill")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Enter effective tille."),
  check("copayType")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Enter copay type."),
  check("copayValue")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Enter copay value."),
  check("relationToInsured")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("Enter relation to insured."),
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
  add: [add(), reporter],
  clientAdd: [clientAdd(), reporter],
  edit: [edit(), reporter],

  clientEdit: [clientEdit(), reporter],
};
