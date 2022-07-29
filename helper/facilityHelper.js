const fs = require("fs");
var slugifire = require("slugify");
const moment = require("moment");
const schedulCalender = require("../models/timeScheduleModel");

const addInterval = async (provider) => {
  var weekday = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  var days = 7;
  for (let i = 1; i <= days; i++) {
    await schedulCalender
      .findOneAndUpdate(
        { name: weekday[i], type: "wday", provider: provider },
        { name: weekday[i], type: "wday", provider: provider, available: 1 ,intervals: [
            {
                "from": "09:00",
                "to": "17:00"
            }
        ]},
        { new: true, upsert: true }
      )
      .exec();
  }
};
module.exports = {
  addInterval,
};
