const Response = require("../common_functions/response_handler");
const resCode = require("../helper/httpResponseCode");
const resMessage = require("../helper/httpResponseMessage");
const Waiver = require("../models/waiverModel");

const generalHelper = require("../helper/general");
const fileHelper = require("../helper/fileHelper");

const path = require("path");
const fs = require("fs");
const multer = require("multer");
const maxSize = 1 * 1024 * 1024;

const add = async (req, res, next) => {
  const {
    customer,
    validFor,
    needSign,
    iamAuthorized,
    authorizedRepresentativeName,
    clientName,
    appointment,
    date,type,
    files,
  } = req.body;
  await Waiver.findOneAndUpdate(
    { type: type, appointment: appointment, customer: customer },
    {
      type: type,
      appointment: appointment,
      customer: customer,
      authorizedRepresentativeName: authorizedRepresentativeName,
      date: date,
      validFor: validFor,
      iamAuthorized: iamAuthorized,
      needSign: needSign,
      clientName: clientName,
      signature: files && files.length > 0 ? files[0].fileName : null,
    },
    { new: true, upsert: true }
  )
    .lean()
    .exec(async (err, result) => {
      console.log("err", err, "result", result);
      if (!err)
        Response.sendResponseWithData(
          res,
          resCode.EVERYTHING_IS_OK,
          "Waiver and release of liability add successfully.",
          result
        );
      else
        Response.sendResponseWithoutData(
          res,
          resCode.WENT_WRONG,
          resMessage.WENT_WRONG
        );
    });
};

const fileUpload = (req, res, next) => {
  var fileLocation = "public/uploads/user/signature";
  var fileFieldName = "signature";
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
      var fileName = file.fieldname + "-" + Date.now() + extname;
      console.log("fileName", fileName);
      let fileObj = {};
      //   req.body[file.fieldname] = fileName;
      //   req.body.mimetype = file.mimetype;
      //   req.body.location = fileLocation;
      fileObj.fileName = fileName;
      fileObj.mimetype = file.mimetype;
      fileObj.location = fileLocation;
      req.body.signature = fileLocation + "/" + fileName;
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
    next();
    // Everything went fine.
  });
};

module.exports = {
  add,
  fileUpload,
};
