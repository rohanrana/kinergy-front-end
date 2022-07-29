const Response = require("../common_functions/response_handler");
const resCode = require("../helper/httpResponseCode");
const resMessage = require("../helper/httpResponseMessage");
const Insurance = require("../models/insuranceModel");
const generalHelper = require("../helper/general");
const UserAuthorizedDetailModel = require("../models/userAuthorizedDetailModel");
const path = require("path");
const fs = require("fs");
const multer = require("multer");
const maxSize = 1 * 1024 * 1024;

const returnPagination = (result) => {
  delete result.docs;
  return result;
};

const getUserAuthorizedDetail = (clientId,type)=> {
  return UserAuthorizedDetailModel.findOne({customer:clientId,rel:"insurance"}).select({rel:0,relId:0,__v:0}).exec();
};

const add = async (req, res, next) => {
  const {
    clientFirstName,
    clientLastName,
    clientDob,
    clientGender,
    clientPhone,
    clientEmail,
    providerName,
    providerPhone,
    providerEmail,
    providerAddress,
    providerState,
    providerCountry,
    providerPinCode,
    insuranceNumber,
    claimNumber,
    groupId,
    orderOfBenefits,
    effectiveFrom,
    effectiveTill,
    copayType,
    copayValue,
    relationToInsured,
    note,
  } = req.body;
  var insuranceData = new Insurance({
    clientFirstName: clientFirstName,
    clientLastName: clientLastName,
    clientDob: generalHelper.dateFormat(clientDob),
    clientGender: clientGender,
    clientPhone: clientPhone,
    clientEmail: clientEmail,
    providerName: providerName,
    providerPhone: providerPhone,
    providerEmail: providerEmail,
    providerAddress: providerAddress,
    providerState: providerState,
    providerCountry: providerCountry,
    providerPinCode: providerPinCode,
    insuranceNumber: insuranceNumber,
    claimNumber: claimNumber,
    groupId: groupId,
    orderOfBenefits: generalHelper.stringToUpperCase(orderOfBenefits),
    effectiveFrom: effectiveFrom,
    effectiveTill: effectiveTill,
    copayType: generalHelper.stringToUpperCase(copayType),
    copayValue: copayValue,
    relationToInsured: relationToInsured,
    note: note,
  });
  await insuranceData.save(async (err, result) => {
    console.log(err);
    if (err) {
      return await Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        resMessage.WENT_WRONG
      );
    } else {
      return Response.sendResponseWithData(
        res,
        resCode.EVERYTHING_IS_OK,
        "Insurance add successfully.",
        result
      );
    }
  });
};

