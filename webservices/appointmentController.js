const Response = require("../common_functions/response_handler");
const resCode = require("../helper/httpResponseCode");
const resMessage = require("../helper/httpResponseMessage");
const Appointment = require("../models/appointmentModel");
const Service = require("../models/serviceModel");
const mongoose = require("mongoose");
const generalHelper = require("../helper/general");
const appointmentHelper = require("../helper/appointmentHelper");
var mongodb = require("mongodb");
var objectid = mongodb.ObjectID;
const couponHelper = require("../helper/couponHelper");
const moment = require("moment");
const returnPagination = (result) => {
  delete result.docs;
  return result;
};

const book = (req, res, next) => {
  console.log(req.body);
  const {
    provider,
    appointmentType,
    servicePrice,
    appointmentDate,
    appointmentTime,
    spentTime,
    serviceType,
    service,
    staff,
    customer,
    status,
    location,
    department,
    coupon,
    amount,
    taxAmount,
    discountAmount,
    totalAmount,
    serviceDuration,
    serviceAmount,
  } = req.body;
  const appointment = new Appointment({
    spentTime,
    serviceType,
    staff,
    status: generalHelper.stringToUpperCase(status),
    location,
    department,
    appointmentType: appointmentType,
    service: service,
    servicePrice: servicePrice,
    appointmentDate: generalHelper.dateFormat(appointmentDate),
    appointmentTime: appointmentTime,
    customer: customer,
    provider: provider,
    status: generalHelper.stringToUpperCase(status),
    couponApplied: coupon && coupon._id ? 1 : 0,
    coupon: coupon,
    amount: amount,
    taxAmount: taxAmount,
    discountAmount: discountAmount,
    totalAmount: totalAmount,
    serviceDuration,
    serviceAmount,
  });
  console.log("appointment", appointment);

  appointment.save((err, result) => {
    console.log(err, result);
    couponHelper.couponHit(coupon._id);
    if (!err)
      Response.sendResponseWithData(
        res,
        resCode.EVERYTHING_IS_OK,
        resMessage.APPOINTMENT + resMessage.SAVED_SUCCESSFULLY,
        result
      );
    else {
      console.log(err);
      Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        resMessage.WENT_WRONG
      );
    }
  });
};

const customerBooking = (req, res, next) => {
    console.log(req.body);
    const {
      appointmentType,
      servicePrice,
      appointmentDate,
      appointmentTime,
      provider,
      spentTime,
      service,
      staff,
      customer,
      status,
      location,
      department,
      coupon,
      amount,
      taxAmount,
      discountAmount,
      totalAmount,
      serviceDuration,
      serviceAmount,
    } = req.body;
    const appointment = new Appointment({
      appointmentType: appointmentType,
      service: service,
      servicePrice: servicePrice,
      appointmentDate: generalHelper.dateFormat(appointmentDate),
      appointmentTime: appointmentTime,
      customer: customer,
      provider: provider,
      status: generalHelper.stringToUpperCase(status),
      couponApplied: coupon && coupon._id ? 1 : 0,
      coupon: coupon,
      amount: amount,
      taxAmount: taxAmount,
      discountAmount: discountAmount,
      totalAmount: totalAmount,
      serviceDuration,
      serviceAmount,
    });

    console.log("appointment", appointment);

    appointment.save((err, result) => {
      console.log(err, result);
      if (!err) {
        couponHelper.couponHit(coupon._id);
        Response.sendResponseWithData(
          res,
          resCode.EVERYTHING_IS_OK,
          resMessage.APPOINTMENT + resMessage.SAVED_SUCCESSFULLY,
          result
        );
      } else {
        console.log(err);
        Response.sendResponseWithoutData(
          res,
          resCode.WENT_WRONG,
          resMessage.WENT_WRONG
        );
      }
    });
  }
