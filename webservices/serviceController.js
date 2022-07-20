const Service = require("../models/serviceModel");
const Category = require("../models/serviceCategoryModel");
const Response = require("../common_functions/response_handler");
const resCode = require("../helper/httpResponseCode");
const resMessage = require("../helper/httpResponseMessage");
const generalHelper = require("../helper/general");
var slugify = require("slugify");
const path = require("path");
const config = require("../config/env/config");
const configEnv = config();
const multer = require("multer");

const fs = require("fs");
const maxSize = 1 * 1024 * 1024;

const returnPagination = (result) => {
  delete result.docs;
  return result;
};

const addToCategory = (catId, serviceId) => {
  Category.findByIdAndUpdate(
    { _id: catId },
    { $push: { service: serviceId } },
    { new: true, useFindAndModify: false }
  )
    .lean()
    .exec((err, QinForm) => {});
};
const addToService = (serviceId, subServiceId) => {
  Service.findByIdAndUpdate(
    { _id: serviceId },
    { $push: { subService: subServiceId } },
    { new: true, useFindAndModify: false }
  )
    .lean()
    .exec((err, QinForm) => {});
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
      parentService,
      haveSubService,
      insuranceApplicable,
      serviceType,
      initialConsultationTitle,
      initialConsultationPrice,
      initialConsultationDuration,
      followUpAppointmentTitle,
      followUpAppointmentPrice,
      followUpAppointmentDuration,
      imageURL
    } = req.body;
    var initialConsultationPriceArr = [];
    var followUpAppointmentPriceArr = [];

    if (
      haveSubService == false ||
      !haveSubService ||
      generalHelper.stringToUpperCase(serviceType) == "SUBSERVICE"
    ) {
      initialConsultationPriceArr = generalHelper.managePriceDuration(
        initialConsultationPrice,
        initialConsultationDuration
      );
    }
    if (
      haveSubService == false ||
      !haveSubService ||
      generalHelper.stringToUpperCase(serviceType) == "SUBSERVICE"
    ) {
      followUpAppointmentPriceArr = generalHelper.managePriceDuration(
        followUpAppointmentPrice,
        followUpAppointmentDuration
      );
    }
    const slug = slugify(title, {
      replacement: "-",
      remove: undefined,
      lower: true,
      strict: true,
      trim: true,
    });

    let service = new Service({
      category: category,
      parentService: parentService,
      haveSubService: haveSubService,
      title: title,
      description: description,
      image: image,
      imageUrl:imageURL,
      slug: slug,
      addBy: addBy,
      status: generalHelper.stringToUpperCase(status),
      initialConsultation: {
        title: initialConsultationTitle,
        priceDetails: initialConsultationPriceArr,
      },
      followUpAppointment: {
        title: followUpAppointmentTitle,
        priceDetails: followUpAppointmentPriceArr,
      },
      serviceType: generalHelper.stringToUpperCase(serviceType),
      insuranceApplicable: insuranceApplicable,
    });
    service.save((err, result) => {
      // console.log(err, result);
      if (!err) {
        if (serviceType == "service" || serviceType == "SERVICE") {
          addToCategory(result.category, result._id);
        } else {
          addToService(result.parentService, result._id);
        }

        Response.sendResponseWithData(
          res,
          resCode.EVERYTHING_IS_OK,
          "Service Save Successfully.",
          result
        );
      } else
        Response.sendResponseWithoutData(
          res,
          resCode.WENT_WRONG,
          resMessage.WENT_WRONG
        );
    });
  },
  //============= edit Service By Id =========================

  edit: (req, res) => {
    if (!req.body._id) {
      Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        "Please Enter Service Id."
      );
    } else {
      const {
        title,
        description,
        image,imageURL,
        status,
        addBy,
        category,
        parentService,
        haveSubService,
        insuranceApplicable,
        serviceType,
        initialConsultationTitle,
        initialConsultationPrice,
        initialConsultationDuration,
        followUpAppointmentTitle,
        followUpAppointmentPrice,
        followUpAppointmentDuration,
      } = req.body;
      var initialConsultationPriceArr = [];
      var followUpAppointmentPriceArr = [];

      if (
        haveSubService == false ||
        !haveSubService ||
        generalHelper.stringToUpperCase(serviceType) == "SUBSERVICE"
      ) {
        initialConsultationPriceArr = generalHelper.managePriceDuration(
          initialConsultationPrice,
          initialConsultationDuration
        );
      }
      if (
        haveSubService == false ||
        !haveSubService ||
        generalHelper.stringToUpperCase(serviceType) == "SUBSERVICE"
      ) {
        followUpAppointmentPriceArr = generalHelper.managePriceDuration(
          followUpAppointmentPrice,
          followUpAppointmentDuration
        );
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
        parentService: parentService,
        haveSubService: haveSubService,
        title: title,
        description: description,
        image: image,
        imageUrl: imageURL,
        slug: slug,
        addBy: addBy,
        status: generalHelper.stringToUpperCase(status),
        serviceType: generalHelper.stringToUpperCase(serviceType),
        insuranceApplicable: insuranceApplicable,
        initialConsultation: {
          title: initialConsultationTitle,
          priceDetails: initialConsultationPriceArr,
        },
        followUpAppointment: {
          title: followUpAppointmentTitle,
          priceDetails: followUpAppointmentPriceArr,
        },
      };

      Service.findOneAndUpdate({ _id: req.body._id }, editData, { new: true })
        .lean()
        .exec((err, result) => {
          console.log(err);
          if (!err) {
            generalHelper.removeFile(
              req.body.oldImage,
              "public/uploads/service/"
            );
            Response.sendResponseWithData(
              res,
              resCode.EVERYTHING_IS_OK,
              resMessage.SERVICE + resMessage.UPDATE,
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
  // =============get Service List=============================

  getList: (req, res) => {
    const perPage = 10,
      page =
        req.body.page != "undefined" && req.body.page
          ? Math.max(0, req.body.page)
          : 1;
    var category = { path: "category", select: { _id: 1, title: 1, slug: 1 } };
    let options = {
      populate: [category],
      page: page,
      limit: perPage,
      select:
        "_id title  serviceType parentService slug description category image priceDetail insuranceApplicable addBy status createdAt updatedAt",
    };

    let query = {};
    query = {
      ...query,
      serviceType: req.body.serviceType ? req.body.serviceType : "SERVICE",
    };
    Service.paginate(query, options, function (err, result) {
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
          "Services Not Found."
        );
      else
        Response.sendResponseWithPagination(
          res,
          resCode.EVERYTHING_IS_OK,
          "Service List.",
          result.docs,
          returnPagination(result)
        );
    });
  },

  //============= get Service By Id =========================

  getListById: (req, res) => {
    if (!req.body._id) {
      Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        "Please Enter Service Id."
      );
    } else {
      Service.find({ _id: req.body._id })
        .populate("providers", "facilityName")
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
              "Service Not Found."
            );
          else
            Response.sendResponseWithData(
              res,
              resCode.EVERYTHING_IS_OK,
              "Service Found Successfully.",
              result
            );
        });
    }
  },

  getServiceDetailById: (req, res) => {
    if (!req.body._id) {
      Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        "Please Enter Service Id."
      );
    } else {
      Service.find({ _id: req.body._id })
        // .populate({
        //   path:"providers"
        // })
        .select({ subService: 0, providers: 0 })
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
              "Service Not Found."
            );
          else
            Response.sendResponseWithData(
              res,
              resCode.EVERYTHING_IS_OK,
              "Service Found Successfully.",
              result
            );
        });
    }
  },
  getServiceProvider: (req, res) => {
    if (!req.body.service) {
      Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        "Please Enter Service Id."
      );
    } else {
      Service.find({ _id: req.body.service })
        .populate({
          path: "providers",
        })
        .select({ providers: 1, _id: 0 })
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
              "Service Not Found."
            );
          else
            Response.sendResponseWithData(
              res,
              resCode.EVERYTHING_IS_OK,
              "Service Found Successfully.",
              result
            );
        });
    }
  },

  delete: (req, res) => {
    if (!req.body._id) {
      Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        "Please Enter Service Id"
      );
    } else {
      Service.findOneAndDelete({ _id: req.body._id })
        .lean()
        .exec((err, result) => {
          if (!err) {
            generalHelper.removeFile(
              req.body.oldImage,
              "public/uploads/service/"
            );
            Response.sendResponseWithData(
              res,
              resCode.EVERYTHING_IS_OK,
              resMessage.SERVICE + resMessage.DELETE,
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
        "Please Enter Service Id"
      );
    } else if (!req.body.status) {
      Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        "Please Enter Service Status"
      );
    } else {
      Service.findOneAndUpdate(
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
              "Service status changed successfully.",
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
    var fileLocation = "public/uploads/service";
    var fileFieldName = "image";
    var fileCount = 1;
    try {
      !fs.existsSync(`./${fileLocation}`) &&
        fs.mkdirSync(`./${fileLocation}`, { recursive: true });
    } catch (e) {
      console.log("Already Exist.");
    }

    var storage = multer.diskStorage({
      destination: function (req, file, cb) {
        // console.log(file);
        // Uploads is the Upload_folder_name
        cb(null, fileLocation);
      },
      filename: function (req, file, cb) {
        // console.log(req.body, file);
        var extname = path.extname(file.originalname).toLowerCase();
        var imageName = file.fieldname + "-" + Date.now() + extname;
        // console.log(imageName);
        req.body[file.fieldname] = imageName;
        req.body.imageURL = configEnv.base_url + fileLocation + "/" + imageName;
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
      // Everything went fine.

      next();
    });
  },
  //============= get  Service By Category Id =========================

  getListByCategoryId: (req, res) => {
    if (!req.body._id) {
      Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        "Please Enter  Category Id."
      );
    } else {
      Category.find({ _id: req.body._id })
        .lean()
        .exec((err, category) => {
          if (err)
            Response.sendResponseWithoutData(
              res,
              resCode.WENT_WRONG,
              resMessage.WENT_WRONG
            );
          else if (!category || category.length == 0)
            Response.sendResponseWithoutData(
              res,
              resCode.WENT_WRONG,
              "Category Not Found."
            );
          else {
            const perPage = 10,
              page =
                req.body.page != "undefined" && req.body.page
                  ? Math.max(0, req.body.page)
                  : 1;
            let query = {};
            query = {
              ...query,
              serviceType: req.body.serviceType
                ? req.body.serviceType
                : "SERVICE",
            };
            query = { ...query, category: req.body._id };
            Service.paginate(
              query,

              { page: page, limit: perPage },
              function (err, result) {
                console.log(err);
                if (err)
                  Response.sendResponseWithoutData(
                    res,
                    resCode.WENT_WRONG,
                    resMessage.WENT_WRONG
                  );
                else if (!result || result.docs.length == 0) {
                  Response.sendResponseWithData(
                    res,
                    resCode.EVERYTHING_IS_OK,
                    "Services Not Found.",
                    { category: category, ServiceResult: [] }
                  );
                } else
                  Response.sendResponseWithPagination(
                    res,
                    resCode.EVERYTHING_IS_OK,
                    "Service List.",
                    { category: category, ServiceResult: result.docs },
                    returnPagination(result)
                  );
              }
            );
          }
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
      var query = {};
      query = { ...query, serviceType: "SERVICE" };
      query = { ...query, _id: req.body._id };

      Service.find(query)
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
                req.body.page != "undefined" && req.body.page
                  ? Math.max(0, req.body.page)
                  : 1;

            Service.paginate(
              { parentService: req.body._id },

              { page: page, limit: perPage },
              function (err, result) {
                console.log(err);
                if (err)
                  Response.sendResponseWithoutData(
                    res,
                    resCode.WENT_WRONG,
                    resMessage.WENT_WRONG
                  );
                else if (!result || result.docs.length == 0) {
                  Response.sendResponseWithData(
                    res,
                    resCode.EVERYTHING_IS_OK,
                    "Services Not Found.",
                    { service: service, ServiceResult: [] }
                  );
                } else
                  Response.sendResponseWithPagination(
                    res,
                    resCode.EVERYTHING_IS_OK,
                    resMessage.SERVICE + resMessage.LIST,
                    { service: service, ServiceResult: result.docs },
                    returnPagination(result)
                  );
              }
            );
          }
        });
    }
  },
  addProvider: (req, res) => {
    if (!req.body._id) {
      Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        resMessage.SERVICE_ID_REQUIRED
      );
    } else {
      const { _id, providers } = req.body;

      // providers.map((v,x)=>{
      //   console.log('v',v);
      // })
      console.log(providers);
      let editData = {
        providers,
      };

      Service.findByIdAndUpdate({ _id: _id }, editData, { new: true })
        .lean()
        .exec((err, result) => {
          console.log(err);
          if (!err) {
            Response.sendResponseWithData(
              res,
              resCode.EVERYTHING_IS_OK,
              resMessage.PROVIDER + resMessage.UPDATE,
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
  // Get Service List for Client Side
  getServiceListClientSide: (req, res) => {
    var query = {
      status: "ACTIVE",
      serviceType: "SERVICE",
      category: req.body.category,
    };
    Service.find(query)
      .select("id title slug description")
      .lean()
      .exec((err, result) => {
        console.log(err);
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
            "Services Not Found."
          );
        else
          Response.sendResponseWithData(
            res,
            resCode.EVERYTHING_IS_OK,
            "Service List.",
            result
          );
      });
  },

  // Get Sub Service By Parent Service List for Client Side
  getSubServiceListClientSide: (req, res) => {
    if (!req.body.parentService) {
      Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        "Select Parent Service Id"
      );
    } else {
      var query = {
        status: "ACTIVE",
        serviceType: "SUBSERVICE",
        parentService: req.body.parentService,
      };
      Service.find(query)
        .select("id title slug description")
        .lean()
        .exec((err, result) => {
          console.log(err);
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
              "Sub Services Not Found."
            );
          else
            Response.sendResponseWithData(
              res,
              resCode.EVERYTHING_IS_OK,
              "Sub Service List.",
              result
            );
        });
    }
  },
};

module.exports = serviceApis;