const clientEditInsurance = async (req, res, next) => {
  console.log('req',req.body);
  const {
    clientId,
    clientFirstName,
    clientLastName,
    clientDob,
    clientGender,
    clientPhone,
    clientEmail,
    providerName,
    providerPhone,
    providerEmail,
    providerAddress,
    providerState,
    providerCountry,
    providerPinCode,
    insuranceNumber,
    claimNumber,
    groupId,
    orderOfBenefits,
    effectiveFrom,
    effectiveTill,
    copayType,
    copayValue,
    relationToInsured,
    note,

    iamAnAuthorizedRepresentativeForClient    ,
    underStandAboveInformation ,
    authorizedRepresentativeName,
    date,files,
    clientName
  } = req.body;
  var insuranceArr = [];
  groupMap = groupId &&
  groupId.length > 0 &&
   groupId.map(async (v, x) => {
    insuranceArr.push({
      clientId: clientId,
      clientFirstName: clientFirstName && clientFirstName[x]?clientFirstName[x]:"",
      clientLastName: clientLastName && clientLastName[x] ?clientLastName[x]:"",
      clientDob: clientDob && clientDob[x] ? generalHelper.dateFormat(clientDob[x]) : "",
      clientGender: clientGender && clientGender[x]?clientGender[x]:"",
      clientPhone: clientPhone && clientPhone[x]?clientPhone[x]:"",
      clientEmail: clientEmail && clientEmail[x]?clientEmail[x]:"",
      providerName: providerName && providerName[x]?providerName[x]:"",
      providerPhone: providerPhone && providerPhone[x]?providerPhone[x]:"",
      providerEmail: providerEmail && providerEmail[x]?providerEmail[x]:"",
      providerAddress: providerAddress && providerAddress[x] ?providerAddress[x]:"",
      providerState: providerState && providerState[x]?providerState[x]:"",
      providerCountry: providerCountry && providerCountry[x]?providerCountry[x]:"",
      providerPinCode: providerPinCode && providerPinCode[x] ?providerPinCode[x]:"",
      insuranceNumber: insuranceNumber && insuranceNumber[x]?insuranceNumber[x]:"",
      groupId: groupId && groupId[x]?groupId[x]:"",
      orderOfBenefits: orderOfBenefits && orderOfBenefits[x]? generalHelper.stringToUpperCase(orderOfBenefits[x]):"",
      relationToInsured: relationToInsured && relationToInsured[x]?relationToInsured[x]:""
    });
      // let insuranceData = new Insurance();
      // insData  = insuranceData.save();
    });
    await Promise.all(groupMap);
   incIds = await Insurance.find({clientId: clientId}).select("_id").exec();
   await Insurance.deleteMany({_id: { $in: incIds}}).exec();
   console.log('incIds',incIds);
insData  =await Insurance.insertMany(insuranceArr);

  // await insuranceData.save(async (err, result) => {
  // console.log(err);
  if (insData.err) {
    return await Response.sendResponseWithoutData(
      res,
      resCode.WENT_WRONG,
      resMessage.WENT_WRONG
    );
  } else {
    UserAuthorizedDetailModel.deleteMany({rel:"insurance",customer:clientId}).lean().exec();
   var UserAuthorizedDetailData =  new UserAuthorizedDetailModel({
      rel:"insurance",
      customer:clientId,
      iamAnAuthorizedRepresentativeForClient:iamAnAuthorizedRepresentativeForClient,
      underStandAboveInformation:underStandAboveInformation,
      authorizedRepresentativeName:authorizedRepresentativeName,
      clientName:clientName,
      date:date,
      sign:files[0].location + files[0].fileName, 
    });
    UserAuthorizedDetailData.save();
    return Response.sendResponseWithData(
      res,
      resCode.EVERYTHING_IS_OK,
      "Insurance update successfully.",
      insData.result
    );
  }
  // });
};

const clientAddInsurance = async (req, res, next) => {
  console.log('req',req.body);
  const {
    clientId,
    clientFirstName,
    clientLastName,
    clientDob,
    clientGender,
    clientPhone,
    clientEmail,
    providerName,
    providerPhone,
    providerEmail,
    providerAddress,
    providerState,
    providerCountry,
    providerPinCode,
    insuranceNumber,
    claimNumber,
    groupId,
    orderOfBenefits,
    effectiveFrom,
    effectiveTill,
    copayType,
    copayValue,
    relationToInsured,
    note,

    iamAnAuthorizedRepresentativeForClient    ,
    underStandAboveInformation ,
    authorizedRepresentativeName,
    date,files,
    clientName
  } = req.body;
  groupId &&
  groupId.length > 0 &&
  groupId.map(async (v, x) => {
      let insuranceData = new Insurance({
        clientId: clientId,
        clientFirstName: clientFirstName && clientFirstName[x]?clientFirstName[x]:"",
        clientLastName: clientLastName && clientLastName[x] ?clientLastName[x]:"",
        clientDob: clientDob && clientDob[x] ? generalHelper.dateFormat(clientDob[x]) : "",
        clientGender: clientGender && clientGender[x]?clientGender[x]:"",
        clientPhone: clientPhone && clientPhone[x]?clientPhone[x]:"",
        clientEmail: clientEmail && clientEmail[x]?clientEmail[x]:"",
        providerName: providerName && providerName[x]?providerName[x]:"",
        providerPhone: providerPhone && providerPhone[x]?providerPhone[x]:"",
        providerEmail: providerEmail && providerEmail[x]?providerEmail[x]:"",
        providerAddress: providerAddress && providerAddress[x] ?providerAddress[x]:"",
        providerState: providerState && providerState[x]?providerState[x]:"",
        providerCountry: providerCountry && providerCountry[x]?providerCountry[x]:"",
        providerPinCode: providerPinCode && providerPinCode[x] ?providerPinCode[x]:"",
        insuranceNumber: insuranceNumber && insuranceNumber[x]?insuranceNumber[x]:"",
        groupId: groupId && groupId[x]?groupId[x]:"",
        orderOfBenefits: orderOfBenefits && orderOfBenefits[x]? generalHelper.stringToUpperCase(orderOfBenefits[x]):"",
        relationToInsured: relationToInsured && relationToInsured[x]?relationToInsured[x]:""
      });
      insData  = insuranceData.save();
    });


  // await insuranceData.save(async (err, result) => {
  // console.log(err);
  if (insData.err) {
    return await Response.sendResponseWithoutData(
      res,
      resCode.WENT_WRONG,
      resMessage.WENT_WRONG
    );
  } else {
    UserAuthorizedDetailModel.deleteMany({rel:"insurance",customer:clientId}).lean().exec();
   var UserAuthorizedDetailData =  new UserAuthorizedDetailModel({
      rel:"insurance",
      customer:clientId,
      iamAnAuthorizedRepresentativeForClient:iamAnAuthorizedRepresentativeForClient,
      underStandAboveInformation:underStandAboveInformation,
      authorizedRepresentativeName:authorizedRepresentativeName,
      clientName:clientName,
      date:date,
      sign:files[0].location + files[0].fileName, 
    });
    UserAuthorizedDetailData.save();
    return Response.sendResponseWithData(
      res,
      resCode.EVERYTHING_IS_OK,
      "Insurance add successfully.",
      insData.result
    );
  }
  // });
};

