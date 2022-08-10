const Response = require("../common_functions/response_handler");
const resCode = require("../helper/httpResponseCode");
const resMessage = require("../helper/httpResponseMessage");
const Customer = require("../models/customersModel");
const LinkedUsers = require("../models/linkUsersModel");
const generalHelper = require("../helper/general");
const fileHelper = require("../helper/fileHelper");

const path = require("path");
const fs = require("fs");
const multer = require("multer");
const maxSize = 1 * 1024 * 1024;


// const manageAccessUsersData = async (result) => {
//     result && result.length > 0 && result.map(async(v,x)=>{
//         return {
//               _id:v._id,
//               userLinked:{
//                 userId:v.userLinked._id,
//                 firstName:v.userLinked.firstName,
//                 lastName:v.userLinked.lastName,
//                 email:v.userLinked.lastName,

//               }  
//         }
//     })
// }
const search = async (req, res, next) => {
  const { name, email, phone } = req.body;
  if (!name)
    return Response.sendResponseWithoutData(
      res,
      resCode.WENT_WRONG,
      "Please enter name."
    );
  if (!email)
    return Response.sendResponseWithoutData(
      res,
      resCode.WENT_WRONG,
      "Please enter email."
    );
  if (!phone)
    return Response.sendResponseWithoutData(
      res,
      resCode.WENT_WRONG,
      "Please enter phone."
    );
  var query = {
    $and: [
      {
        $or: [
          {
            $regexMatch: {
              input: { $concat: ["$firstName", " ", "$lastName"] },
              regex: name, //Your text search here
              options: "i",
            },
            email: email,
          },
        ],
      },
      {
        $or: [
          {
            $regexMatch: {
              input: { $concat: ["$firstName", " ", "$lastName"] },
              regex: name, //Your text search here
              options: "i",
            },
            phone: generalHelper.trimNumber(phone),
          },
        ],
      },
    ],
  };
  console.log("query", query);

  Customer.findOne(query)
    .select("_id firstName lastName email phone")
    .exec(async (err, result) => {
      if (result) {
        return await Response.sendResponseWithData(
          res,
          resCode.EVERYTHING_IS_OK,
          "User profile found",
          result
        );
      } else if (!result) {
        return await Response.sendResponseWithData(
          res,
          resCode.WENT_WRONG,
          "User profile  not found"
        );
      } else {
        console.log(err);
        return await Response.sendResponseWithoutData(
          res,
          resCode.WENT_WRONG,
          resMessage.WENT_WRONG
        );
      }
    });
};

const sendAccessGrantRequest = async (req, res) => {
  try {
    const { userLinkTo, userLinkFrom, canBookAppointment, canUnlinkOther } =
      req.body;
    console.log("req.body", req.body);
    if (!userLinkTo)
      return Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        "Please enter grant user id."
      );
    if (!userLinkFrom)
      return Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        "Please enter logged in user id."
      );

    LinkedUsers.findOneAndUpdate(
      { customer: userLinkFrom, userLinked: userLinkTo },
      {
        customer: userLinkFrom,
        userLinked: userLinkTo,
        canBookAppointment: canBookAppointment,
        canUnlinkOther: canUnlinkOther,
      },
      { new: true, upsert: true }
    ).exec(async (err, result) => {
      console.log("err", err, "result", result);
      if (result) {
        console.log("result", result);

        await Customer.findByIdAndUpdate(
          { _id: userLinkFrom },
          { $addToSet: { linkedUsers: result._id } },
          { new: true }
        ).exec(async (errCustomer, resultCustomer) => {
          // if(err){
          //     return await Response.sendResponseWithData(res,resCode.WENT_WRONG, "Access grant request not send.");
          // }else{
          //     return await Response.sendResponseWithData(res,resCode.EVERYTHING_IS_OK, "Access grant request send successfully.",resultCustomer);
          // }
        });

        return await Response.sendResponseWithData(
          res,
          resCode.EVERYTHING_IS_OK,
          "Access grant request send successfully."
        );
      } else {
        console.log("err", err);
        return await Response.sendResponseWithoutData(
          res,
          resCode.WENT_WRONG,
          "Access grant request not sent."
        );
      }
    });
  } catch (er) {
    return await Response.sendResponseWithoutData(
      res,
      resCode.WENT_WRONG,
      resMessage.WENT_WRONG
    );
  }
};

