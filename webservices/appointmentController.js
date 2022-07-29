const Response = require("../common_functions/response_handler");
const resCode = require("../helper/httpResponseCode");
const resMessage = require("../helper/httpResponseMessage");
const Appointment = require("../models/appointmentModel");
const Waiver = require("../models/waiverModel");
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
const perPage = 10;
const path = require("path");
const fs = require("fs");
const multer = require("multer");
const maxSize = 1 * 1024 * 1024;

const book = async (req, res, next) => {
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
  
  // if(! await appointmentHelper.checkValidTime(appointmentTime)) return await Response.sendResponseWithoutData(res,resCode.WENT_WRONG,"Enter valid time format.");
  if(! await appointmentHelper.checkAvailability(appointmentDate,appointmentTime)) return Response.sendResponseWithoutData(res,resCode.WENT_WRONG,"Slot is already booked.Please choose another slot."); 

  const appointment = new Appointment({
    spentTime,
    serviceType,
    staff,
    status: await generalHelper.stringToUpperCase(status),
    location,
    department,
    appointmentType: appointmentType,
    service: service,
    servicePrice: servicePrice,
    appointmentDate: await generalHelper.dateFormat(appointmentDate),
    appointmentTime: await generalHelper.stringToUpperCase(appointmentTime).replaceAll(' ', ''),
    customer: customer,
    provider: provider,
    status: await generalHelper.stringToUpperCase(status),
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

  appointment.save(async(err, result) => {
    console.log(err, result);
    await couponHelper.couponHit(coupon._id);
    if (!err)
    await Response.sendResponseWithData(
        res,
        resCode.EVERYTHING_IS_OK,
        resMessage.APPOINTMENT + resMessage.SAVED_SUCCESSFULLY,
        result
      );
    else {
      console.log(err);
      await Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        resMessage.WENT_WRONG
      );
    }
  });
};

const customerBooking = async (req, res, next) => {

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
    refCustomer,
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
  // if(! await appointmentHelper.checkValidTime(appointmentTime)) return await Response.sendResponseWithoutData(res,resCode.WENT_WRONG,"Enter valid time format.");
  if(! await appointmentHelper.checkAvailability(appointmentDate,appointmentTime)) return Response.sendResponseWithoutData(res,resCode.WENT_WRONG,"Slot is already booked.Please choose another slot.");

  const appointment = new Appointment({
    appointmentType: appointmentType,
    appointmentFor:appointmentFor,
    service: service,
    servicePrice: servicePrice,
    appointmentDate: await generalHelper.dateFormat(appointmentDate),
    appointmentTime: await generalHelper.stringToUpperCase(appointmentTime).replaceAll(' ', ''),
    customer: customer,
    refCustomer:refCustomer,
    provider: provider,
    status: await generalHelper.stringToUpperCase(status),
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

  await appointment.save( async (err, result) => {
    console.log(err, result);
    if (!err) {
       await  couponHelper.couponHit(coupon._id);
      return await  Response.sendResponseWithData(
        res,
        resCode.EVERYTHING_IS_OK,
        resMessage.APPOINTMENT + resMessage.SAVED_SUCCESSFULLY,
        result
      );
    } else {
      console.log(err);
      return await  Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        resMessage.WENT_WRONG
      );
    }
  });
};

const bookingAppointmentSomeOneElse = async (req, res, next) => {
  console.log(req.body);
  const {
    appointmentType,
    appointmentFor,
    refCustomer,
    service,
    servicePrice,
    serviceDuration,
    serviceAmount,
    appointmentDate,
    appointmentTime,
    provider,
    spentTime,
    staff,
    customer,
    status,
    location,
    department,
    amount,
    taxAmount,
    discountAmount,
    totalAmount,
    files,
    waiverAndReleaseOfLiabilityAuthorizedDate,
    waiverAndReleaseOfLiabilityAuthorizedRepresentative,
    waiverAndReleaseOfLiabilityIamAuthorized,
    waiverAndReleaseOfLiabilityNeedSign,
    waiverAndReleaseOfLiabilityValidFor,
    couponId,
    couponTitle,
    couponCode,
    couponType,
    couponValue,
  } = req.body;
  
  // if(! await appointmentHelper.checkValidTime(appointmentTime)) return await Response.sendResponseWithoutData(res,resCode.WENT_WRONG,"Enter valid time format.");
  if(! await appointmentHelper.checkAvailability(appointmentDate,appointmentTime)) return Response.sendResponseWithoutData(res,resCode.WENT_WRONG,"Slot is already booked.Please choose another slot.");

  const appointment = new Appointment({
    appointmentType: appointmentType,
    appointmentFor: appointmentFor,
    service: service,
    servicePrice: servicePrice,
    appointmentDate: await generalHelper.dateFormat(appointmentDate),
    appointmentTime:await generalHelper.stringToUpperCase(appointmentTime).replaceAll(' ', ''),
    customer: customer,
    refCustomer: refCustomer,
    provider: provider,
    status: await generalHelper.stringToUpperCase(status),
    couponApplied: couponId ? 1 : 0,
    coupon: {
      _id: couponId,
      title: couponTitle,
      couponCode: couponCode,
      couponType: couponType,
      value: couponValue,
    },
    amount: amount,
    taxAmount: taxAmount,
    discountAmount: discountAmount,
    totalAmount: totalAmount,
    serviceDuration,
    serviceAmount,
  });

  console.log("appointment", appointment);

  await appointment.save( async(err, result) => {
    console.log(err, result);
    if (!err) {
      await couponHelper.couponHit(couponId);
      waiver = new Waiver({
        appointment: result._id,
        authorizedRepresentativeName:
          waiverAndReleaseOfLiabilityAuthorizedRepresentative,
        date: waiverAndReleaseOfLiabilityAuthorizedDate,
        validFor: waiverAndReleaseOfLiabilityValidFor,
        iamAuthorized: waiverAndReleaseOfLiabilityIamAuthorized,
        needSign: waiverAndReleaseOfLiabilityNeedSign,
        signature: files && files.length > 0 ? files[0].fileName : null,
      });
      await waiver.save( async(waiverErr, waiverResult) => {
        console.log("waiverSave Err", waiverErr);
        console.log("waiverSave Success", waiverResult);
      });
      await Response.sendResponseWithData(
        res,
        resCode.EVERYTHING_IS_OK,
        resMessage.APPOINTMENT + resMessage.SAVED_SUCCESSFULLY,
        result
      );
    } else {
      // console.log(err);

      await Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        resMessage.WENT_WRONG
      );
    }
  });
};
const bookingAppointmentMySelf = async (req, res, next) => {
  console.log(req.body);
  const {
    appointmentType,
    appointmentFor,
    service,
    servicePrice,
    serviceDuration,
    serviceAmount,
    appointmentDate,
    appointmentTime,
    provider,
    spentTime,
    staff,
    customer,
    status,
    location,
    department,
    amount,
    taxAmount,
    discountAmount,
    totalAmount,
    files,
    waiverAndReleaseOfLiabilityAuthorizedDate,
    waiverAndReleaseOfLiabilityAuthorizedRepresentative,
    waiverAndReleaseOfLiabilityIamAuthorized,
    waiverAndReleaseOfLiabilityNeedSign,
    waiverAndReleaseOfLiabilityValidFor,
    couponId,
    couponTitle,
    couponCode,
    couponType,
    couponValue,
  } = req.body;
  
  // if(! await appointmentHelper.checkValidTime(appointmentTime)) return await Response.sendResponseWithoutData(res,resCode.WENT_WRONG,"Enter valid time format.");
  if(! await appointmentHelper.checkAvailability(appointmentDate,appointmentTime)) return Response.sendResponseWithoutData(res,resCode.WENT_WRONG,"Slot is already booked.Please choose another slot.");

  const appointment = new Appointment({
    appointmentType: appointmentType,
    appointmentFor: appointmentFor,
    service: service,
    servicePrice: servicePrice,
    appointmentDate:await generalHelper.dateFormat(appointmentDate),
    appointmentTime: appointmentTime,
    customer: customer,
    provider: provider,
    status: await generalHelper.stringToUpperCase(status),
    couponApplied: couponId ? 1 : 0,
    coupon: {
      _id: couponId,
      title: couponTitle,
      couponCode: couponCode,
      couponType: couponType,
      value: couponValue,
    },
    amount: amount,
    taxAmount: taxAmount,
    discountAmount: discountAmount,
    totalAmount: totalAmount,
    serviceDuration,
    serviceAmount,
  });

  console.log("appointment", appointment);

  await appointment.save(async(err, result) => {
    console.log(err, result);
    if (!err) {
      await couponHelper.couponHit(couponId);
      waiver = new Waiver({
        appointment: result._id,
        authorizedRepresentativeName:
          waiverAndReleaseOfLiabilityAuthorizedRepresentative,
        date: waiverAndReleaseOfLiabilityAuthorizedDate,
        validFor: waiverAndReleaseOfLiabilityValidFor,
        iamAuthorized: waiverAndReleaseOfLiabilityIamAuthorized,
        needSign: waiverAndReleaseOfLiabilityNeedSign,
        signature: files && files.length > 0 ? files[0].fileName : null,
      });
      await waiver.save( async(waiverErr, waiverResult) => {
        console.log("waiverSave Err", waiverErr);
        console.log("waiverSave Success", waiverResult);
      });
      await Response.sendResponseWithData(
        res,
        resCode.EVERYTHING_IS_OK,
        resMessage.APPOINTMENT + resMessage.SAVED_SUCCESSFULLY,
        result
      );
    } else {
      // console.log(err);

      await Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        resMessage.WENT_WRONG
      );
    }
  });
};
const followUpBooking = async (req, res, next) => {
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
    
  // if(! await appointmentHelper.checkValidTime(appointmentTime)) return await Response.sendResponseWithoutData(res,resCode.WENT_WRONG,"Enter valid time format.");
  if(! await appointmentHelper.checkAvailability(appointmentDate,appointmentTime)) return Response.sendResponseWithoutData(res,resCode.WENT_WRONG,"Slot is already booked.Please choose another slot.");

    const appointment = new Appointment({
      case: caseId,
      appointmentType: appointmentType,
      service: service,
      servicePrice: servicePrice,
      appointmentDate: await generalHelper.dateFormat(appointmentDate),
      appointmentTime: appointmentTime,
      customer: customer,
      provider: provider,
      status: await generalHelper.stringToUpperCase(status),
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

    await appointment.save(async (err, result) => {
      console.log(err, result);
      if (!err) {
        await couponHelper.couponHit(coupon._id);
        await Response.sendResponseWithData(
          res,
          resCode.EVERYTHING_IS_OK,
          resMessage.APPOINTMENT + resMessage.SAVED_SUCCESSFULLY,
          result
        );
      } else {
        console.log(err);
        await Response.sendResponseWithoutData(
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
        {
          path: "customer",
          select: {
            _id: 1,firstName: 1,lastName: 1,address: 1,profilePic: 1,email: 1,status: 1,gender: 1,customerType: 1,phone: 1,
          },
        }
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
              serviceDuration:a.serviceDuration,
              serviceAmount:a.serviceAmount,
              amount:a.amount,
              taxAmount:a.taxAmount,
              discountAmount:a.discountAmount,
              totalAmount:a.totalAmount
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

const fileUpload = (req, res, next) => {
  var fileLocation = "public/uploads/user/signature";
  var fileFieldName = "waiverAndReleaseOfLiabilityAuthorizedSign";
  var fileCount = 10;
  try {
    !fs.existsSync(`./${fileLocation}`) &&
      fs.mkdirSync(`./${fileLocation}`, { recursive: true });
  } catch (e) {
    console.log("Already Exist.");
  }
  var filesData = [];
  var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, fileLocation);
    },
    filename: function (req, file, cb) {
      // console.log(req.body, file);
      var extname = path.extname(file.originalname).toLowerCase();
      var fileName = "sign" + "-" + Date.now() + extname;
      console.log("fileName", fileName);
      let fileObj = {};
      //   req.body[file.fieldname] = fileName;
      //   req.body.mimetype = file.mimetype;
      //   req.body.location = fileLocation;
      fileObj.fileName = fileName;
      fileObj.mimetype = file.mimetype;
      fileObj.location = fileLocation;
      filesData.push(fileObj);
      req.body.files = filesData;
      cb(null, fileName);
    },
  });

  var upload = multer({
    storage: storage,
    limits: { fileSize: maxSize },
    fileFilter: (req, file, cb) => {
      console.log(req.body, file);
      if (
        file.mimetype == "image/png" ||
        file.mimetype == "image/jpg" ||
        file.mimetype == "image/jpeg" ||
        file.mimetype == "application/pdf"
      ) {
        cb(null, true);
      } else {
        cb(null, false);
        // return new cb(new Error("Only/ .png, .jpg and .jpeg format allowed!"));
        req.file = {
          error: true,
          title: file.fieldname,
          msg: "Only .png, .jpg and .jpeg format allowed!",
          status: -6,
        };
      }
    },
    onFileSizeLimit: function (file) {
      req.file = {
        error: true,
        title: file.fieldname,
        msg: "Image file is to large",
        status: -6,
      };
    },
  }).fields([
    {
      name: fileFieldName,
      maxCount: fileCount,
    },
  ]);

  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      console.log("uploading_err", err);
      // A Multer error occurred when uploading.
    } else if (err) {
      // An unknown error occurred when uploading.
      console.log("uploading_err", err);
    }
    next();
    // Everything went fine.
  });
};