// Edit Insurance
const edit = async (req, res, next) => {
  if (!req.body._id) {
    return Response.sendResponseWithoutData(
      res,
      resCode.WENT_WRONG,
      "Enter insurance id."
    );
  }
  const {
    clientFirstName,
    clientLastName,
    clientDob,
    clientGender,
    clientPhone,
    clientEmail,
    providerName,
    providerPhone,
    providerEmail,
    providerAddress,
    providerState,
    providerCountry,
    providerPinCode,
    insuranceNumber,
    claimNumber,
    groupId,
    orderOfBenefits,
    effectiveFrom,
    effectiveTill,
    copayType,
    copayValue,
    relationToInsured,
    note,
  } = req.body;
  var insuranceData = {
    clientFirstName: clientFirstName,
    clientLastName: clientLastName,
    clientDob: generalHelper.dateFormat(clientDob),
    clientGender: clientGender,
    clientPhone: clientPhone,
    clientEmail: clientEmail,
    providerName: providerName,
    providerPhone: providerPhone,
    providerEmail: providerEmail,
    providerAddress: providerAddress,
    providerState: providerState,
    providerCountry: providerCountry,
    providerPinCode: providerPinCode,
    insuranceNumber: insuranceNumber,
    claimNumber: claimNumber,
    groupId: groupId,
    orderOfBenefits: generalHelper.stringToUpperCase(orderOfBenefits),
    effectiveFrom: effectiveFrom,
    effectiveTill: effectiveTill,
    copayType: generalHelper.stringToUpperCase(copayType),
    copayValue: copayValue,
    relationToInsured: relationToInsured,
    note: note,
  };
  Insurance.findByIdAndUpdate({ _id: req.body._id }, insuranceData, {
    new: true,
  })
    .lean()
    .exec((err, result) => {
      console.log(err);
      if (err) {
        return Response.sendResponseWithoutData(
          res,
          resCode.WENT_WRONG,
          resMessage.WENT_WRONG
        );
      } else {
        return Response.sendResponseWithData(
          res,
          resCode.EVERYTHING_IS_OK,
          "Insurance update successfully.",
          result
        );
      }
    });
};

