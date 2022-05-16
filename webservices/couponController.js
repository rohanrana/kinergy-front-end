const Response = require("../common_functions/response_handler");
const resCode = require("../helper/httpResponseCode");
const resMessage = require("../helper/httpResponseMessage");
const Coupon = require("../models/couponModel");
const generalHelper = require("../helper/general");
const Category = require("../models/serviceCategoryModel");
const Service = require("../models/serviceModel");
const subService = require("../models/subServiceModel");
const returnPagination = (result) => {
  delete result.docs;
  return result;
};

const updateCouponServiceData = (couponId, editData, res) => {
  Coupon.findByIdAndUpdate({ _id: couponId }, editData, { new: true })
    .lean()
    .exec((err, result) => {
      if (!err)
        Response.sendResponseWithData(
          res,
          resCode.EVERYTHING_IS_OK,
          resMessage.COUPON + resMessage.UPDATE,
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



const add = (req, res) => {
  const {
    title,
    couponCode,
    description,
    startDate,
    endDate,
    perUserLimit,
    couponType,
    couponValue,
  } = req.body;
  let coupon = new Coupon({
    title: title,
    couponCode: couponCode,
    description: description,
    startDate: generalHelper.dateFormat(startDate),
    endDate: generalHelper.dateFormat(endDate),
    perUserLimit: perUserLimit,
    couponType: couponType,
    couponValue: couponValue,
  });

  coupon.save((err, result) => {
    console.log(err);
    if (!err)
      Response.sendResponseWithData(
        res,
        resCode.EVERYTHING_IS_OK,
        resMessage.COUPON + resMessage.SAVED_SUCCESSFULLY,
        result
      );
    else {
      // console.log(err);
      Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        resMessage.WENT_WRONG
      );
    }
  });
};

const editCoupon = (req, res) => {
  const {
    title,
    couponCode,
    description,
    startDate,
    endDate,
    perUserLimit,
    couponType,
    couponValue,
  } = req.body;
  let editCoupon = {
    title: title,
    couponCode: couponCode,
    description: description,
    startDate: generalHelper.dateFormat(startDate),
    endDate: generalHelper.dateFormat(endDate),
    perUserLimit: perUserLimit,
    couponType: couponType,
    couponValue: couponValue,
  };

  Coupon.findByIdAndUpdate({ _id: req.body._id }, editCoupon, {
    new: true,
  }).exec((err, result) => {
    console.log(err);
    if (!err)
      Response.sendResponseWithData(
        res,
        resCode.EVERYTHING_IS_OK,
        resMessage.COUPON + resMessage.UPDATE,
        result
      );
    else {
      // console.log(err);
      Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        resMessage.WENT_WRONG
      );
    }
  });
};

const updateService = (req, res) => {
  if (!req.body.couponId) {
    Response.sendResponseWithoutData(
      res,
      resCode.WENT_WRONG,
      resMessage.ENTER_COUPON_ID
    );
  } else {
    const { category, service, subService } = req.body;
    let editData = {
      category,
      service,
      subService,
    };
    updateCouponServiceData(req.body.couponId, editData, res);
  }
};
const deleteCoupon = (req, res) => {
  if (!req.body._id) {
    Response.sendResponseWithoutData(
      res,
      resCode.WENT_WRONG,
      resMessage.ENTER_COUPON_ID
    );
  } else {
  Coupon.findByIdAndDelete({_id:req.body._id})
    .lean()
    .exec((err, result) => {
      if (!err)
        Response.sendResponseWithData(
          res,
          resCode.EVERYTHING_IS_OK,
          resMessage.COUPON + resMessage.DELETE,
          result
        );
      else {
        // console.log(err);
        Response.sendResponseWithoutData(
          res,
          resCode.WENT_WRONG,
          resMessage.WENT_WRONG
        );
      }
    });
  }
};

const couponList = (req, res, next) => {
  const perPage = 10;
  page =
    req.body.page != "undefined" && req.body.page
      ? Math.max(0, req.body.page)
      : 1;

  var category = { path: "category", select: { _id: 1 } };
  let options = {
    page: page,
    limit: perPage,
    lean: true,
    sort: { createdAt: -1 },
  };
  let query = {};
  if (req.body.search && req.body.search != "")
    query = {
      ...query,
      title: { $regex: `${req.body.search}`, $options: "i" },
    };

  if (req.body.status && req.body.status != "" && req.body.status != "all")
    query = {
      ...query,
      status: generalHelper.stringToUpperCase(req.body.status),
    };

  Coupon.paginate(query, options, function (err, result) {
    console.log(err);
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
        "Coupon Not Found."
      );
    else
      Response.sendResponseWithPagination(
        res,
        resCode.EVERYTHING_IS_OK,
        "Coupon List.",
        result.docs,
        returnPagination(result)
      );
  });
};

const getCouponById = (req, res, next) => {
  if (!req.body.couponId) {
    Response.sendResponseWithoutData(
      res,
      resCode.WENT_WRONG,
      resMessage.ENTER_COUPON_ID
    );
  } else {
    Coupon.findOne({ _id: req.body.couponId })
      .populate('category',"_id title")
      .exec((err, result) => {
        console.log(err);
        if (err) {
          Response.sendResponseWithoutData(
            res,
            resCode.WENT_WRONG,
            resMessage.WENT_WRONG
          );
        }else if (result.length == 0 || !result) {
          Response.sendResponseWithoutData(
            res,
            resCode.WENT_WRONG,
            resMessage.WENT_WRONG
          );
        } else {
          returnResult = {};
          returnResult = {...returnResult,_id:result._id,title:result.title,couponCode:result.couponCode,couponType:result.couponType,description:result.description,startDate:result.startDate,endDate:result.endDate,perUserLimit:result.perUserLimit,couponType:result.couponType,status:result.status};
          
          Response.sendResponseWithData(
            res,
            resCode.EVERYTHING_IS_OK,
            "Coupon List.",
            returnResult
          );
        }
      });
  }
};

const status =  (req, res, next) => {
  if (!req.body._id) {
    Response.sendResponseWithoutData(
      res,
      resCode.WENT_WRONG,
      "Please Enter Coupon Id"
    );
  } else if (!req.body.status) {
    Response.sendResponseWithoutData(
      res,
      resCode.WENT_WRONG,
      "Please Enter Coupon Status"
    );
  } else {
    Coupon.findOneAndUpdate(
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
            "Coupon Status Changed Successfully.",
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

module.exports = {
  add,
  deleteCoupon,
  couponList,
  updateService,
  getCouponById,
  status,
};