const getAppointmentList = async (req,res)=>{
  let query = {};
  page = req.body.page != "undefined" && req.body.page
        ? Math.max(0, req.body.page) : 1;
  var customer = { path: "customer", select: { _id: 1, firstName:1,lastName:1 } };
  var provider = { path: "provider", select: { _id: 1, facilityName:1 } };
    let options = {
      page: page,
      limit: perPage,
      select : "_id appointmentDate appointmentTime customer provider status appointmentType appointmentFor",
      lean: true,
      populate: [customer,provider],
      sort: { createdAt: -1 },
    };
  await Appointment
  // .find({})
  // .select("_id appointmentDate appointmentTime customer provider status appointmentType appointmentFor")
  .paginate(query, options, async(err,result)=>{
    if (err)
    return await  Response.sendResponseWithoutData(res,resCode.WENT_WRONG,resMessage.WENT_WRONG);
    else if (!result || result.length == 0 || result == [])
    return await Response.sendResponseWithoutData( res,resCode.WENT_WRONG,"Appointment Not Found.");
    else {
      Response.sendResponseWithPagination(
        res,
        resCode.EVERYTHING_IS_OK,
        "Appointment list Found Successfully.",
        result.docs,
        returnPagination(result)
      );
      }
  })
}




const getAppointmentDetailWithClientPortal = async (req, res) => {
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
        {
          path: "customer",
          select: {
            _id: 1,firstName: 1,lastName: 1,address: 1,profilePic: 1,email: 1,status: 1,gender: 1,customerType: 1,phone: 1,
          },
        }
      )
      // .populate({
      //   path: "service",
      //   select: {
      //     initialConsultation: 0,
      //     followUpAppointment: 0,
      //     parentService: 0,
      //     serviceType: 0,
      //     haveSubService: 0,
      //     subService: 0,
      //     insuranceApplicable: 0,
      //     addBy: 0,
      //     __v: 0,
      //     providers: 0,
      //   },
      // })
      .populate(
        "staff",
        "_id firstName lastName address profilePic email status gender "
      )
      
      .populate({path:"provider",select:{contact:0,address:0}})
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
              serviceDuration:a.serviceDuration,
              serviceAmount:a.serviceAmount,
              amount:a.amount,
              taxAmount:a.taxAmount,
              discountAmount:a.discountAmount,
              totalAmount:a.totalAmount
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
  
  edit,
  getList,
  appointmentById,
  appointmentByCustomerId,
  appointmentByStaffId,
  deleteAppointment,
  changeStatus,
  getAppointmentDetail,
  getAppointmentDetailWithClientPortal,
  followUpBooking,
  bookingAppointmentSomeOneElse,
  bookingAppointmentMySelf,
  book,
  customerBooking,
  fileUpload,
  getAppointmentList  
};
