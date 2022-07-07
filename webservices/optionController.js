const Response = require("../common_functions/response_handler");
const resCode = require("../helper/httpResponseCode");
const resMessage = require("../helper/httpResponseMessage");
const optionModel = require("../models/optionModel");
const generalHelper = require("../helper/general");

const add = (req, res, next) => {
  const { name, relTo, parentOption } = req.body;
  var options = new optionModel({
    name: name,
    slug: generalHelper.slugify(name),
    relTo: relTo,
    parentOption: parentOption,
  });
  options.save((err, result) => {
    if (!result && err) {
      console.log(err);
      return Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        resMessage.WENT_WRONG
      );
    } else {
      return Response.sendResponseWithData(
        res,
        resCode.EVERYTHING_IS_OK,
        "Option add successfully.",
        result
      );
    }
  });
};

const edit = (req, res, next) => {
  const { _id, name, relTo, parentOption } = req.body;
  optionModel
    .findByIdAndUpdate(
      { _id: _id },
      {
        $set: {
          name: name,
          relTo: relTo,
          parentOption: parentOption,
          slug: generalHelper.slugify(name),
        },
      },
      { new: true }
    )
    .lean()
    .exec((err, result) => {
      if (!result && err) {
        console.log(err);
        return Response.sendResponseWithoutData(
          res,
          resCode.WENT_WRONG,
          resMessage.WENT_WRONG
        );
      } else {
        return Response.sendResponseWithData(
          res,
          resCode.EVERYTHING_IS_OK,
          "Option edit successfully.",
          result
        );
      }
    });
};

const getOptions = (req, res, next) => {
  var hasPerentOption = req.body.parentOption ? req.body.parentOption : null;
  if(!req.body.relTo){
    return Response.sendResponseWithoutData(
      res,
      resCode.EVERYTHING_IS_OK,
      "Please enter rel type."
    );
  }else{
      optionModel
        .find({ parentOption: hasPerentOption,relTo:req.body.relTo })
        .select({ __v: 0 })
        .lean()
        .exec((err, result) => {
          if (err) {
            return Response.sendResponseWithoutData(
              res,
              resCode.WENT_WRONG,
              resMessage.WENT_WRONG
            );
          } else if (result.length == 0) {
            return Response.sendResponseWithoutData(
              res,
              resCode.EVERYTHING_IS_OK,
              "Option Not Found."
            );
          } else {
            return Response.sendResponseWithData(
              res,
              resCode.EVERYTHING_IS_OK,
              result
            );
          }
        });
    }
};

const getOptionById = (req, res, next) => {
  optionModel
    .find({ _id: req.body._id })
    .select({ __v: 0 })
    .lean()
    .exec((err, result) => {
      if (err) {
        return Response.sendResponseWithoutData(
          res,
          resCode.WENT_WRONG,
          resMessage.WENT_WRONG
        );
      } else if (result.length == 0) {
        return Response.sendResponseWithoutData(
          res,
          resCode.EVERYTHING_IS_OK,
          "Option Not Found."
        );
      } else {
        return Response.sendResponseWithData(
          res,
          resCode.EVERYTHING_IS_OK,
          result
        );
      }
    });
};

const getChildOptions = (req, res, next) => {
  var hasPerentOption = req.body.parentOption ? req.body.parentOption : null;
  optionModel
    .find({ parentOption: hasPerentOption })
    .select({ __v: 0 })
    .lean()
    .exec((err, result) => {
      if (err) {
        return Response.sendResponseWithoutData(
          res,
          resCode.WENT_WRONG,
          resMessage.WENT_WRONG
        );
      } else if (result.length == 0) {
        return Response.sendResponseWithoutData(
          res,
          resCode.EVERYTHING_IS_OK,
          "Option Not Found."
        );
      } else {
        return Response.sendResponseWithData(
          res,
          resCode.EVERYTHING_IS_OK,
          result
        );
      }
    });
};
module.exports = {
  add,
  edit,
  getOptions,
  getChildOptions,
  getOptionById,
};