const getAccessGrantList = async (req, res) => {
  const { customerId } = req.body;
  if (!customerId)
    return Response.sendResponseWithoutData(
      res,
      resCode.WENT_WRONG,
      "Please enter customer id."
    );
  if (!generalHelper.checkObjectId(customerId))
    return Response.sendResponseWithoutData(
      res,
      resCode.WENT_WRONG,
      "Please enter valid customer id."
    );
  LinkedUsers.find({ customer: customerId,status :{$ne:"REMOVED"} })
    .select("_id userLinked canBookAppointment canUnlinkOther status")
    .populate({
        path:"userLinked", 
        select:"_id firstName lastName email phone linkedUsers",        
    })
    .lean()
    .exec(async (err, result) => {
      if(err){
        
        return Response.sendResponseWithoutData(
            res,
            resCode.WENT_WRONG,
            resMessage.WENT_WRONG
          );
      }else if(!result || result.length == 0){
        return Response.sendResponseWithoutData(
            res,
            resCode.WENT_WRONG,
            "No account have been added yet."
          );
      }else{
        // finalResult  = await manageAccessUsersData(result);
        return Response.sendResponseWithData(
            res,
            resCode.EVERYTHING_IS_OK,
            "Account list.",result
          );
      }
    });
};

const changeGrantAcessStatus = (req, res) => {
  var  { requestId ,status} = req.body;
  status  = status?status.toUpperCase():"";
  if (!requestId)
    return Response.sendResponseWithoutData(
      res,
      resCode.WENT_WRONG,
      "Please enter request id."
    );
  if (!generalHelper.checkObjectId(requestId))
    return Response.sendResponseWithoutData(
      res,
      resCode.WENT_WRONG,
      "Please enter valid request id."
    );
  if (!status)
    return Response.sendResponseWithoutData(
      res,
      resCode.WENT_WRONG,
      "Please enter status."
    );
    if (status != "APPROVE" && status != "REJECT" && status != "" && status != "REMOVED")
    return Response.sendResponseWithoutData(
      res,
      resCode.WENT_WRONG,
      `Please enter valid status from 'APPROVE|REJECT|REMOVED'.`
    );
  LinkedUsers.findByIdAndUpdate({ _id: requestId},{status :status},{new:true})
    .lean()
    .exec(async (err, result) => {
      if(err){
        return Response.sendResponseWithoutData(
            res,
            resCode.WENT_WRONG,
            resMessage.WENT_WRONG
          );
      }else{
        return Response.sendResponseWithData(
            res,
            resCode.EVERYTHING_IS_OK,
            "Account status changed successfully.",result
          );
      }
    });
};

const unlinkAllAccount = (req, res) => {
  var  { customerId ,status} = req.body;
  status  = status?status.toUpperCase():"";
  if (!customerId)
    return Response.sendResponseWithoutData(
      res,
      resCode.WENT_WRONG,
      "Please enter customer id."
    );
  if (!generalHelper.checkObjectId(customerId))
    return Response.sendResponseWithoutData(
      res,
      resCode.WENT_WRONG,
      "Please enter valid customer id."
    );
  LinkedUsers.deleteMany({customer:customerId})
    .lean()
    .exec(async (err, result) => {
      if(err){
        return Response.sendResponseWithoutData(
            res,
            resCode.WENT_WRONG,
            resMessage.WENT_WRONG
          );
      }else{
        return Response.sendResponseWithoutData(
            res,
            resCode.EVERYTHING_IS_OK,
            "All account unlink successfully."
          );
      }
    });
};
const fileUpload = (req, res, next) => {
  var fileLocation = "public/uploads/user/signature";
  var fileFieldName = "signature";
  var fileCount = 1;
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
  search,
  sendAccessGrantRequest,
  getAccessGrantList,
  fileUpload,changeGrantAcessStatus,unlinkAllAccount
};
