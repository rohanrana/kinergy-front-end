const { check, validationResult } = require("express-validator");
const resCode = require("../helper/httpResponseCode.js");
const resMessage = require("../helper/httpResponseMessage.js");
const Response = require("../common_functions/response_handler");
const Coupon = require("../models/couponModel");
const Staff = require("../models/staffModel");
// const path = require('path');
// const fs = require('fs');
const generateAddValidation = (req, res, next) => [
  check("title")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.TITLE_REQUIRED),
  check("startDate")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.START_DATE_REQUIRED),
  check("endDate")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.END_DATE_REQUIRED),
  check("couponType")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.COUPON_TYPE_REQUIRED),
  check("couponValue")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.COUPON_VALUE_REQUIRED),
  check("couponCode")
    .custom((value) => {
      if (value) {
        return Coupon.findOne({ couponCode: value }).then((coupon) => {
          if (coupon) {
            return Promise.reject(resMessage.ALL_READY_EXIST);
          }
        });
      }
    })
    .withMessage(resMessage.COUPONCODE + resMessage.ALL_READY_EXIST)
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.COUPON_REQUIRED),
];
const generateEditValidation = (req, res, next) => [
  check("title")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.TITLE_REQUIRED),
  check("startDate")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.START_DATE_REQUIRED),
  check("endDate")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.END_DATE_REQUIRED),
  check("couponType")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.COUPON_TYPE_REQUIRED),
  check("couponValue")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.COUPON_VALUE_REQUIRED),
  check("couponCode")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.COUPON_REQUIRED),
];

const generateIdValidation = (req, res, next) => [
  check("_id")
    .custom((value) => {
      if (value) {
        return Coupon.findOne({ _id: value }).then((coupon) => {
          if (!coupon) {
            return Promise.reject(resMessage.ID_NOT_EXIST);
          }
        });
      }
    })
    .withMessage(resMessage.ID_NOT_EXIST)
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.ID_REQUIRED),
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
  idRequired: [generateIdValidation(), reporter],
};
