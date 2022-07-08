const Response = require("../common_functions/response_handler");
const resCode = require("../helper/httpResponseCode");
const resMessage = require("../helper/httpResponseMessage");
const progressReport = require("../models/progressReportModel");
const File = require("../models/fileModel");
const generalHelper = require("../helper/general");
const fileHelper = require("../helper/fileHelper");
const path = require("path");
const fs = require("fs");
const multer = require("multer");
const maxSize = 1 * 1024 * 1024;

const add = async (req, res, next) => {
  const {
    patient,
    injuryDate,
    surgeryDate,
    physicianName,
    therapistName,
    synopsis,
    impression,
    plan,
    rom_status,
    rom_comment,
    palpation_status,
    palpation_comment,
    joint_mobility_status,
    joint_mobility_comment,
    strength_status,
    strength_comment,
    swelling_status,
    swelling_comment,
    function_status,
    function_comment,
  } = req.body;
  var progressReportData = new progressReport({
    patient: patient,
    injuryDate: injuryDate,
    surgeryDate: surgeryDate,
    physicianName: physicianName,
    therapistName: therapistName,
    synopsis: synopsis,
    impression: impression,
    plan: plan,
    rom_status: rom_status,
    rom_comment: rom_comment,
    palpation_status: palpation_status,
    palpation_comment: palpation_comment,
    joint_mobility_status: joint_mobility_status,
    joint_mobility_comment: joint_mobility_comment,
    strength_status: strength_status,
    strength_comment: strength_comment,
    swelling_status: swelling_status,
    swelling_comment: swelling_comment,
    function_status: function_status,
    function_comment: function_comment,
  });
  await progressReportData.save(
    async (progressReportErr, progressReportResult) => {
      if (progressReportErr) {
        return await Response.sendResponseWithoutData(
          res,
          resCode.WENT_WRONG,
          resMessage.WENT_WRONG
        );
      } else {
        return Response.sendResponseWithData(
          res,
          resCode.EVERYTHING_IS_OK,
          "Progress report add successfully.",
          progressReportResult
        );
      }
    }
  );
};

module.exports = {
  add,
};