const bookingAppointmentSomeOneElse = (req, res, next) => {
    console.log(req.body);
    const {
      appointmentType,
      appointmentFor,
      servicePrice,
      appointmentDate,
      appointmentTime,
      provider,
      spentTime,
      service,
      staff,
      customer,
      status,
      location,
      department,
      coupon,
      amount,
      taxAmount,
      discountAmount,
      totalAmount,
      serviceDuration,
      serviceAmount,
    } = req.body;
    const appointment = new Appointment({
      appointmentType: appointmentType,
      appointmentFor:appointmentFor,
      service: service,
      servicePrice: servicePrice,
      appointmentDate: generalHelper.dateFormat(appointmentDate),
      appointmentTime: appointmentTime,
      customer: customer,
      provider: provider,
      status: generalHelper.stringToUpperCase(status),
      couponApplied: coupon && coupon._id ? 1 : 0,
      coupon: coupon,
      amount: amount,
      taxAmount: taxAmount,
      discountAmount: discountAmount,
      totalAmount: totalAmount,
      serviceDuration,
      serviceAmount,
    });

    console.log("appointment", appointment);

    appointment.save((err, result) => {
      console.log(err, result);
      if (!err) {
        couponHelper.couponHit(coupon._id);
        Response.sendResponseWithData(
          res,
          resCode.EVERYTHING_IS_OK,
          resMessage.APPOINTMENT + resMessage.SAVED_SUCCESSFULLY,
          result
        );
      } else {
        console.log(err);
        Response.sendResponseWithoutData(
          res,
          resCode.WENT_WRONG,
          resMessage.WENT_WRONG
        );
      }
    });
  }
  const followUpBooking = (req, res, next) => {
    console.log(req.body);
    const {
      appointmentType,
      servicePrice,
      appointmentDate,
      appointmentTime,
      provider,
      spentTime,
      service,
      staff,
      customer,
      status,
      location,
      department,
      coupon,
      amount,
      caseId,
      taxAmount,
      discountAmount,
      totalAmount,
      serviceDuration,
      serviceAmount,
    } = req.body;
    const appointment = new Appointment({
      case:caseId,
      appointmentType: appointmentType,
      service: service,
      servicePrice: servicePrice,
      appointmentDate: generalHelper.dateFormat(appointmentDate),
      appointmentTime: appointmentTime,
      customer: customer,
      provider: provider,
      status: generalHelper.stringToUpperCase(status),
      couponApplied: coupon && coupon._id ? 1 : 0,
      coupon: coupon,
      amount: amount,
      taxAmount: taxAmount,
      discountAmount: discountAmount,
      totalAmount: totalAmount,
      serviceDuration,
      serviceAmount,
    });

    console.log("appointment", appointment);

    appointment.save((err, result) => {
      console.log(err, result);
      if (!err) {
        couponHelper.couponHit(coupon._id);
        Response.sendResponseWithData(
          res,
          resCode.EVERYTHING_IS_OK,
          resMessage.APPOINTMENT + resMessage.SAVED_SUCCESSFULLY,
          result
        );
      } else {
        console.log(err);
        Response.sendResponseWithoutData(
          res,
          resCode.WENT_WRONG,
          resMessage.WENT_WRONG
        );
      }
    });
  },


  edit = (req, res, next) => {
    console.log(Appointment.STATUS);
    if (!req.body._id) {
      Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        "Please Enter Appointment Id."
      );
    } else {
      const {
        provider,
        servicePrice,
        appointmentType,
        appointmentDate,
        appointmentTime,
        spentTime,
        serviceType,
        service,
        staff,
        customer,
        status,
        location,
        department,
      } = req.body;
      const editData = {
        appointmentType: appointmentType,
        service: service,
        servicePrice: servicePrice,
        appointmentDate: generalHelper.dateFormat(appointmentDate),
        appointmentTime: appointmentTime,
        customer: customer,
        provider: provider,
        status: generalHelper.stringToUpperCase(status),
        staff,
        location,
        department,
      };
      Appointment.findOneAndUpdate({ _id: req.body._id }, editData, {
        new: true,
      })
        .lean()
        .exec((err, result) => {
          if (!err) {
            Response.sendResponseWithData(
              res,
              resCode.EVERYTHING_IS_OK,
              "Appointment Update Successfully.",
              result
            );
          } else {
            console.log(err);
            Response.sendResponseWithoutData(
              res,
              resCode.WENT_WRONG,
              resMessage.WENT_WRONG
            );
          }
        });
    }
  };
