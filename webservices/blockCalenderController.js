const Response = require("../common_functions/response_handler");
const resCode = require("../helper/httpResponseCode");
const resMessage = require("../helper/httpResponseMessage");
const BlockCalender = require("../models/blockCalenderModel");
const BlockCalenderTime = require("../models/blockCalenderTimeModel");
const generalHelper = require("../helper/general");

const addTimeToblockCalender = async (blockCalenderId, blockCalenderTimeId) => {
  BlockCalender.findByIdAndUpdate(
    { _id: blockCalenderId },
    { $push: { time: blockCalenderTimeId } },
    { new: true }
  ).exec(async (e, r) => {
    console.log("err", e, "result", r);
  });
};

const dateBlockCalenderTime = (from, to) => {
  let dateArr = [];
  if (from) {
    from.map((value, index) => {
      dateObj = {};
      if (to[index]) {
        dateObj.to = to[index];
      } else {
        dateObj.to = null;
      }
      dateObj = { ...dateObj, from: value };
      dateArr.push(dateObj);
    });
  }
  return dateArr;
};

const add = async (req, res, next) => {
  const { provider, title, from, to,time } = req.body;
  //   var blockCalenderData = new BlockCalender({
  //     provider,
  //     title,
  //   });
  //   console.log("dateBlockCalenderTime", dateBlockCalenderTime(from, to));
  //   await blockCalenderData.save(
  await BlockCalender.findOneAndUpdate(
    { provider: provider },
    { provider, title ,time:[]},
    { new: true, upsert: true }
  ).exec(async (blockCalenderErr, blockCalenderResult) => {
    if (await blockCalenderErr) {
      return await Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        resMessage.WENT_WRONG
      );
    } else {
      var blockDateAndTime = await dateBlockCalenderTime(from, to);
      BlockCalenderTime.deleteMany({
        blockCalender: blockCalenderResult._id,
      }).exec();
      var blockDateAndTimePromise =
        //   blockDateAndTime &&
        //   blockDateAndTime.length > 0 &&
        blockDateAndTime.map(async (v, x) => {
          // new BlockCalenderTime())
          try {
            let blockCalenderTime = new BlockCalenderTime({
              provider: provider,
              blockCalender: blockCalenderResult._id,
              from: v.from,
              to: v.to,
            });
            await blockCalenderTime.save(
              async (blockCalenderTimeErr, blockCalenderTimeResult) => {
                if (await blockCalenderTimeResult) {                  
                  await addTimeToblockCalender(
                    blockCalenderResult._id,
                    blockCalenderTimeResult._id
                  );
                }
              }
            );
          } catch (err) {
            console.log("err of block calender time", err);
          }
        });
      Promise.all(blockDateAndTimePromise);
      return await Response.sendResponseWithData(
        res,
        resCode.EVERYTHING_IS_OK,
        "Block calender add successfully.",
        blockCalenderResult
      );
    }
  });
};

const getBlockCalender = async (req, res, next) => {
  if (!req.body.provider)
    return await Response.sendResponseWithData(
      res,
      resCode.WENT_WRONG,
      "Please enter service provider id."
    );
  BlockCalender.find()
  .populate("time","from to")
  .exec(async (blockCalenderErr, blockCalenderResult) => {
    if (blockCalenderErr)
      return await Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        resMessage.WENT_WRONG
      );
    else
      return await Response.sendResponseWithData(
        res,
        resCode.EVERYTHING_IS_OK,
        "Block calender get successfully.",
        blockCalenderResult
      );
  });
};

module.exports = {
  add,
  getBlockCalender,
};
