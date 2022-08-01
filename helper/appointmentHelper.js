const Appointment = require("../models/appointmentModel");
const Service = require("../models/serviceModel");
const TimeArray = [
  "9:00AM-10:00AM",
  "09:00AM-10:00AM",
  "10:15AM-11:15AM",
  "11:30AM-12:30PM",
  "12:45PM-1:45PM",
  "12:45PM-01:45PM",
  "2:00PM-3:00PM",
  "02:00PM-03:00PM",
  "3:15PM-4:15PM",
  "03:15PM-04:15PM",
  "4:30PM-5:30PM",
  ,
  "04:30PM-05:30PM",
  "5:45PM-6:45PM",
  "05:45PM-06:45PM",
  "7:00PM-8:00PM",
  "07:00PM-08:00PM",
];
const moment = require("moment");
const generalHelper = require("../helper/general");
const getServicePriceDetails = async (serviceId, priceId, appointmentType) => {
  var returnVariable = null;
  varappointmentTypeMode =
    appointmentType == "INITIAL"
      ? "initialConsultation"
      : "followUpAppointment";
  var priceDetail = await getServicePrice(serviceId, priceId, appointmentType);
  console.log("priceDetail", priceDetail);
  if (priceDetail && priceDetail.length > 0) {
    returnVariable = {
      priceTitle: priceDetail[0][varappointmentTypeMode].title,
    };

    var pricePromise = priceDetail[0][varappointmentTypeMode].priceDetails.map(
      async (p, px) => {
        if (p._id.equals(priceId)) {
          returnVariable = await { ...returnVariable, priceId: p._id };
          returnVariable = await { ...returnVariable, duration: p.duration };
          returnVariable = await { ...returnVariable, price: p.price };
        }
      }
    );
    priceD = await Promise.all(pricePromise);
  }

  // returnVariable = {...returnVariable,priceD}
  console.log("returnVariable", returnVariable);
  return await returnVariable;
};

const getServicePrice = async (serviceId, priceId, appointmentType) => {
  var query = { _id: serviceId };
  var select = {};
  select = { ...select, _id: 0 };
  if (appointmentType && appointmentType == "INITIAL") {
    query = { ...query, "initialConsultation.priceDetails._id": priceId };
    select = { ...select, "initialConsultation.title": 1 };
    select = { ...select, "initialConsultation.priceDetails": 1 };
  } else {
    select = { ...select, "followUpAppointment.title": 1 };
    select = { ...select, "followUpAppointment.priceDetails": 1 };
    query = { ...query, "followUpAppointment.priceDetails._id": priceId };
  }
  return await Service.find(query).select(select).exec();
};

const checkValidTime = async (Time) => {
  var returnVar = false;
  Time = generalHelper.stringToUpperCase(Time).replaceAll(" ", "");
  if (TimeArray.includes(Time)) returnVar = true;
  return returnVar;
};
const checkAvailability = async (AppointDate, Time) => {
  var returnVar = true;

  Time = await generalHelper.stringToUpperCase(Time).replaceAll(" ", "");
  var AppointDate = moment(new Date(AppointDate)).toISOString();
  var AppointDate2 = moment(new Date(AppointDate)).add(1, "days").toISOString();
  console.log("AppointDate", AppointDate, "AppointDate2", AppointDate2);
  appoinmentExist = await Appointment.find({
    appointmentDate: {
      //   $lte: AppointDate
      $gte: AppointDate,
      $lt: AppointDate2,
    },
    appointmentTime: Time,
  }).exec();
  console.log("appoinmentExist", appoinmentExist);
  if ((await appoinmentExist) && (await appoinmentExist.length) > 0)
    returnVar = await false;
  console.log(returnVar);
  return await returnVar;
};
const manageProviderSlot = async (appointment) => {
const groups = appointment.reduce((groups, appoint) => {    
    const date = moment(appoint.appointmentDate).format(moment.HTML5_FMT.DATE);
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push({appointmentTime:appoint.appointmentTime});
    return groups;
  }, {});  
  // Edit: to add it in the array format instead
  console.log('groups',groups);
  const groupArrays = Object.keys(groups).map((date) => {
    return {
      date,
      times: groups[date]
    };
  });
  return groupArrays;
};

const manageAvailbilityTime = async (appointment) => {
  const groups = appointment.reduce((groups, appoint) => {    
    console.log(appoint);
      const date = moment(appoint.from).format(moment.HTML5_FMT.DATE);
      if (!groups[date]) {
        groups[date] = [];
      }
      groups[date].push({to:appoint.to,from:appoint.from});
      return groups;
    }, {});  
    // Edit: to add it in the array format instead
    console.log('groups',groups);
    const groupArrays = Object.keys(groups).map((date) => {
      return {
        date,
        times: groups[date]
      };
    });
    return groupArrays;
  };

module.exports = {
  getServicePriceDetails,
  getServicePrice,
  checkValidTime,
  checkAvailability,
  manageProviderSlot,
  manageAvailbilityTime
};
