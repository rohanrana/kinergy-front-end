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
    "thrusday",
    "friday",
    "saturday",
  ];
  var days = 7;
  for (let i = 1; i < days; i++) {
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


const scheduleCalenderAvailability = (provider, rules)=>{
  console.log('rules',rules);
  provider && rules && typeof rules != 'string'  && rules.length > 0 && rules.map(async (SDAY,SDAYX)=>{
    if(SDAY.name && SDAY.name != "" && SDAY.name != null){ 
    var name = SDAY.name;
    var type = SDAY.type;
    var intervals = SDAY.intervals;    
    available = intervals && intervals.length > 0 ? 1 : 0;
    console.log('name',name)
   
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
        console.log('schedulCalenderErr',schedulCalenderErr,' schedulCalenderResult', schedulCalenderResult);    
      });
    }
  })
}

const getSchedulerCalender = async (provider)=>{
  return await schedulCalender
  .find({provider:provider}).select("name available intervals")
  .exec();
}
module.exports = {
  addInterval,getSchedulerCalender,
  syncSpeciality,scheduleCalenderAvailability
};
