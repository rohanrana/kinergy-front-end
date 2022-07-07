const Response = require("../common_functions/response_handler");
const resCode = require("../helper/httpResponseCode");
const resMessage = require("../helper/httpResponseMessage");
const MedicalRecord = require("../models/medicalRecordModel");

const generalHelper = require("../helper/general");

const manageBodyDetails = (bodySide, bodyPart) => {
  let phoneArr = [];
  if (bodySide) {
    bodySide.map((value, index) => {
      console.log(value);
      bodyObj = {};
      if (bodyPart[index]) {
        bodyObj.bodyPart = bodyPart[index];
      } else {
        bodyObj.bodyPart = null;
      }
      bodyObj = { ...bodyObj, bodySide: value };
      phoneArr.push(bodyObj);
    });
  }
  return phoneArr;
};

const add = async (req, res, next) => {
  const {
    dateOnSet,
    treatedBy,
    casePhysician,
    casePhysicianName,
    injuryType,
    bodyPart,
    bodySide,
    description,
    restrictions,
  } = req.body;
  var medicalRecordData = new MedicalRecord({
    dateOnSet: generalHelper.dateFormat(dateOnSet),
    treatedBy: treatedBy,
    casePhysician: casePhysician,
    casePhysicianName: casePhysicianName,
    injuryType: injuryType,
    description: description,
    restrictions: restrictions,
    bodyDetails: manageBodyDetails(bodySide, bodyPart),
  });
  medicalRecordData.save((err, result) => {
    if (!result && err) {
      console.log(err);
      return Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        resMessage.WENT_WRONG
      );
    } else {
      return Response.sendResponseWithData(
        res,
        resCode.EVERYTHING_IS_OK,
        "Medical record add successfully.",
        result
      );
    }
  });
};
module.exports = {
  add,
};
