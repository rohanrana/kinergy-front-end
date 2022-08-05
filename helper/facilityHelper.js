const fs = require("fs");
var slugifire = require("slugify");
const moment = require("moment");
const schedulCalender = require("../models/timeScheduleModel");
const Speciality = require("../models/specialityModel");

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
        {
          name: weekday[i],
          type: "wday",
          provider: provider,
          available: 1,
          intervals: [
            {
              from: "09:00",
              to: "17:00",
            },
          ],
        },
        { new: true, upsert: true }
      )
      .exec();
  }
};

const syncSpeciality = async (specialities) => {
  if (! await specialities && specialities != "") return  await  null;
  if (! await  Array.isArray(specialities)) specialities = specialities.toString().split(",");
  console.log('rowArr',specialities);
  var specialityPromise = specialities && specialities.length > 0 && specialities.map(async(s,x)=>{
   let speciality = await Speciality.findOneAndUpdate({name:s},{name:s},{new:true,upsert:true}).lean().exec();
   console.log('speciality',speciality);
   if(speciality) return await speciality._id;
  })
  return await Promise.all(specialityPromise);
};
module.exports = {
  addInterval,
  syncSpeciality,
};
