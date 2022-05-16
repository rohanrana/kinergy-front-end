const Message = require("../models/messageBoardModel.js");
const Response = require("../common_functions/response_handler");
const resMessage = require("../helper/httpResponseMessage");
const resCode = require("../helper/httpResponseCode");

var ObjectId = require("mongoose").Types.ObjectId;

const messageApis = {
  add: (req, res, next) => {
    if (!req.body.sender) {
      Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        resMessage.ENTER_SENDER_ID
      );
    } else if (!ObjectId.isValid(req.body.sender)) {
      Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        resMessage.ENTER_VALID_USER_ID
      );
    } else {
      const { sender, reciever, message, type, status } = req.body;
      let endDate = req.body.endDate;
      let displayDays = req.body.displayDays;
      if (displayDays > 0) {
        endDate = new Date(+new Date() + displayDays * 24 * 60 * 60 * 1000);
      }
      var messageData = {
        sender,
        reciever,
        message,
        displayDays,
        endDate,
        type,
        status,
      };

      var messages = new Message(messageData);
      messages.save((err, result) => {
        if (!err)
          Response.sendResponseWithData(
            res,
            resCode.EVERYTHING_IS_OK,
            resMessage.MESSAGE_SAVED_SUCCESSFULLY,
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
  },
  getMessage: (req, res, next) => {
      
    const limit = req.body.limit > 0?req.body.limit:5;
    Message.find().sort({createdAt:-1}).limit(limit)
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
};

module.exports = messageApis;
