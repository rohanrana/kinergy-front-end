const Response = require("../common_functions/response_handler");
const resCode = require("../helper/httpResponseCode");
const resMessage = require("../helper/httpResponseMessage");
const SurgeryRecord = require("../models/surgeryRecordModel");
const File = require("../models/fileModel");
const generalHelper = require("../helper/general");
const fileHelper = require("../helper/fileHelper");
const path = require("path");
const fs = require("fs");
const multer = require("multer");
const maxSize = 1 * 1024 * 1024;

const add = async (req, res, next) => {
  const { dateOfSurgery, files, reportedBy, surgeonName, description } =
    req.body;
  var surgeryData = new SurgeryRecord({
    dateOfSurgery: dateOfSurgery,
    reportedBy: reportedBy,
    surgeonName: surgeonName,
    description: description,
  });
  await surgeryData.save(async (surgeryErr, surgeryResult) => {
    if (surgeryErr) {
      try {
        files &&
          files.length > 0 &&
          files.map(async (f, fx) => {
            console.log("f", f);
            await fileHelper.fileUnlink(f.location + "/" + f.fileName);
          });
      } catch (fileUnlinkErr) {
        console.log(fileUnlinkErr);
      }

      return await Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        resMessage.WENT_WRONG
      );
    } else {
      files &&
        files.length > 0 &&
        files.map(async (f, fx) => {
          let fileAttachData = await fileHelper.fileAttach({
            relId: surgeryResult._id,
            relType: "surgeryRecord",
            fileLocation: f.location,
            fileName: f.fileName,
            fileType: f.mimetype,
            visableToCustomer: false,
            addBy: reportedBy,
          });
          fileAttachData.save();
        });
      return Response.sendResponseWithData(
        res,
        resCode.EVERYTHING_IS_OK,
        "Surgery record add successfully.",
        surgeryResult
      );
    }
  });
};

const fileUpload = (req, res, next) => {
  var fileLocation = "public/uploads/surgery";
  var fileFieldName = "document";
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
module.exports = {
  add,
  fileUpload,
};