// Delete Insurance
const insuranceDelete = async (req, res, next) => {
  if (!req.body._id) {
    return Response.sendResponseWithoutData(
      res,
      resCode.WENT_WRONG,
      "Enter insurance id."
    );
  }

  Insurance.findByIdAndDelete({ _id: req.body._id })
    .lean()
    .exec((err, result) => {
      console.log(err);
      if (err) {
        return Response.sendResponseWithoutData(
          res,
          resCode.WENT_WRONG,
          resMessage.WENT_WRONG
        );
      } else {
        return Response.sendResponseWithData(
          res,
          resCode.EVERYTHING_IS_OK,
          "Insurance delete successfully.",
          result
        );
      }
    });
};

const getInsuranceList = (req, res) => {
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
  Insurance.paginate({}, options, function (err, result) {
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
        "Insurance  Not Found."
      );
    else
      Response.sendResponseWithPagination(
        res,
        resCode.EVERYTHING_IS_OK,
        "Insurance Found Successfully.",
        result.docs,
        returnPagination(result)
      );
  });
};

const getClientInsurance = async (req, res) => {
  if (! await req.body.clientId) {
    return await Response.sendResponseWithoutData(res,resCode.WENT_WRONG,"Enter client id.");
  }
  await Insurance.find({clientId:req.body.clientId})
    .lean()
    .exec(async(err, result) => {
      console.log('result',result.length);
      if (err) {
        await Response.sendResponseWithoutData(
          res,
          resCode.WENT_WRONG,
          resMessage.WENT_WRONG
        );
      } else if (!result || result.length == 0) {
        await Response.sendResponseWithoutData(
          res,
          resCode.WENT_WRONG,
          "Insurance  Not Found."
        );
      } else {
        finalResult = [];
         finalResult = await result.map(async(v,x)=>{
            return {
              _id: v._id,
              clientId: v.clientId,
              clientFirstName: v.clientFirstName,
              clientLastName: v.clientLastName,
              clientDob: v.clientDob,
              clientGender: v.clientGender,
              clientPhone: v.clientPhone,
              clientEmail: v.clientEmail,
              providerName: v.providerName,
              providerPhone: v.providerPhone,
              providerEmail: v.providerEmail,
              providerAddress: v.providerAddress,
              providerState: v.providerState,
              providerCountry: v.providerCountry,
              providerPinCode: v.providerPinCode,
              insuranceNumber: v.insuranceNumber,
              claimNumber: v.claimNumber,
              groupId: v.groupId,
              orderOfBenefits: v.orderOfBenefits,
              effectiveFrom: v.effectiveFrom,
              effectiveTill: v.effectiveTill,
              copayType: v.copayType,
              copayValue: v.copayValue,
              ssn: v.ssn,
              insuredOrGuarantorName: v.insuredOrGuarantorName,
              insuredOrGuarantorDob: v.insuredOrGuarantorDob,
              relationToInsured: v.relationToInsured,
              note: v.note,              
              createdAt: v.createdAt,
              updatedAt: v.updatedAt,
          };
        })
        ffinalResult = await Promise.all(finalResult);
        fdfinalResult = { insuranceData:ffinalResult, acknowledgement:await getUserAuthorizedDetail(req.body.clientId,"insurance")};
        await Response.sendResponseWithData(
          res,
          resCode.EVERYTHING_IS_OK,
          "Insurance found successfully.",
          fdfinalResult
        );
      }
    });
};

const getInsuranceById = (req, res) => {
  Insurance.find({ _id: req.body._id })
    .lean()
    .exec((err, result) => {
      if (err) {
        Response.sendResponseWithoutData(
          res,
          resCode.WENT_WRONG,
          resMessage.WENT_WRONG
        );
      } else if (!result) {
        Response.sendResponseWithoutData(
          res,
          resCode.WENT_WRONG,
          "Insurance  Not Found."
        );
      } else {
        Response.sendResponseWithData(
          res,
          resCode.EVERYTHING_IS_OK,
          "Insurance found successfully.",
          result
        );
      }
    });
};


const fileUpload = (req, res, next) => {
  var fileLocation = "public/uploads/user/signature";
  var fileFieldName = "sign";
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
      var fileName = "sign" + "-" + Date.now() + extname;
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
      req.body.sign = fileName;
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
  edit,
  insuranceDelete,
  getInsuranceList,
  getInsuranceById,
  clientAddInsurance,
  fileUpload,
  getClientInsurance,
  clientEditInsurance
};