const getList = (req, res, next) => {
  const perPage = 10,
    page =
      req.body.page != "undefined" && req.body.page
        ? Math.max(0, req.body.page)
        : 1;
  var customer = {
    path: "customer",
    select: {
      _id: 1,
      firstName: 1,
      lastName: 1,
      contact: 1,
      email: 1,
      type: 1,
      address: 1,
    },
  };
  var staff = {
    path: "staff",
    select: {
      _id: 1,
      firstName: 1,
      lastName: 1,
      contact: 1,
      email: 1,
      type: 1,
      address: 1,
    },
  };
  var options = {
    populate: [staff, customer],
    lean: true,
    limit: perPage,
    page: page,
  };

  Appointment.paginate({}, options, function (err, result) {
    console.log("error", err);
    if (err)
      Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        resMessage.WENT_WRONG
      );
    else if (!result || result.docs.length == 0)
      Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        "Appointment Not Found."
      );
    // Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, 'Appointment List .', result);
    else
      Response.sendResponseWithPagination(
        res,
        resCode.EVERYTHING_IS_OK,
        "Appointment List.",
        result.docs,
        returnPagination(result)
      );
  });
};
const appointmentById = (req, res, next) => {
  if (!req.body._id) {
    Response.sendResponseWithoutData(
      res,
      resCode.WENT_WRONG,
      "Please Enter Appointment Id."
    );
  } else {
    Appointment.find({ _id: req.body._id })
      .populate({ path: "customer", select: "_id firstName lastName email" })
      .populate({ path: "staff", select: "_id firstName lastName email" })
      .lean()
      .exec((err, result) => {
        // console.log(result.length);
        if (err)
          Response.sendResponseWithoutData(
            res,
            resCode.WENT_WRONG,
            resMessage.WENT_WRONG
          );
        else if (!result || result.length == 0)
          Response.sendResponseWithoutData(
            res,
            resCode.WENT_WRONG,
            "Appointment Not Found."
          );
        else
          Response.sendResponseWithData(
            res,
            resCode.EVERYTHING_IS_OK,
            "Appointment Found Successfully.",
            result
          );
      });
  }
};
const appointmentByCustomerId = (req, res, next) => {
  if (!req.body._id) {
    Response.sendResponseWithoutData(
      res,
      resCode.WENT_WRONG,
      "Please Enter Customer Id."
    );
  } else {
    const perPage = 10,
      page =
        req.params.page != "undefined" && req.params.page
          ? Math.max(0, req.params.page)
          : 1;
    var customer = {
      path: "customer",
      select: {
        _id: 1,
        firstName: 1,
        lastName: 1,
        contact: 1,
        email: 1,
        type: 1,
        address: 1,
      },
    };
    var staff = {
      path: "staff",
      select: {
        _id: 1,
        firstName: 1,
        lastName: 1,
        contact: 1,
        email: 1,
        type: 1,
        address: 1,
      },
    };
    var options = {
      populate: customer,
      populate: [staff, customer],
      lean: true,
      limit: perPage,
      page: page,
    };

    Appointment.paginate(
      { customer: req.body._id },
      options,
      function (err, result) {
        if (err)
          Response.sendResponseWithoutData(
            res,
            resCode.WENT_WRONG,
            resMessage.WENT_WRONG
          );
        else if (!result || result.docs.length == 0)
          Response.sendResponseWithoutData(
            res,
            resCode.WENT_WRONG,
            "Customer Appointment Not Found."
          );
        // Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, 'Customer Appointment Found Successfully.', result);
        else
          Response.sendResponseWithPagination(
            res,
            resCode.EVERYTHING_IS_OK,
            "Customer Appointment Found Successfully.",
            result.docs,
            returnPagination(result)
          );
      }
    );
  }
};
const appointmentByStaffId = (req, res, next) => {
  if (!req.body._id) {
    Response.sendResponseWithoutData(
      res,
      resCode.WENT_WRONG,
      "Please Enter Staff Id."
    );
  } else {
    const perPage = 10,
      page =
        req.params.page != "undefined" && req.params.page
          ? Math.max(0, req.params.page)
          : 1;
    var customer = {
      path: "customer",
      select: {
        _id: 1,
        firstName: 1,
        lastName: 1,
        contact: 1,
        email: 1,
        type: 1,
        address: 1,
      },
    };
    var staff = {
      path: "staff",
      select: {
        _id: 1,
        firstName: 1,
        lastName: 1,
        contact: 1,
        email: 1,
        type: 1,
        address: 1,
      },
    };
    var options = {
      populate: customer,
      populate: [staff, customer],
      lean: true,
      limit: perPage,
      page: page,
    };

    Appointment.paginate(
      { staff: req.body._id },
      options,
      function (err, result) {
        // Appointment.find({ staff: req.body._id }).populate('customer').populate("staff").lean().exec((err, result) => {
        console.log(result, err);
        if (err)
          Response.sendResponseWithoutData(
            res,
            resCode.WENT_WRONG,
            resMessage.WENT_WRONG
          );
        else if (!result.docs || result.docs.length == 0)
          Response.sendResponseWithoutData(
            res,
            resCode.WENT_WRONG,
            "Staff Appointment Not Found."
          );
        // Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, 'Staff Appointment Found Successfully.', result);
        else
          Response.sendResponseWithPagination(
            res,
            resCode.EVERYTHING_IS_OK,
            "Staff Appointment Found Successfully.",
            result.docs,
            returnPagination(result)
          );
      }
    );
  }
};
const deleteAppointment = (req, res) => {
  if (!req.body._id) {
    Response.sendResponseWithoutData(
      res,
      resCode.WENT_WRONG,
      "Please Enter Appointment Id"
    );
  } else {
    Appointment.findOneAndDelete({ _id: req.body._id })
      .lean()
      .exec((err, result) => {
        if (!err) {
          Response.sendResponseWithData(
            res,
            resCode.EVERYTHING_IS_OK,
            "Appointment Deleted Successfully",
            result
          );
        } else {
          console.log(err);
          Response.sendResponseWithoutData(
            res,
            resCode.WENT_WRONG,
            resMessage.WENT_WRONG
          );
        }
      });
  }
};
const changeStatus = (req, res, next) => {
  if (!req.body._id) {
    Response.sendResponseWithoutData(
      res,
      resCode.WENT_WRONG,
      "Please Enter Appointment Id"
    );
  } else if (!req.body.status) {
    Response.sendResponseWithoutData(
      res,
      resCode.WENT_WRONG,
      "Please Enter Appointment Status"
    );
  } else {
    Appointment.findOneAndUpdate(
      { _id: req.body._id },
      { status: req.body.status.toUpperCase() },
      { new: true }
    )
      .lean()
      .exec((err, result) => {
        if (!err) {
          Response.sendResponseWithData(
            res,
            resCode.EVERYTHING_IS_OK,
            "Appointment Status Changed Successfully.",
            result
          );
        } else
          Response.sendResponseWithoutData(
            res,
            resCode.WENT_WRONG,
            resMessage.WENT_WRONG
          );
      });
  }
};
// const getServicePrice = async (serviceId,priceId,appointmentType)=>{
//         var query = { _id:serviceId };
//         var select = {};
//         select = {...select,"_id":0};
//         if(appointmentType && appointmentType == "INITIAL"){
//             query = {...query,"initialConsultation.priceDetails._id":priceId};
//             select = {...select,"initialConsultation.title":1};
//             select = {...select,"initialConsultation.priceDetails":1};
//         }else{
//             select = {...select,"followUpAppointment.title":1};
//             select = {...select,"followUpAppointment.priceDetails":1};
//             query = {...query,"followUpAppointment.priceDetails._id":priceId};
//         }
//     return await Service.find(query).select(select).exec();
// }
// const getServicePriceDetails = async(serviceId,priceId,appointmentType)=>{
//     var returnVariable = null;
//     varappointmentTypeMode = appointmentType == "INITIAL"?"initialConsultation":"followUpAppointment";
//         var priceDetail = await getServicePrice(serviceId,priceId,appointmentType);
//         if(priceDetail && priceDetail.length > 0){
//             returnVariable = {
//                 priceTitle:priceDetail[0][varappointmentTypeMode].title
//             }
//             var pricePromise = priceDetail[0][varappointmentTypeMode].priceDetails.map(async (p,px)=>{

