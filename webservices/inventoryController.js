const Response = require("../common_functions/response_handler");
const resCode = require("../helper/httpResponseCode");
const resMessage = require("../helper/httpResponseMessage");
const Inventory = require("../models/productModel");

var taxAmount = 0;

const path = require("path");
const fs = require("fs");
const multer = require("multer");
const maxSize = 1 * 1024 * 1024;

const getFloatData = (result) => {
  let ItemData = result.map((item, index) => {
    // console.log('index',index,'item',item);
    return {
      _id: item._id,
      name: item.name,
      description: item.description,
      code: item.code,
      quantity: item.quantity,
      tax: item.tax,
      price: Number(parseFloat(item.price)).toFixed(2),
      image: item.image,
      totalAmount: Number(parseFloat(item.totalAmount)).toFixed(2),
      status: item.status,
      stockStatus: item.stockStatus,
      createdAt: item.createdAt,
      updatedAt: item.updatedAt,
    };
  });
  return ItemData;
};

const returnPagination = (result) => {
  delete result.docs;
  return result;
};
const inventoryApis = {
  add: (req, res, next) => {
    const {
      name,
      code,
      quantity,
      tax,
      price,
      totalAmount,
      description,
      status,
      stockStatus,
      image,
      imageUrl
    } = req.body;
    var inventoryData = new Inventory({
      name,
      code,
      quantity,
      tax,
      price,
      totalAmount,
      description,
      status,
      stockStatus,
      image,
      imageUrl
    });
    inventoryData.save((err, result) => {
      // console.log(err, result);
      if (!err)
        Response.sendResponseWithData(
          res,
          resCode.EVERYTHING_IS_OK,
          "Inventory Add Successfully.",
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
  },
  edit: (req, res, next) => {
    if (!req.body._id) {
      Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        "Please Enter Inventory Item Id"
      );
    } else {
      const {
        name,
        code,
        quantity,
        tax,
        price,
        totalAmount,
        description,
        status,
        stockStatus,
        image,
        imageUrl
      } = req.body;
      var inventoryData = {
        name,
        code,
        quantity,
        tax,
        price,
        totalAmount,
        description,
        status,
        stockStatus,
        image,
        imageUrl
      };

      Inventory.findOneAndUpdate({ _id: req.body._id }, inventoryData, {
        new: true,
      })
        .lean()
        .exec((err, result) => {
          if (!err) {
            Response.sendResponseWithData(
              res,
              resCode.EVERYTHING_IS_OK,
              "Inventory Update Successfully.",
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
  },
  delete: (req, res) => {
    if (!req.body._id) {
      Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        "Please Enter Inventory Item Id"
      );
    } else {
      Inventory.findOneAndDelete({ _id: req.body._id })
        .lean()
        .exec((err, result) => {
          if (!err) {
            Response.sendResponseWithData(
              res,
              resCode.EVERYTHING_IS_OK,
              "Item Deleted Successfully",
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
  },

  inventoryById: (req, res, next) => {
    if (!req.body._id) {
      Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        "Please Enter Inventory Item Id"
      );
    } else {
      Inventory.find({ _id: req.body._id })
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
              "Inventory Not Found."
            );
          else {
            Response.sendResponseWithData(
              res,
              resCode.EVERYTHING_IS_OK,
              "Inventory Found Successfully.",
              getFloatData(result)
            );
          }
        });
    }
  },

  getList: (req, res, next) => {
    const perPage = 10,
      page =
        req.params.page != "undefined" && req.params.page
          ? Math.max(0, req.params.page)
          : 1;
    // Inventory.find({ status: "ACTIVE" })
    Inventory.paginate(
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
            "InventoryNot Found."
          );
        else {
          Response.sendResponseWithPagination(
            res,
            resCode.EVERYTHING_IS_OK,
            "InventoryList .",
            getFloatData(result.docs),
            returnPagination(result)
          );
        }
      }
    );
  },
  getSearchList: (req, res, next) => {
    const perPage = 10,
      page =
        req.params.page != "undefined" && req.params.page
          ? Math.max(0, req.params.page)
          : 1;
    let FilterData = {};
    if (req.body.search !== undefined && req.body.search) {
      FilterData = {
        ...FilterData,
        name: { $regex: `${req.body.search}`, $options: "i" },
      };
    }

    if (req.body.stockStatus !== undefined) {
      FilterData = { ...FilterData, stockStatus: req.body.stockStatus };
    }
    if (req.body.status !== undefined && req.body.status) {
      FilterData = { ...FilterData, status: req.body.status.toUpperCase() };
    }
    console.log("FilterData", FilterData);
    Inventory.paginate(
      FilterData,
      { page: page, limit: perPage },
      function (err, result) {
        // console.log('result',result);
        if (err) {
          Response.sendResponseWithoutData(
            res,
            resCode.WENT_WRONG,
            resMessage.WENT_WRONG
          );
        } else if (!result || result.docs.length == 0)
          Response.sendResponseWithoutData(
            res,
            resCode.WENT_WRONG,
            "InventoryNot Found."
          );
        else {
          Response.sendResponseWithPagination(
            res,
            resCode.EVERYTHING_IS_OK,
            "InventoryList .",
            getFloatData(result.docs),
            returnPagination(result)
            // result.docs
          );
        }
      }
    );
  },
  changeStatus: (req, res, next) => {
    if (!req.body._id) {
      Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        "Please Enter Inventory Item Id"
      );
    } else if (!req.body.status) {
      Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        "Please Enter Inventory Item Status"
      );
    } else {
      Inventory.findOneAndUpdate(
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
              "Inventory Status Changed Successfully.",
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
  changeStockStatus: (req, res, next) => {
    if (!req.body._id) {
      Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        "Please Enter Inventory Item Id"
      );
    } else if (req.body.sotckStatus == "undefined") {
      Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        "Please Enter Inventory Item Stock Status"
      );
    } else {
      Inventory.findOneAndUpdate(
        { _id: req.body._id },
        { stockStatus: req.body.sotckStatus },
        { new: true }
      )
        .lean()
        .exec((err, result) => {
          if (!err) {
            Response.sendResponseWithData(
              res,
              resCode.EVERYTHING_IS_OK,
              "Inventory Stock Status Changed Successfully.",
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
    var fileLocation = "public/uploads/inventory";
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
        console.log("imageName", imageName);
        req.body[file.fieldname] = imageName;
        req.body.imageUrl = fileLocation + "/" + imageName;
        cb(null, imageName);
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

module.exports = inventoryApis;
