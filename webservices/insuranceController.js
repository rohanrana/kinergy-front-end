const Response = require("../common_functions/response_handler");
const resCode = require("../helper/httpResponseCode");
const resMessage = require("../helper/httpResponseMessage");
const Insurance = require("../models/insuranceModel");
const generalHelper = require("../helper/general");

const returnPagination = (result) => {
  delete result.docs;
  return result;
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
          resCode.WENT_WRONG,
          "Insurance found successfully.",
          result
        );
      }
    });
};
module.exports = {
  add,
  edit,
  insuranceDelete,
  getInsuranceList,
  getInsuranceById
};
