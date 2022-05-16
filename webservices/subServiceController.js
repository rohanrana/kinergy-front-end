const SubService = require("../models/subServiceModel");
const Service = require("../models/serviceModel");
const Response = require("../common_functions/response_handler");
const resCode = require("../helper/httpResponseCode");
const resMessage = require("../helper/httpResponseMessage");
var slugify = require("slugify");
const path = require("path");

const multer = require("multer");
const fs = require("fs");
const maxSize = 1 * 1024 * 1024;

const returnPagination = (result) => {
  delete result.docs;
  return result;
};

const serviceApis = {
  // ===============Add Service List ==========================

  add: (req, res) => {
    const {
      title,
      description,
      image,
      status,
      addBy,
      category,
      service,
      price,
      duration,
      insuranceApplicable,
    } = req.body;
    let priceArr = [];
    if (price) {
      price.map((value, index) => {
        priceObj = {};
        if (duration) {
          if (duration[index]) {
            priceObj.duration = duration[index];
          } else {
            priceObj.duration = null;
          }
        }

        priceObj = { ...priceObj, price: value };
        priceArr.push(priceObj);
      });
    }
    const slug = slugify(title, {
      replacement: "-",
      remove: undefined,
      lower: true,
      strict: true,
      trim: true,
    });
    let subService = new SubService({
      category: category,
      title: title,
      description: description,
      image: image,
      slug: slug,
      addBy: addBy,
      status: status,
      service: service,
      priceDetail: priceArr,
      insuranceApplicable: insuranceApplicable,
    });
    subService.save((err, result) => {
      // console.log(err, result);
      if (!err)
        Response.sendResponseWithData(
          res,
          resCode.EVERYTHING_IS_OK,
          "Sub Service Save Successfully.",
          result
        );
      else
        Response.sendResponseWithoutData(
          res,
          resCode.WENT_WRONG,
          resMessage.WENT_WRONG
        );
    });
  },

  // =============get Sub Service List=============================

  getList: (req, res) => {
    const perPage = 10,
      page =
        req.params.page != "undefined" && req.params.page
          ? Math.max(0, req.params.page)
          : 1;

    SubService.paginate(
      {},

      { page: page, limit: perPage },
      function (err, result) {
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
            "Sub Services Not Found."
          );
        else
          Response.sendResponseWithPagination(
            res,
            resCode.EVERYTHING_IS_OK,
            "Sub Service List.",
            result.docs,
            returnPagination(result)
          );
      }
    );
  },

  //============= get Sub Service By Id =========================

  getById: (req, res) => {
    if (!req.body._id) {
      Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        "Please Enter Sub Service Id."
      );
    } else {
      SubService.find({ _id: req.body._id })
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
              "Sub Service Not Found."
            );
          else
            Response.sendResponseWithData(
              res,
              resCode.EVERYTHING_IS_OK,
              "Sub Service Found Successfully.",
              result
            );
        });
    }
  },

  //============= get Sub Service By Service Id =========================

  getListByServiceId: (req, res) => {
    if (!req.body._id) {
      Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        "Please Enter  Service Id."
      );
    } else {
      Service.find({ _id: req.body._id })
        .lean()
        .exec((err, service) => {
          if (err)
            Response.sendResponseWithoutData(
              res,
              resCode.WENT_WRONG,
              resMessage.WENT_WRONG
            );
          else if (!service || service.length == 0)
            Response.sendResponseWithoutData(
              res,
              resCode.WENT_WRONG,
              "Service Not Found."
            );
          else {
            const perPage = 10,
              page =
                req.params.page != "undefined" && req.params.page
                  ? Math.max(0, req.params.page)
                  : 1;

            SubService.paginate(
                { service: req.body._id },

              { page: page, limit: perPage },
              function (err, result) {
                console.log(err);
                if (err)
                  Response.sendResponseWithoutData(
                    res,
                    resCode.WENT_WRONG,
                    resMessage.WENT_WRONG
                  );
                else if (!result || result.docs.length == 0){
                  Response.sendResponseWithData(
                    res,
                    resCode.EVERYTHING_IS_OK,
                    "Sub Services Not Found.",
                    {service:service,subServiceResult:[]},
                  );
                }                 
                else
                  Response.sendResponseWithPagination(
                    res,
                    resCode.EVERYTHING_IS_OK,
                    "Sub Service List.",
                    {service:service,subServiceResult:result.docs},
                    returnPagination(result)
                  );
              }
            );
          }
        });
    }
  },

  //============= edit Service By Id =========================

  edit: (req, res) => {
    if (!req.body._id) {
      Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        "Please Enter Sub Service Id."
      );
    } else {
      const {
        title,
        description,
        image,
        status,
        addBy,
        category,
        service,
        price,
        duration,
      } = req.body;
      let priceArr = [];
      if (price) {
        price.map((value, index) => {
          priceObj = {};
          if (duration) {
            if (duration[index]) {
              priceObj.duration = duration[index];
            } else {
              priceObj.duration = null;
            }
          }
          priceObj = { ...priceObj, price: value };
          priceArr.push(priceObj);
        });
      }
      const slug = slugify(title, {
        replacement: "-",
        remove: undefined,
        lower: true,
        strict: true,
        trim: true,
      });
      let editData = {
        category: category,
        title: title,
        description: description,
        image: image,
        slug: slug,
        addBy: addBy,
        status: status,
        service: service,
        priceDetail: priceArr,
      };

      SubService.findOneAndUpdate({ _id: req.body._id }, editData, {
        new: true,
      })
        .lean()
        .exec((err, result) => {
          if (!err) {
            if (
              req.body.oldImage != "undefined" &&
              req.body.oldImage != null &&
              req.body.image != "undefined" &&
              req.body.image != null
            ) {
              let filePath =
                "public/uploads/service/subService" + "/" + req.body.oldImage;
              fs.unlink(filePath, function (err) {
                if (!err) console.log("removed");
              });
            }
            Response.sendResponseWithData(
              res,
              resCode.EVERYTHING_IS_OK,
              "Sub Service Update Successfully.",
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
  },

  //============= edit Service By Id =========================

  delete: (req, res) => {
    if (!req.body._id) {
      Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        "Please Enter Sub Service Id"
      );
    } else {
      SubService.findOneAndDelete({ _id: req.body._id })
        .lean()
        .exec((err, result) => {
          if (!err) {
            if (req.body.oldImage != "undefined" && req.body.oldImage != null) {
              let filePath =
                "public/uploads/subService/" + "/" + req.body.oldImage;
              fs.unlink(filePath, function (err) {
                if (!err) console.log("removed");
              });
            }
            Response.sendResponseWithData(
              res,
              resCode.EVERYTHING_IS_OK,
              "Sub Service Deleted Successfully",
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
  },
  changeStatus: (req, res, next) => {
    if (!req.body._id) {
      Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        "Please Enter Sub Service Id"
      );
    } else if (!req.body.status) {
      Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        "Please Enter Sub Service Status"
      );
    } else {
      SubService.findOneAndUpdate(
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
              "Sub Service Status Changed Successfully.",
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
  },
  fileUpload: (req, res, next) => {
    var storage = multer.diskStorage({
      destination: function (req, file, cb) {
        // console.log(file);
        // Uploads is the Upload_folder_name
        cb(null, "public/uploads/service");
      },
      filename: function (req, file, cb) {
        // console.log(req.body, file);
        var extname = path.extname(file.originalname).toLowerCase();
        var imageName = file.fieldname + "-" + Date.now() + extname;
        // console.log(imageName);
        req.body[file.fieldname] = imageName;
        cb(null, imageName);
      },
    });

    var upload = multer({
      storage: storage,
      limits: { fileSize: maxSize },
      fileFilter: (req, file, cb) => {
        // console.log(req.body, file);
        if (
          file.mimetype == "image/png" ||
          file.mimetype == "image/jpg" ||
          file.mimetype == "image/jpeg"
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
        name: "image",
        maxCount: 1,
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
      // Everything went fine.

      next();
    });
  },
};

module.exports = serviceApis;
