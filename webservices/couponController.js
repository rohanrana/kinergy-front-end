const Response = require("../common_functions/response_handler");
const resCode = require("../helper/httpResponseCode");
const resMessage = require("../helper/httpResponseMessage");
const Coupon = require("../models/couponModel");
const generalHelper = require("../helper/general");
const Category = require("../models/serviceCategoryModel");
const Service = require("../models/serviceModel");

const CouonService = require("../models/couponServiceModel");
var ObjectId = require("mongoose").Types.ObjectId;
const returnPagination = (result) => {
  delete result.docs;
  return result;
};

var CouponCategories = [];
var ServiceCategories = [];
var subServiceCategory = [];
const getResultIds = (result, key) => {
  let returnArr = [];
  if (result && result.length > 0) {
    result.map((v, x) => {
      if (v[key]) {
        console.log(v[key].toString());
        returnArr.push(v[key].toString());
      }
    });
  }
  var uniqueArray = returnArr.filter(function (elem, pos) {
    return returnArr.indexOf(elem) == pos;
  });
  console.log("uniqueArray", uniqueArray);
  return uniqueArray;
};

const addCoupon = function (couponId, couponService) {
  Coupon.findByIdAndUpdate(
    { _id: couponId },
    { $push: { couponService: couponService._id } },
    { new: true, useFindAndModify: false }
  )
    .lean()
    .exec((err, couponServiceResult) => {
      // console.log(couponServiceResult);
    });
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
const saveCouponService = (data) => {
  let couponServce = new CouonService(data);
  couponServce.save((err, result) => {
    if (!err) {
      addCoupon(result.coupon, result);
    } else {
      console.log("_---err", err);
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
    category,
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
    // console.log(err);
    if (!err) {
      if (result._id) {
        CouonService.deleteMany({ coupon: result._id })
          .lean()
          .exec((errD, resultD) => {});
        if (category) {
          if (category.length > 0) {
            category.map((cat, catX) => {
              console.log("cat", cat);
              let = couponServiceObj = {};
              couponServiceObj = { ...couponServiceObj, coupon: result._id };
              couponServiceObj = { ...couponServiceObj, category: cat._id };
              couponServiceObj = { ...couponServiceObj, service: null };
              if (cat.service) {
                if (cat.service.length > 0) {
                  cat.service.map((ser, serX) => {
                    console.log("cat", ser);
                    couponServiceObj = { ...couponServiceObj, service: null };
                    couponServiceObj = {
                      ...couponServiceObj,
                      service: ser._id,
                    };
                    if (ser.haveSubService) {
                      couponServiceObj = {
                        ...couponServiceObj,
                        subService: null,
                      };
                      if (ser.subService) {
                        if (ser.subService.length > 0) {
                          ser.subService.map((subSer, subSerX) => {
                            console.log("subSer", subSer);
                            couponServiceObj = {
                              ...couponServiceObj,
                              subService: null,
                            };
                            couponServiceObj = {
                              ...couponServiceObj,
                              subService: subSer._id,
                            };
                            saveCouponService(couponServiceObj);
                          });
                        } else {
                          couponServiceObj = {
                            ...couponServiceObj,
                            subService: null,
                          };
                          saveCouponService(couponServiceObj);
                        }
                      } else {
                        couponServiceObj = {
                          ...couponServiceObj,
                          subService: null,
                        };
                        saveCouponService(couponServiceObj);
                      }
                    } else {
                      couponServiceObj = {
                        ...couponServiceObj,
                        subService: null,
                      };
                      saveCouponService(couponServiceObj);
                    }
                  });
                }
              } else {
                couponServiceObj = { ...couponServiceObj, service: null };
                couponServiceObj = { ...couponServiceObj, subService: null };
              }

              saveCouponService(couponServiceObj);
            });
          }
        }
      }
      Response.sendResponseWithData(
        res,
        resCode.EVERYTHING_IS_OK,
        resMessage.COUPON + resMessage.SAVED_SUCCESSFULLY,
        result
      );
    } else {
      // console.log(err);
      Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        resMessage.WENT_WRONG
      );
    }
  });
};

// Edit Coupon ================================================
const edit = (req, res) => {
  if (!req.body._id) {
    Response.sendResponseWithoutData(
      res,
      resCode.WENT_WRONG,
      resMessage.ENTER_COUPON_ID
    );
  } else if (!ObjectId.isValid(req.body._id)) {
    Response.sendResponseWithoutData(
      res,
      resCode.WENT_WRONG,
      resMessage.ENTER_VALID_COUPON_ID
    );
  } else {
    Coupon.findById({ _id: req.body._id })
      .lean()
      .exec((findIdErr, findIdResult) => {
        if (findIdResult) {
          const {
            title,
            couponCode,
            description,
            startDate,
            endDate,
            perUserLimit,
            couponType,
            couponValue,
            category,
          } = req.body;
          let couponData = {
            title: title,
            couponCode: couponCode,
            description: description,
            startDate: generalHelper.dateFormat(startDate),
            endDate: generalHelper.dateFormat(endDate),
            perUserLimit: perUserLimit,
            couponType: couponType,
            couponValue: couponValue,
            couponService: [],
          };
          console.log({ _id: req.body._id });

          Coupon.findByIdAndUpdate({ _id: req.body._id }, couponData, {
            new: true,
          })
            .lean()
            .exec((err, result) => {
              console.log("err", err, "result", result);
              if (!err && result) {
                if (result._id) {
                  CouonService.deleteMany({ coupon: req.body._id })
                    .lean()
                    .exec((errD, resultD) => {});
                  category.map((cat, catX) => {
                    console.log("cat", cat);
                    let = couponServiceObj = {};
                    couponServiceObj = {
                      ...couponServiceObj,
                      coupon: result._id,
                    };
                    couponServiceObj = {
                      ...couponServiceObj,
                      category: cat._id,
                    };
                    if (cat.service) {
                      if (cat.service.length > 0) {
                        cat.service.map((ser, serX) => {
                          couponServiceObj = {
                            ...couponServiceObj,
                            service: null,
                          };
                          couponServiceObj = {
                            ...couponServiceObj,
                            service: ser._id,
                          };
                          if (ser.haveSubService) {
                            couponServiceObj = {
                              ...couponServiceObj,
                              subService: null,
                            };
                            if (ser.subService) {
                              if (ser.subService.length > 0) {
                                ser.subService.map((subSer, subSerX) => {
                                  // console.log("subSer", subSer);
                                  couponServiceObj = {
                                    ...couponServiceObj,
                                    subService: null,
                                  };
                                  couponServiceObj = {
                                    ...couponServiceObj,
                                    subService: subSer._id,
                                  };
                                  saveCouponService(couponServiceObj);
                                });
                              }
                            }
                          } else
                            couponServiceObj = {
                              ...couponServiceObj,
                              subService: null,
                            };

                          saveCouponService(couponServiceObj);
                        });
                      }
                      saveCouponService(couponServiceObj);
                    } else {
                      couponServiceObj = { ...couponServiceObj, service: null };
                      couponServiceObj = {
                        ...couponServiceObj,
                        subService: null,
                      };
                    }
                    saveCouponService(couponServiceObj);
                  });
                }

                Response.sendResponseWithData(
                  res,
                  resCode.EVERYTHING_IS_OK,
                  resMessage.COUPON + resMessage.UPDATE,
                  result
                );
              } else {
                // console.log(err);
                Response.sendResponseWithoutData(
                  res,
                  resCode.WENT_WRONG,
                  resMessage.WENT_WRONG
                );
              }
            });
        } else {
          Response.sendResponseWithoutData(
            res,
            resCode.WENT_WRONG,
            resMessage.ENTER_VALID_COUPON_ID
          );
        }
      });
  }
};
////////////////////////////////////////////////////////////////

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
    Coupon.findByIdAndDelete({ _id: req.body._id })
      .lean()
      .exec((err, result) => {
        CouonService.deleteMany({ coupon: req.body._id })
          .lean()
          .exec((err, resultCsDelete) => {});
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

  var category = { path: "category", select: "_id  title" };
  var service = { path: "service", select: "_id  title" };
  let options = {
    page: page,
    limit: perPage,
    lean: true,
    populate: [{ path: "couponService", populate: [category, service] }],
    sort: { createdAt: -1 },
    // select:
    //   "_id  title couponCode description startDate endDate perUserLimit couponType status",
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

function getCouponServiceCategory(req) {
  return new Promise((resolve) => {
    console.log("Coupon Id", req.body.couponId);
    CouonService.find()
      .lean()
      .exec((err, resultC) => {
        console.log("resultC", resultC, "err", err);
        if (!resultC) {
          resultC = [];
        }
        console.log("resultC", resultC, "err", err);
        resolve(getResultIds(resultC, "category"));
      });
  });
}

function getCouponService(req, CouponCategories) {
  return new Promise((resolve) => {
    CouonService.find({
      coupon: req.body.couponId,
      category: { $in: CouponCategories },
    })
      .select("service")
      .lean()
      .exec((err, resultS) => {
        if (!resultS) {
          resultS = [];
        }
        console.log("resultS", resultS, "err", err);
        resolve(getResultIds(resultS, "service"));
      });
  });
}

function getSubServiceCategory(req, CouponCategories, ServiceCategories) {
  return new Promise((resolve) => {
    CouonService.find({
      coupon: req.body.couponId,
      category: { $in: CouponCategories },
      service: { $in: ServiceCategories },
      haveSubService: 1,
    })
      .select("subService")
      .lean()
      .exec((err, resultSS) => {
        console.log("resultSS", resultSS, "err", err);
        if (!resultSS) {
          resultSS = [];
        }
        resolve(getResultIds(resultSS, "subService"));
      });
  });
}

async function getCouponDetail(
  req,
  res,
  CouponCategories,
  ServiceCategories,
  subServiceCategory
) {
  return new Promise((resolve) => {
    let populate = {};
    console.log(
      ServiceCategories.length,
      subServiceCategory.length,
      CouponCategories.length
    );

    populate = {
      ...populate,
      path: "service",
      match: { _id: { $in: ServiceCategories } },
      select: "_id title",
      populate: {
        path: "subService",
        match: { _id: { $in: subServiceCategory } },
        select: "_id title",
      },
    };

    // console.log("______________", populate);
    CouonService.findOne({ coupon: req.body.couponId }).distinct(
      "category",
      function (error, ids) {
        console.log("ids", ids);
        Category.find({ _id: { $in: ids } })
          .populate(populate)
          .select("_id title")
          .exec((err, couponServiceData) => {
            resolve(couponServiceData);
          });
      }
    );
  });
}
async function sendfinalData(req, couponServiceData) {
  return new Promise((resolve) => {
    Coupon.findOne({ _id: req.body.couponId })
      .lean()
      // .populate(populate)
      .exec((err, result) => {
        result.couponServiceData = couponServiceData;
        resolve({ err, result });
      });
  });
}
async function getCouponById(req, res, next) {
  if (!req.body.couponId) {
    Response.sendResponseWithoutData(
      res,
      resCode.WENT_WRONG,
      resMessage.ENTER_COUPON_ID
    );
  } else if (!ObjectId.isValid(req.body.couponId)) {
    Response.sendResponseWithoutData(
      res,
      resCode.WENT_WRONG,
      resMessage.ENTER_VALID_COUPON_ID
    );
  } else {
    CouponCategories = await getCouponServiceCategory(req);
    ServiceCategories = await getCouponService(req, CouponCategories);
    subServiceCategory = await getSubServiceCategory(
      req,
      CouponCategories,
      ServiceCategories
    );
    console.log(
      "CouponCategories",
      CouponCategories,
      "ServiceCategories",
      ServiceCategories,
      "subServiceCategory",
      subServiceCategory
    );
    couponServiceDataF = await getCouponDetail(
      req,
      res,
      CouponCategories,
      ServiceCategories,
      subServiceCategory
    );

    getResponse = await sendfinalData(req, couponServiceDataF);

    if (getResponse.err) {
      Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        resMessage.WENT_WRONG
      );
    } else if (!getResponse.result) {
      Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        resMessage.NOT_FOUND
      );
    } else {
      Response.sendResponseWithData(
        res,
        resCode.EVERYTHING_IS_OK,
        "Coupon List.",
        getResponse.result
      );
    }
  }

  // getCouponDetail(req.res,CouponCategories,ServiceCategories,subServiceCategory);
}

const status = (req, res, next) => {
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
    Coupon.findOne({ _id: req.body._id })
      .lean()
      .exec((err, CouponId) => {
        if (CouponId) {
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
        } else {
          Response.sendResponseWithoutData(
            res,
            resCode.WENT_WRONG,
            resMessage.ID_NOT_EXIST
          );
        }
      });
  }
};
const apply = async (req, res, next) => {
  if (!(await req.body.couponCode)) {
    return await Response.sendResponseWithoutData(
      res,
      resCode.WENT_WRONG,
      "Please enter coupon code."
    );
  }
  if (!(await req.body.serviceId)) {
    return await Response.sendResponseWithoutData(
      res,
      resCode.WENT_WRONG,
      "Please enter service id."
    );
  }
  // ////////////////////////////
  // CouonService
  await Coupon.findOne({
    couponCode: req.body.couponCode,
    status: "ACTIVE",
  })
    .select(
      "_id couponCode  title startDate endDate perUserLimit hits couponValue couponType"
    )
    .lean()
    .exec(async (err, CouponData) => {
      // console.log('----+----',CouponData.endDate.getTime() ,'<', new Date().getTime())
      // console.log('----+----',CouponData.endDate.getTime() ,'<', new Date().getTime())
      if( CouponData.startDate.getTime() > new Date().getTime()  || CouponData.endDate.getTime() < new Date().getTime()){
        return await Response.sendResponseWithoutData(res,resCode.WENT_WRONG,"Coupon expired.");
      }
      if (await CouponData) {
        // console.log("Coupon Code Match");
        // console.log('_id',CouponData._id);
        if (await CouponData._id) {
          await CouonService
            .findOne({
              coupon: CouponData._id,
              service: req.body.serviceId,
            })
            .lean()
            .exec(async (CouponServiceErr, CouponServiceData) => {
              // console.log('CouponServiceData',CouponServiceData);
                if(await CouponData.perUserLimit <= CouponData.hits){
                  return await Response.sendResponseWithoutData(res,resCode.WENT_WRONG,"Coupon limit reached.");
                }
                if (await CouponServiceData) {
                  console.log("Coupon Code Match");
                  // return res.send(CouponData);
                  return await Response.sendResponseWithData(res,resCode.EVERYTHING_IS_OK,"Coupon applied successfully.",CouponData);
                } else {
                  return await Response.sendResponseWithoutData(res,resCode.WENT_WRONG,"Coupon not applicable .");
                }
            });
        }
      } else {
        return await Response.sendResponseWithoutData(res,resCode.WENT_WRONG,"invalid coupon.");
      }
    });
};
module.exports = {
  add,
  deleteCoupon,
  couponList,
  updateService,
  getCouponById,
  status,
  edit,
  apply,
};
