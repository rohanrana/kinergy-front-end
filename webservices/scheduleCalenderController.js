const Response = require("../common_functions/response_handler");
const resCode = require("../helper/httpResponseCode");
const resMessage = require("../helper/httpResponseMessage");
const schedulCalender = require("../models/timeScheduleModel");
const generalHelper = require("../helper/general");
const Days = require("../models/daysModel");


const add = async (req, res, next) => {
  var { provider, rules } = req.body;
  // console.log('req.body',req.body);
  // console.log('rules[0]',rules[0]);
  
  rules && typeof rules != 'string'  && rules.length > 0 && rules.map(async (SDAY,SDAYX)=>{
    var name = SDAY.name;
    var type = SDAY.type;
    var intervals  = SDAY.intervals;    
    available = intervals && intervals.length > 0 ? 1 : 0;
    
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
            "Schedule calender availability  add  successfully.",
            schedulCalenderResult
          );
        }
      });
  })
  return await Response.sendResponseWithoutData(
    res,
    resCode.WENT_WRONG,
    "Schedule calender availability  not added.",
  );
};



const addDays = async (req, res, next) => {
  var { name, type,sort} = req.body;
  var intervals = intervals;
  await Days
    .findOneAndUpdate(
      { name: name, type: type },
      {
        name,
        type,sort
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
          "Weekly day add successfully.",
          schedulCalenderResult
        );
      }
    });
};

const get = async (req, res, next) => {
  if (!req.body.provider) return await Response.sendResponseWithoutData(res,resCode.WENT_WRONG,"Please enter provider id.");
  var query = {provider:req.body.provider};
  await schedulCalender
    .find(query)
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


const getDays = async (req, res, next) => {
  // if (!req.body.provider) return await Response.sendResponseWithoutData(res,resCode.WENT_WRONG,"Please enter provider id.");
  
  await Days
    .find({type:"wday"}).select("name type").sort({sort:1})
    .exec(async (daysErr, daysResult) => {
      if (await daysErr) {
        return await Response.sendResponseWithoutData(
          res,
          resCode.WENT_WRONG,
          resMessage.WENT_WRONG
        );
      } else {
        return await Response.sendResponseWithData(
          res,
          resCode.EVERYTHING_IS_OK,
          "Weekly days list.",
          daysResult
        );
      }
    });
};

module.exports = {
  add,get,
  getDays,addDays
};
