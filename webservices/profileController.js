const Staff = require("../models/staffModel");
const Customer = require("../models/customersModel")
const Response = require("../common_functions/response_handler");
const resMessage = require("../helper/httpResponseMessage");
const resCode = require("../helper/httpResponseCode");
const generalHelper = require("../helper/general");
const bcrypt = require("bcryptjs");

var ObjectId = require("mongoose").Types.ObjectId;

const messageApis = {
  updatePersonalDetail: (req, res, next) => {
    if (!req.body._id) {
      Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        resMessage.ENTER_USER_ID
      );
    } else if (!ObjectId.isValid(req.body._id)) {
      Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        resMessage.ENTER_VALID_USER_ID
      );
    } else {
      const { firstName, lastName, nickName, gender, dob, ssnNumber } =
        req.body;
      let editData = { firstName, lastName, nickName, gender, dob, ssnNumber };
      Staff.findByIdAndUpdate({ _id: req.body._id }, editData, { new: true })
        .lean()
        .exec((err, result) => {
          if (err) {
            console.log(err);
            Response.sendResponseWithoutData(
              res,
              resCode.WENT_WRONG,
              resMessage.INTERNAL_SERVER_ERROR
            );
          } else {
            Response.sendResponseWithData(
              res,
              resCode.EVERYTHING_IS_OK,
              resMessage.USER + resMessage.SAVED_SUCCESSFULLY,
              result
            );
          }
        });
    }
  },
  updateContactDetail: (req, res) => {
    if (!req.body._id) {
      Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        resMessage.ENTER_USER_ID
      );
    } else if (!ObjectId.isValid(req.body._id)) {
      Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        resMessage.ENTER_VALID_USER_ID
      );
    } else {
      const { phoneType, phone, emails, address } = req.body;
      var emergencyContact = req.body.emergencyContact;
      let contact = {};
      let contactArr = [];
      let phoneArr = [];

      phoneArr = generalHelper.managePhoneAndType(phone, phoneType);

      contact = { ...contact, phone: phoneArr };
      contact = { ...contact, emails: emails };
      contact = { ...contact, address: address };
      contactArr.push(contact);
      console.log("emails", emails);
      let emergencyContactArr = [];
      if (Array.isArray(emergencyContact)) {
        emergencyContact.map((ec, ecx) => {
          let emergencyContactObj = {};

          let emergencyPhoneArr = [];
          if (ec.phone) {
            emergencyPhoneArr = generalHelper.managePhoneAndType(
              ec.phone,
              ec.phoneType
            );
          }
          emergencyContactObj = {
            ...emergencyContactObj,
            fullName: ec.fullName,
          };
          emergencyContactObj = {
            ...emergencyContactObj,
            relationship: ec.relationship,
          };
          emergencyContactObj = {
            ...emergencyContactObj,
            language: ec.language,
          };
          emergencyContactObj = {
            ...emergencyContactObj,
            phone: emergencyPhoneArr,
          };
          emergencyContactArr.push(emergencyContactObj);
        });
      }
      // contact:contactArr,

      let editData = {
        contactInfo: contactArr,
        emergencyContact: emergencyContactArr,
      };
      console.log(editData);
      Staff.findByIdAndUpdate({ _id: req.body._id }, editData, { new: true })
        .lean()
        .exec((err, result) => {
          if (err) {
            console.log(err);
            Response.sendResponseWithoutData(
              res,
              resCode.WENT_WRONG,
              resMessage.INTERNAL_SERVER_ERROR
            );
          } else {
            Response.sendResponseWithData(
              res,
              resCode.EVERYTHING_IS_OK,
              resMessage.USER + resMessage.SAVED_SUCCESSFULLY,
              result
            );
          }
        });
    }
  },
  updatePassword: (req, res) => {
    if (!req.body._id) {
      Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        resMessage.ENTER_USER_ID
      );
    } else if (!ObjectId.isValid(req.body._id)) {
      Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        resMessage.ENTER_VALID_USER_ID
      );
    } else if (req.body.newPassword != req.body.confirmPassword) {
      Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        resMessage.MATCH_CONFIRM_PASSWORD
      );
    } else {

      Staff.findOne({ _id: req.body._id })
        .lean()
        .exec((error, result) => {
          if (error) {
            Response.sendResponseWithoutData(
              res,
              resCode.WENT_WRONG,
              resMessage.INVALID_EMAIL_ID
            );
          } else {
            bcrypt.compare(
              req.body.currentPassword,
              result.password,
              (err, passwordComp) => {
                console.log('bcrypt_compare',passwordComp);
                if (!passwordComp) {
                  Response.sendResponseWithoutData(
                    res,
                    resCode.WENT_WRONG,
                    resMessage.OLD_PASSWORD_NOT_MATCH
                  );
                } else {
                  var retVal = "";
                  const saltRounds = 10;
                  retVal = req.body.newPassword;
                  bcrypt.genSalt(saltRounds, (err, salt) => {
                    bcrypt.hash(retVal, salt, (error, hash) => {
                      hashPassword = hash;
                      Staff.findByIdAndUpdate(
                        { _id: req.body._id },
                        { password: hashPassword },
                        { new: true }
                      )
                        .lean()
                        .exec((err, staffResult) => {
                          if (err) {
                            Response.sendResponseWithoutData(
                              res,
                              resCode.WENT_WRONG,
                              resMessage.INTERNAL_SERVER_ERROR
                            );
                          }else{
                            Response.sendResponseWithData(
                              res,
                              resCode.EVERYTHING_IS_OK,
                              resMessage.PASSWORD_UPDATED,
                              staffResult
                            );
                          }
                        });
                    });
                  });
                }
              }
            );
          }
        });
    }
  },
  updateOtherPreferences:(req,res)=>{
    if (!req.body._id) {
      Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        resMessage.ENTER_USER_ID
      );
    } else if (!ObjectId.isValid(req.body._id)) {
      Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        resMessage.ENTER_VALID_USER_ID
      );
    }else{
      const {automatedReminder,appointmentConfirmation,twoFactorAuthStatus,twoFactorAuthEmail,twoFactorAuthPhone} = req.body;
      let communicationPreference = {};
      let twoFactorAuth ={};
      communicationPreference = {...communicationPreference,automatedReminder:automatedReminder};
      communicationPreference = {...communicationPreference,appointmentConfirmation:appointmentConfirmation};

      twoFactorAuth = {...twoFactorAuth,status:twoFactorAuthStatus};
      twoFactorAuth = {...twoFactorAuth,email:twoFactorAuthEmail};
      twoFactorAuth = {...twoFactorAuth,phone:twoFactorAuthPhone};
      // console.log('twoFactorAuth',twoFactorAuth);
      let editData = {
        communicationPreference,twoFactorAuth
      }
      Staff.findByIdAndUpdate({ _id: req.body._id }, editData, { new: true })
        .lean()
        .exec((err, result) => {
          if (err) {
            console.log(err);
            Response.sendResponseWithoutData(
              res,
              resCode.WENT_WRONG,
              resMessage.INTERNAL_SERVER_ERROR
            );
          } else {
            Response.sendResponseWithData(
              res,
              resCode.EVERYTHING_IS_OK,
              resMessage.USER + resMessage.SAVED_SUCCESSFULLY,
              result
            );
          }
        });
    
    }
  },
  getUserDetails:(req,res)=>{
    if (!req.body._id) {
      Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        resMessage.ENTER_USER_ID
      );
    } else if (!ObjectId.isValid(req.body._id)) {
      Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        resMessage.ENTER_VALID_USER_ID
      );
    }else{
      let Model = req.body.type == "CUSTOMER" || req.body.type == "customer"?Customer:Staff;     

      Model.findOne({_id:req.body._id}).lean().exec((err,result)=>{
        if (err) {
          console.log(err);
          Response.sendResponseWithoutData(
            res,
            resCode.WENT_WRONG,
            resMessage.INTERNAL_SERVER_ERROR
          );
        } else {
          Response.sendResponseWithData(
            res,
            resCode.EVERYTHING_IS_OK,
            resMessage.USER_FOUND_SUCCESS,
            result
          );
        }
      });
    }
  }
};

module.exports = messageApis;