//                 if(p._id.equals(priceId)){
//                     returnVariable = await {...returnVariable,priceId:p._id};
//                     returnVariable = await{...returnVariable,duration:p.duration};
//                     returnVariable = await{...returnVariable,price:p.price};
//                 }

//             })
//         }
//         priceD = await Promise.all(pricePromise);
//         // returnVariable = {...returnVariable,priceD}
//         console.log('returnVariable',returnVariable);
//         return await returnVariable;
// }

const getAppointmentDetail = async (req, res) => {
  var ID = await req.body._id;
  if (!ID) {
    return await Response.sendResponseWithoutData(
      res,
      resCode.WENT_WRONG,
      "Please Enter Appointment Id."
    );
  } else if (!objectid.isValid(ID)) {
    return await Response.sendResponseWithoutData(
      res,
      resCode.WENT_WRONG,
      "Please Enter Valid Appointment Id."
    );
  } else {
    await Appointment.find({ _id: req.body._id })
      .populate(
        "customer",
        "_id firstName lastName address profilePic email status gender customerType phone"
      )
      .populate({
        path: "service",
        select: {
          initialConsultation: 0,
          followUpAppointment: 0,
          parentService: 0,
          serviceType: 0,
          haveSubService: 0,
          subService: 0,
          insuranceApplicable: 0,
          addBy: 0,
          __v: 0,
          providers: 0,
        },
      })
      .populate(
        "staff",
        "_id firstName lastName address profilePic email status gender "
      )
      .populate("provider")
      .populate("department")
      .exec(async (err, result) => {
        console.log(err, result);
        if (err)
          Response.sendResponseWithoutData(
            res,
            resCode.WENT_WRONG,
            resMessage.WENT_WRONG
          );
        else if (!result || result.length == 0 || result == [])
          Response.sendResponseWithoutData(
            res,
            resCode.WENT_WRONG,
            "Appointment Not Found."
          );
        else {
          var appointmentArr = [];
          var appointmentPromice = await result.map(async (a, ax) => {
            let obj = {};
            obj = await {
              _id: a._id,
              service: a.service,
              servicePrice: await appointmentHelper.getServicePriceDetails(
                a.service,
                a.servicePrice,
                a.appointmentType
              ),
              appointmentType: a.appointmentType,
              serviceType: a.serviceType,
              appointmentDate: a.appointmentDate,
              appointmentTime: a.appointmentTime,
              customer: a.customer,
              staff: a.staff,
              provider: a.provider,
              department: a.department,
              case: a.case,
              location: a.location,
              spentTime: a.spentTime,
              status: a.status,
              createdAt: a.createdAt,
              updatedAt: a.updatedAt,
            };
            return await obj;
          });

          appointmentArr = await Promise.all(appointmentPromice);
          // console.log('appointmentPromice',appointmentArr);
          return await Response.sendResponseWithData(
            res,
            resCode.EVERYTHING_IS_OK,
            "Appointment Found Successfully.",
            appointmentArr
          );
        }
      });
  }
};

module.exports = {
  book,
  customerBooking,
  edit,
  getList,
  appointmentById,
  appointmentByCustomerId,
  appointmentByStaffId,
  deleteAppointment,
  changeStatus,
  getAppointmentDetail,
  followUpBooking
};
