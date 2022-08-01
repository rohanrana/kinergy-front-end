const Response = require("../common_functions/response_handler");
const resCode = require("../helper/httpResponseCode");
const resMessage = require("../helper/httpResponseMessage");
const InjuryRecord = require("../models/injuryCaseModel");
const bodyPartModel = require("../models/bodyPartModel");
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
      console.log("bodyObj", bodyObj);
      phoneArr.push(bodyObj);
    });
  }
  return phoneArr;
};
const bodyPartPush = async (bodyPartId, InjuryRecordId) => {
  InjuryRecord.findByIdAndUpdate(
    { _id: InjuryRecordId },
    { $push: { bodyParts: bodyPartId } },
    { new: true, useFindAndModify: false }
  )
    .lean()
    .exec((pushErr, pushResult) => {});
};
const add = async (req, res, next) => {
  const {
    customer,
    appointment,
    dateOnSet,
    treatedBy,
    dateOfSurgery,
    casePhysician,
    casePhysicianName,
    injuryType,
    bodyPart,
    bodySide,
    description,
    restrictions,
    dateOfNextAppoitnment,
    howInjuryConditionOccurred,
    painLevel,
    whatHasMadeConditionFeelBetter,
    whatHasMadeConditionFeelWorse,
    hasThisOrSimilarConditionOccuredBefore,
    hasThisOrSimilarConditionOccuredBeforeComment,
    haveYouSeenDoctorForchisCondition,
    hadAnyDiagnosticsForThisCondition,
    nameOfDoctor,
    doctorPhone,
    medicalDiagnosis,
  } = req.body;
  var medicalRecordData = await new InjuryRecord({
    customer,
    appointment,
    doctorPhone:doctorPhone,
    medicalDiagnosis:medicalDiagnosis,
    howInjuryConditionOccurred: howInjuryConditionOccurred,
    painLevel: painLevel,
    whatHasMadeConditionFeelBetter: whatHasMadeConditionFeelBetter,
    whatHasMadeConditionFeelWorse: whatHasMadeConditionFeelWorse,
    hasThisOrSimilarConditionOccuredBefore:
      hasThisOrSimilarConditionOccuredBefore,
    hasThisOrSimilarConditionOccuredBeforeComment:
      hasThisOrSimilarConditionOccuredBeforeComment,
    haveYouSeenDoctorForchisCondition: haveYouSeenDoctorForchisCondition,
    hadAnyDiagnosticsForThisCondition: hadAnyDiagnosticsForThisCondition,
    nameOfDoctor: nameOfDoctor,
    dateOfSurgery: generalHelper.dateFormat(dateOfSurgery),
    dateOnSet: generalHelper.dateFormat(dateOnSet),
    treatedBy: treatedBy,
    casePhysician: casePhysician,
    casePhysicianName: casePhysicianName,
    injuryType: injuryType,
    description: description,
    restrictions: restrictions,
    dateOfNextAppoitnment,
    // bodyDetails: manageBodyDetails(bodySide, bodyPart)
  });
  await medicalRecordData.save(async (err, result) => {
    var bodyData = await manageBodyDetails(bodySide, bodyPart);
    if (!(await result) && (await err)) {
      console.log(err);
      return await Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        resMessage.WENT_WRONG
      );
    } else {
      bodyData &&
        bodyData.length > 0 &&
        bodyData.map(async (bd, bdx) => {
          let bodyPartData = await bodyPartModel({
            caseId: result._id,
            bodyPart: bd.bodyPart,
            bodySide: bd.bodySide,
          });
          await bodyPartData.save(async (bodyPartErr, bodyPartResult) => {
            var push = await bodyPartPush(bodyPartResult._id, result._id);
            console.log(
              "bodyPartErr",
              bodyPartErr,
              "bodyPartResult",
              bodyPartResult,
              "push",
              push
            );
          });
        });

      return Response.sendResponseWithData(
        res,
        resCode.EVERYTHING_IS_OK,
        "Injury record add successfully.",
        result
      );
    }
  });
};

const get = async (req, res, next) => {
  if (!(await req.body.customer)) {
    return await Response.sendResponseWithoutData(
      res,
      resCode.WENT_WRONG,
      "Enter customer id."
    );
  }
  const { customer } = req.body;
  await InjuryRecord.find({ customer: customer })
    .select(
      "_id customer appointment bodyParts dateOfNextAppoitnment createdAt updatedAt"
    )
    .populate({
      path: "customer",
      select: "firstName lastName _id",
    })
    .populate({
      path: "bodyParts",
      select: "_id bodyPart bodySide",
      populate: [
        {
          path: "bodyPart",
          select: "name slug",
        },
        {
          path: "bodySide",
          select: "name slug",
        },
      ],
    })
    .lean()
    .exec(async (err, result) => {
      if (err) {
        return await Response.sendResponseWithoutData(
          res,
          resCode.WENT_WRONG,
          resMessage.WENT_WRONG
        );
      } else {
        return await Response.sendResponseWithData(
          res,
          resCode.EVERYTHING_IS_OK,
          "Injury case found successfully.",
          result
        );
      }
    });
};
const getAppointmentDetailByCaseId = async (req, res, next) => {
  if (!(await req.body.caseId)) {
    return await Response.sendResponseWithoutData(
      res,
      resCode.WENT_WRONG,
      "Enter case id."
    );
  }
  const { caseId } = req.body;
  await InjuryRecord.find({ _id: caseId })
    .select("_id appointment")
    // .populate({
    //   path: "customer",
    //   select: "firstName lastName _id",
    // })
    .populate({
      path: "appointment",
      select:
        "_id appointmentType appointmentFor service serviceDuration serviceAmount appointmentDate appointmentTime customer provider amount taxAmount discountAmount totalAmount createdAt updatedAt",
      populate: [
        {
          path: "customer",
          select: "firstName lastName _id",
        },
        {
          path: "service",
          select: "_id title slug description image initialConsultation ",
          populate: [
            {
              path: "category",
              select: "_id title slug description",
            },
            
          ],
        },
        {
          path: "provider",
          // select: "",
        },
      ],
    })
    .lean()
    .exec(async (err, result) => {
      if (err) {
        return await Response.sendResponseWithoutData(
          res,
          resCode.WENT_WRONG,
          resMessage.WENT_WRONG
        );
      } else if(!result || result.length == 0)
      return await Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        "No appointment found."
      );
      else {
        return await Response.sendResponseWithData(
          res,
          resCode.EVERYTHING_IS_OK,
          "Appointment found successfully.",
          result
        );
      }
    });
};

module.exports = {
  add,
  get,
  getAppointmentDetailByCaseId,
};
