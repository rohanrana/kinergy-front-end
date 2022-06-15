const Message = require("../models/messageModel.js");
const Response = require("../common_functions/response_handler");
const resMessage = require("../helper/httpResponseMessage");
const resCode = require("../helper/httpResponseCode");
const generalHelper = require("../helper/general");

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
      const { sender, message, type, status } = req.body;
      let endDate = req.body.endDate;
      let displayDays = req.body.displayDays;
      if (displayDays > 0) {
        endDate = new Date(+new Date() + displayDays * 24 * 60 * 60 * 1000);
      }
      var messageData = {
        sender: sender,
        message: message,
        displayDays: displayDays,
        endDate: endDate,
        type: generalHelper.stringToUpperCase(type),
        status: generalHelper.stringToUpperCase(status),
      };

      if (generalHelper.stringToUpperCase(type) == "DEFAULT") {

        Message.findOneAndUpdate({$or:[{ type: "default" },{ type: "DEFAULT" }]}, messageData, {
          new: true,
          upsert: true,
        })
          .lean()
          .exec((err, result) => {
            if (!err)
              Response.sendResponseWithData(
                res,
                resCode.EVERYTHING_IS_OK,
                resMessage.MESSAGE+resMessage.SAVED_SUCCESSFULLY,
                result
              );
            else
              Response.sendResponseWithoutData(res, resCode.WENT_WRONG,resMessage.WENT_WRONG);
          });
      } else {
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
    }
  },
  getMessage: (req, res, next) => {
    const limit = req.body.limit > 0 ? req.body.limit : 5;
    query = {};
    if(req.body.type){
      query = {...query,type:req.body.type};
    }
    // console.log('query',query); 
    Message.find(query)
      .sort({ createdAt: -1 })
      .limit(limit)
      .lean()
      .exec((err, result) => {
        console.log('err',err,'result',result);
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
            resMessage.MESSAGE_NOT_FOUND
          );
        else
          Response.sendResponseWithData(
            res,
            resCode.EVERYTHING_IS_OK,
            resMessage.MESSAGE_LIST,
            result
          );
      });
  },
  delete: (req, res) => {
    if (!req.body._id) {
      Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        resMessage.ENTER_MESSAGE_ID
      );
    } else {
      Message.findByIdAndDelete({ _id: req.body._id })
        .lean()
        .exec((err, result) => {
          if (!err)
            Response.sendResponseWithData(
              res,
              resCode.EVERYTHING_IS_OK,
              resMessage.MESSAGE + resMessage.DELETE,
              result
            );
          else {
            // console.log(err);
            Response.sendResponseWithoutData(
              res,
              resCode.WENT_WRONG,
              resMessage.WENT_WRONG
            );
          }
        });
    }
  },
};

module.exports = messageApis;
