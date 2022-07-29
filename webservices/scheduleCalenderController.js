const Response = require("../common_functions/response_handler");
const resCode = require("../helper/httpResponseCode");
const resMessage = require("../helper/httpResponseMessage");
const schedulCalender = require("../models/timeScheduleModel");
const generalHelper = require("../helper/general");

const add = async (req, res, next) => {
  var { name, type, available, provider, intervals } = req.body;
  available = intervals && intervals.length > 0 ? 1 : 0;
  var intervals = intervals;
  await schedulCalender
    .findOneAndUpdate(
      { name: name, type: type, provider: provider },
      {
        name,
        type,
        provider: provider,
        available: available,
        intervals: intervals,
      },
      { new: true, upsert: true }
    )
    .exec(async (schedulCalenderErr, schedulCalenderResult) => {
      if (await schedulCalenderErr) {
        return await Response.sendResponseWithoutData(
          res,
          resCode.WENT_WRONG,
          resMessage.WENT_WRONG
        );
      } else {
        return await Response.sendResponseWithData(
          res,
          resCode.EVERYTHING_IS_OK,
          "Schedule calender weekly add day successfully.",
          schedulCalenderResult
        );
      }
    });
};

const getDays = async (req, res, next) => {
  if (!req.body.provider) return await Response.sendResponseWithoutData(res,resCode.WENT_WRONG,"Please enter provider id.");
  
  await schedulCalender
    .find({provider:req.body.provider})
    .exec(async (schedulCalenderErr, schedulCalenderResult) => {
      if (await schedulCalenderErr) {
        return await Response.sendResponseWithoutData(
          res,
          resCode.WENT_WRONG,
          resMessage.WENT_WRONG
        );
      } else {
        return await Response.sendResponseWithData(
          res,
          resCode.EVERYTHING_IS_OK,
          "Schedule calender weekly list.",
          schedulCalenderResult
        );
      }
    });
};

module.exports = {
  add,
  getDays,
};
