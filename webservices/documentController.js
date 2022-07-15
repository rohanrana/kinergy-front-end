const Response = require("../common_functions/response_handler");
const resCode = require("../helper/httpResponseCode");
const resMessage = require("../helper/httpResponseMessage");
const Document = require("../models/documentModel");
const File = require("../models/fileModel");
const generalHelper = require("../helper/general");
const fileHelper = require("../helper/fileHelper");
const path = require("path");
const fs = require("fs");
const multer = require("multer");
const maxSize = 1 * 1024 * 1024;

const returnPagination = (result) => {
  delete result.docs;
  return result;
};

const fileAttach = (fileData) => {
  var fileData = new File({
    relId: fileData.relId,
    relType: fileData.relType,
    fileName: fileData.fileName,
    fileType: fileData.fileType,
    fileLocation: fileData.fileLocation,
    visableToCustomer: fileData.visableToCustomer
      ? fileData.visableToCustomer
      : false,
    addBy: fileData.addBy,
  });
  return fileData.save();
};

const add = async (req, res, next) => {
  const {
    interventionLinkedTo,
    files,
    documentType,
    attachedBy,
    dateOfDocument,
  } = req.body;
  var documentData = new Document({
    interventionLinkedTo: interventionLinkedTo,
    documentType: documentType,
    attachedBy: attachedBy,
    dateOfDocument: dateOfDocument,
  });
  await documentData.save(async (documentErr, documentResult) => {
    if (documentErr) {
      //   try {
      //     files &&
      //       files.length > 0 &&
      //       files.map(async (f, fx) => {
      //         console.log("f", f);
      //         await fileHelper.fileUnlink(f.location + "/" + f.fileName);
      //       });
      //   } catch (fileUnlinkErr) {
      //     console.log(fileUnlinkErr);
      //   }

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
            relId: documentResult._id,
            relType: "document",
            fileLocation: f.location,
            fileName: f.fileName,
            fileType: f.mimetype,
            visableToCustomer: false,
            addBy: documentResult.attachedBy,
          });
          fileAttachData.save();
        });
      return Response.sendResponseWithData(
        res,
        resCode.EVERYTHING_IS_OK,
        "Documen add successfully.",
        documentResult
      );
    }
  });
};

const edit = async (req, res, next) => {
  // console.log('body',req.body);
  if (!req.body._id) {
    return await Response.sendResponseWithoutData(
      res,
      resCode.WENT_WRONG,
      "Please Enter Document Id."
    );
  }
  const {
    interventionLinkedTo,
    files,
    documentType,
    attachedBy,
    dateOfDocument,
  } = req.body;
  var documentData = {
    interventionLinkedTo: interventionLinkedTo,
    documentType: documentType,
    attachedBy: attachedBy,
    dateOfDocument: dateOfDocument,
  };
  await Document.findByIdAndUpdate({ _id: req.body._id }, documentData, {
    new: true,
  }).exec(async (documentErr, documentResult) => {
    console.log("documentErr", documentErr);
    if (documentErr) {
      return await Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        resMessage.WENT_WRONG
      );
    } else {
      if (files && files.length > 0) {
        fileHelper.getDeleteAttachment(res._id, "document");
      }
      files &&
        files.length > 0 &&
        files.map(async (f, fx) => {
          let fileAttachData = await fileHelper.fileAttach({
            relId: documentResult._id,
            relType: "document",
            fileLocation: f.location,
            fileName: f.fileName,
            fileType: f.mimetype,
            visableToCustomer: false,
            addBy: documentResult.attachedBy,
          });
          fileAttachData.save();
        });
      return Response.sendResponseWithData(
        res,
        resCode.EVERYTHING_IS_OK,
        "Documen Edit successfully.",
        documentResult
      );
    }
  });
};

const fileUpload = (req, res, next) => {
  var fileLocation = "public/uploads/document";
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

const getList = async (req, res) => {
  const perPage = await 10;
  page =
    (await req.body.page) != "undefined" && req.body.page
      ? Math.max(0, req.body.page)
      : 1;
  let options = await {
    page: page,
    limit: perPage,
    lean: true,
    sort: { createdAt: -1 },
  };
  await Document.paginate({}, options, async (err, result) => {
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
        "Document Not Found."
      );
    else {
      // fileHelper.getAttachment('document')
      resulcArr = [];
      var filePromise =
        result.docs &&
        result.docs.length > 0 &&
        result.docs.map(async (res, resX) => {
          resultObj = await {};
          resultObj = await {
            _id: res._id,
            interventionLinkedTo: res.interventionLinkedTo,
            documentType: res.documentType,
            attachedBy: res.attachedBy,
            dateOfDocument: res.dateOfDocument,
            attachement: await fileHelper.getAttachment(res._id, "document"),
            createdAt: res.createdAt,
            updatedAt: res.updatedAt,
          };
          // console.log('resultObj',resultObj);
          return resultObj;
          // await resultArr.push(resultObj);
        });
      resultArr2 = await Promise.all(filePromise);
      console.log("resultArr2", resultArr2);
      return await Response.sendResponseWithPagination(
        res,
        resCode.EVERYTHING_IS_OK,
        "Document List.",
        resultArr2,
        returnPagination(result)
      );
    }
  });
};

const getById = async (req, res) => {
  var ID = await req.body._id;
  if (!ID) {
    return await Response.sendResponseWithoutData(
      res,
      resCode.WENT_WRONG,
      "Please Enter Document Id."
    );
  }
  await Document.find({ _id: req.body._id })
    .lean()
    .exec(async (err, result) => {
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
          "Document Not Found."
        );
      else {
        // fileHelper.getAttachment('document')
        // var resultArr2 =[];
        var filePromise =
          (await result) &&
          result.length > 0 &&
          result.map(async (res, resX) => {
            resultObj = await {};
            resultObj = await {
              _id: res._id,
              interventionLinkedTo: res.interventionLinkedTo,
              documentType: res.documentType,
              attachedBy: res.attachedBy,
              dateOfDocument: res.dateOfDocument,
              attachement: await fileHelper.getAttachment(res._id, "document"),
              createdAt: res.createdAt,
              updatedAt: res.updatedAt,
            };
            console.log("resultObj", resultObj);
            // await resultArr2.push(resultObj);
            return resultObj;
          });
        resultArr2 = await Promise.all(filePromise);
        console.log("resultArr2", resultArr2);
        return await Response.sendResponseWithData(
          res,
          resCode.EVERYTHING_IS_OK,
          "Document List.",
          resultArr2
        );
      }
    });
};

const deleteDocument = async (req, res) => {
  var ID = await req.body._id;
  if (!ID) {
    return await Response.sendResponseWithoutData(
      res,
      resCode.WENT_WRONG,
      "Please Enter Document Id."
    );
  }
  Document.findByIdAndDelete({ _id: req.body._id })
    .lean()
    .exec(async (err, result) => {
      if (err) {
        Response.sendResponseWithoutData(
          res,
          resCode.WENT_WRONG,
          resMessage.WENT_WRONG
        );
      } else {
        Response.sendResponseWithData(
          res,
          resCode.WENT_WRONG,
          "Document Deleted Successfully.",
          result
        );
      }
    });
};
module.exports = {
  add,
  fileUpload,
  getList,
  edit,
  getById,
  deleteDocument,
};
