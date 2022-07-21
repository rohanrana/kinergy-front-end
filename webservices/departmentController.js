const Response = require("../common_functions/response_handler");
const resCode = require("../helper/httpResponseCode");
const resMessage = require("../helper/httpResponseMessage");
const Department = require("../models/departmentModel");
const config = require("../config/env/config");
const configEnv = config();
const path = require("path");
const fs = require("fs");
const multer = require("multer");
const maxSize = 1 * 1024 * 1024;

const returnPagination = (result) => {
  delete result.docs;
  return result;
};
const departmentApis = {
  add: (req, res, next) => {
    const { name, image,imageURL, type, status, description } = req.body;
    var department = new Department({
      name,
      type,
      status,
      image,
      imageUrl:imageURL,
      description,
    });
    department.save((err, result) => {
      // console.log(err, result);
      if (!err)
        Response.sendResponseWithData(
          res,
          resCode.EVERYTHING_IS_OK,
          "Department Add Successfully.",
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
        "Please Enter Department Id."
      );
    } else {
      const { name, image, type, status, description } = req.body;
      var editData = {
        name,
        type,
        status,
        image,
        description,
      };
      Department.findOneAndUpdate({ _id: req.body._id }, editData, {
        new: true,
      })
        .lean()
        .exec((err, result) => {
          // department.findOneAndUpdate().exc((err, result) => {
          // console.log(err, result);
          if (!err)
            Response.sendResponseWithData(
              res,
              resCode.EVERYTHING_IS_OK,
              "Department Edit Successfully.",
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
    }
  },
  getList: (req, res, next) => {
    if (!req.body.type) {
      const perPage = 10,
        page =
          req.params.page != "undefined" && req.params.page
            ? Math.max(0, req.params.page)
            : 1;

      var options = {
        lean: true,
        limit: perPage,
        page: page,
      };

      Department.paginate({}, options, function (err, result) {
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
            "Department Data Not Found."
          );
        // Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, 'Department List .', result);
        else
          Response.sendResponseWithPagination(
            res,
            resCode.EVERYTHING_IS_OK,
            "Department List.",
            result.docs,
            returnPagination(result)
          );
      });
    }
  },
  fileUpload: (req, res, next) => {
    var fileLocation = "public/uploads/department";
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
        console.log(file);
        // Uploads is the Upload_folder_name
        cb(null, fileLocation);
      },
      filename: function (req, file, cb) {
        // console.log(req.body, file);
        var extname = path.extname(file.originalname).toLowerCase();
        var imageName = file.fieldname + "-" + Date.now() + extname;
        console.log("imageName", imageName);
        req.body[file.fieldname] = imageName;
        req.body.imageURL = fileLocation + "/" + imageName;
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
};

module.exports = departmentApis;
