const Response = require("../common_functions/response_handler");
const resCode = require("../helper/httpResponseCode");
const resMessage = require("../helper/httpResponseMessage");
const AvailabilityCalender = require("../models/availabilityCalenderModel");
const AvailabilityCalenderTime = require("../models/availabilityCalenderTimeModel");
const generalHelper = require("../helper/general");
const appointmentHelper = require("../helper/appointmentHelper");
const addTimeToavailabilityCalender = async (
  availabilityCalenderId,
  availabilityCalenderTimeId
) => {
  AvailabilityCalender.findByIdAndUpdate(
    { _id: availabilityCalenderId },
    { $push: { time: availabilityCalenderTimeId } },
    { new: true }
  ).exec(async (e, r) => {
    console.log("err", e, "result", r);
  });
};

const dateAvailabilityCalenderTime = (from, to) => {
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
  const { provider, title, from, to, time } = req.body;
  await AvailabilityCalender.findOneAndUpdate(
    { provider: provider },
    { provider, title, time: [] },
    { new: true, upsert: true }
  ).exec(async (availabilityCalenderErr, availabilityCalenderResult) => {
    if (await availabilityCalenderErr) {
      return await Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        resMessage.WENT_WRONG
      );
    } else {
      var availabilityDateAndTime = await dateAvailabilityCalenderTime(
        from,
        to
      );
      AvailabilityCalenderTime.deleteMany({
        availabilityCalender: availabilityCalenderResult._id,
      }).exec();
      var availabilityDateAndTimePromise =
        //   availabilityDateAndTime &&
        //   availabilityDateAndTime.length > 0 &&
        availabilityDateAndTime.map(async (v, x) => {
          // new AvailabilityCalenderTime())
          try {
            let availabilityCalenderTime = new AvailabilityCalenderTime({
              provider: provider,
              availabilityCalender: availabilityCalenderResult._id,
              from: v.from,
              to: v.to,
            });
            await availabilityCalenderTime.save(
              async (
                availabilityCalenderTimeErr,
                availabilityCalenderTimeResult
              ) => {
                if (await availabilityCalenderTimeResult) {
                  await addTimeToavailabilityCalender(
                    availabilityCalenderResult._id,
                    availabilityCalenderTimeResult._id
                  );
                }
              }
            );
          } catch (err) {
            console.log("err of availability calender time", err);
          }
        });
      Promise.all(availabilityDateAndTimePromise);
      return await Response.sendResponseWithData(
        res,
        resCode.EVERYTHING_IS_OK,
        "Availability calender add successfully.",
        availabilityCalenderResult
      );
    }
  });
};

const get = async (req, res, next) => {
  if (!req.body.provider)
    return await Response.sendResponseWithData(
      res,
      resCode.WENT_WRONG,
      "Please enter service provider id."
    );
  AvailabilityCalender.find({ provider: { $exists: true, $ne: null } })
    .populate({
      path: "time",
      select: "from to",
      match: { from: { $gte: new Date() } },
    })
    .exec(async (availabilityCalenderErr, availabilityCalenderResult) => {
      if (availabilityCalenderErr)
        return await Response.sendResponseWithoutData(
          res,
          resCode.WENT_WRONG,
          resMessage.WENT_WRONG
        );
      else {
        console.log("availabilityCalenderResult", availabilityCalenderResult);
        var availabilityCalenderFinalResult =
          await appointmentHelper.manageAvailbilityTime(
            availabilityCalenderResult[0].time
          );
        console.log(
          "availabilityCalenderFinalResult",
          availabilityCalenderFinalResult
        );
        return await Response.sendResponseWithData(
          res,
          resCode.EVERYTHING_IS_OK,
          "Availability calender get successfully.",
          availabilityCalenderFinalResult
        );
      }
    });
};
const getByDate = async (req, res, next) => {
  if (!req.body.provider)
    return await Response.sendResponseWithData(
      res,
      resCode.WENT_WRONG,
      "Please enter service provider id."
    );

  if (!req.body.date)
    return await Response.sendResponseWithData(
      res,
      resCode.WENT_WRONG,
      "Please enter date."
    );
  if (!(await generalHelper.dateIsValid(req.body.date)))
    return await Response.sendResponseWithData(
      res,
      resCode.WENT_WRONG,
      "Please enter valid date."
    );
  var date1 = new Date(req.body.date);
  var date2 = new Date(req.body.date);
  date2.setDate(date2.getDate() + 1);

  console.log("1", date1);
  console.log("2", date2);

  AvailabilityCalender.find({ provider: { $exists: true, $ne: null } })
    .populate({
      path: "time",
      select: "from to",
      match: { from: { $gte: date1, $lt: date2 } },
    })
    .exec(async (availabilityCalenderErr, availabilityCalenderResult) => {
      if (availabilityCalenderErr)
        return await Response.sendResponseWithoutData(
          res,
          resCode.WENT_WRONG,
          resMessage.WENT_WRONG
        );
      else {
        console.log("availabilityCalenderResult", availabilityCalenderResult);
        var availabilityCalenderFinalResult =
          await appointmentHelper.manageAvailbilityTime(
            availabilityCalenderResult[0].time
          );
        console.log(
          "availabilityCalenderFinalResult",
          availabilityCalenderFinalResult
        );
        if (
          !availabilityCalenderFinalResult ||
          availabilityCalenderFinalResult.length == 0
        ) {
          return await Response.sendResponseWithData(
            res,
            resCode.EVERYTHING_IS_OK,
            "No availability found.",
            availabilityCalenderFinalResult
          );
        }
        return await Response.sendResponseWithData(
          res,
          resCode.EVERYTHING_IS_OK,
          "Availability calender get successfully.",
          availabilityCalenderFinalResult
        );
      }
    });
};

module.exports = {
  add,
  get,
  getByDate,
};
