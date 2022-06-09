const Setting = require("../models/settingModel");
const Response = require("../common_functions/response_handler");
const resMessage = require("../helper/httpResponseMessage");
const resCode = require("../helper/httpResponseCode");

var ObjectId = require("mongoose").Types.ObjectId;

const settingApis = {
  getList: (req, res, next) => {
    Setting.find()
      .lean()
      .exec((err, result) => {
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
            resMessage.SETTING_NOT_FOUND
          );
        else
          Response.sendResponseWithData(
            res,
            resCode.EVERYTHING_IS_OK,
            resMessage.SETTING_LIST,
            result
          );
      });
  },
  getSettingByNameOrId: (req, res, next) => {
    if (req.body._id || req.body.name) {
      let Options = {};
      if (req.body._id) {
        Options = { ...Options, _id: req.body._id };
      }
      if (req.body.name) {
        Options = { ...Options, name: req.name };
      }
      Setting.findOne({ Options })
        .lean()
        .exec((err, result) => {
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
              resMessage.SETTING_NOT_FOUND
            );
          else
            Response.sendResponseWithData(
              res,
              resCode.EVERYTHING_IS_OK,
              resMessage.SETTING_FOUND,
              result
            );
        });
    } else {
      Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        resMessage.ENTER_NAME_OR_ID
      );
    }
  },
  addOrUpdate: (req, res, next) => {
    if (!req.body.userId) {
      Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        resMessage.ENTER_USER_ID
      );
    } else if (!ObjectId.isValid(req.body.userId)) {
      Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        resMessage.ENTER_VALID_USER_ID
      );
    } else {
      const { name, value, type, userId } = req.body;
      var settingData = {
        name: name,
        value: value,
        type: type,
        userId: userId,
      };

      Setting.findOne({name: name })
        .lean()
        .exec((err, result) => {
          if (err)
            Response.sendResponseWithoutData(
              res,
              resCode.WENT_WRONG,
              resMessage.WENT_WRONG
            );
          else if (result) {
            Setting.findOneAndUpdate(
              { userId: userId, name: name },
              settingData,
              { new: true }
            )
              .lean()
              .exec((err, result) => {
                if (!err) {
                  Response.sendResponseWithData(
                    res,
                    resCode.EVERYTHING_IS_OK,
                   resMessage.SETTING_UPDATE,
                    result
                  );
                } else
                  Response.sendResponseWithoutData(
                    res,
                    resCode.WENT_WRONG,
                    resMessage.WENT_WRONG
                  );
              });
          } else {
            var setting = new Setting(settingData);
            setting.save((err, result) => {
              if (!err)
                Response.sendResponseWithData(
                  res,
                  resCode.EVERYTHING_IS_OK,
                  resMessage.SETTING_SAVED_SUCCESSFULLY,
                  result
                );
              else
                Response.sendResponseWithoutData(
                  res,
                  resCode.WENT_WRONG,
                  resMessage.WENT_WRONG
                );
            });
          }
        });
    }
  },
  editById: (req, res, next) => {
    if (!req.body._id) {
      Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        resMessage.ENTER_SETTING_ID
      );
    } else {
      const { name, value, type, userId } = req.body;
      var editData = {
        name: name,
        value: value,
        type: type,
        userId: userId,
      };
      Setting.findOneAndUpdate({ _id: req.body._id }, editData, { new: true })
        .lean()
        .exec((err, result) => {
          if (!err) {
            Response.sendResponseWithData(
              res,
              resCode.EVERYTHING_IS_OK,
              resMessage.SETTING_UPDATE,
              result
            );
          } else
            Response.sendResponseWithoutData(
              res,
              resCode.WENT_WRONG,
              resMessage.WENT_WRONG
            );
        });
    }
  },
  delete: (req, res) => {
    if (!req.body._id) {
      Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
       resMessage.ENTER_SETTING_ID
      );
    } else {
      Setting.findOneAndDelete({ _id: req.body._id })
        .lean()
        .exec((err, result) => {
          if (!err) {
            Response.sendResponseWithData(
              res,
              resCode.EVERYTHING_IS_OK,
              resMessage.ENTER_SETTING_ID,
              result
            );
          } else
            Response.sendResponseWithoutData(
              res,
              resCode.WENT_WRONG,
              resMessage.WENT_WRONG
            );
        });
    }
  },
};

module.exports = settingApis;
