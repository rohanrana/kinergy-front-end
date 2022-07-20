const Customers = require("../models/customersModel.js");
const TempUsers = require("../models/tempUserModel.js");
const MedicalProviderInformationModel = require("../models/medicalProviderInformationModel");
const Response = require("../common_functions/response_handler.js");
const resCode = require("../helper/httpResponseCode.js");
const resMessage = require("../helper/httpResponseMessage.js");
const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");
const config = require("../config/env/config.js");
const mongoose = require("mongoose");
const message = require("../common_functions/message.js");

const path = require("path");
const fs = require("fs");
const multer = require("multer");
const maxSize = 1 * 1024 * 1024;
const generalHelper = require("../helper/general.js");

const makeContactArray = async (phoneType, phone, primary) => {
  const returnArr = [0, 1, 0];
  phoneType && phoneType.length > 0 && phoneType.map((pt, ptx) => {});
};
const checkPhoneExist = async (phone) => {
  if (phone == "") {
    return -1;
  } else {
    const inputPhone = typeof phone === "string" ? parseInt(phone) : phone;
    console.log("inputPhone", inputPhone);
    return Customers.find({ phone: inputPhone }).exec();
  }
};
const checkEmailExist = async (email) => {
  if (email == "") {
    return -1;
  } else {
    console.log("inputemail", email);
    return Customers.find({ email: email }).exec();
  }
};

const loginWithMobile = async (req, res, next) => {
  const { phone } = req.body;
  if (!phone) {
    return Response.sendResponseWithoutData(
      res,
      resCode.WENT_WRONG,
      "Please Enter Phone Number."
    );
  }
  const phoneExist = await checkPhoneExist(phone);
  console.log("phoneExist", phoneExist);
  if (phoneExist == -1) {
    Response.sendResponseWithoutData(
      res,
      resCode.WENT_WRONG,
      "Please Enter Phone Number."
    );
  } else if (phoneExist && !generalHelper.isObjectEmpty(phoneExist)) {
    var otp = Math.floor(1000 + Math.random() * 9000);
    var tempUserData = {
      phone: phone,
      otp: otp,
    };
    // Response.sendResponseWithoutData( res,resCode.EVERYTHING_IS_OK,phoneExist);
    TempUsers.findOneAndUpdate(
      { phone: phone }, //your condition for check
      { $set: tempUserData }, //new values you want to set
      { upsert: true, new: true }
    ).exec(function (err, result) {
      // if(result && !err)
      // Response.sendResponseWithData( res,resCode.EVERYTHING_IS_OK,{newUser:false,phone:phone,otp:otp,message:"Otp Sent Successfully."});
      // else
      // Response.sendResponseWithoutData( res,resCode.WENT_WRONG,resMessage.WENT_WRONG);
    });
    Customers.findOneAndUpdate(
      { phone: phone }, //your condition for check
      { $set: { otp: otp } }, //new values you want to set
      { new: true }
    ).exec(function (err, result) {
      if (result && !err)
        return Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, {
          newUser: false,
          phone: phone,
          otp: otp,
          message: "Otp Sent Successfully.",
        });
      else
        return Response.sendResponseWithoutData(
          res,
          resCode.WENT_WRONG,
          resMessage.WENT_WRONG
        );
    });
  } else {
    var otp = Math.floor(1000 + Math.random() * 9000);
    var tempUserData = {
      phone: phone,
      otp: otp,
    };
    // console.log('tempUserData',tempUserData);

    const otpSend = true;
    // const otpSend = sendMobileOtp();
    if (otpSend) {
      TempUsers.findOneAndUpdate(
        { phone: phone }, //your condition for check
        { $set: tempUserData }, //new values you want to set
        { upsert: true, new: true }
      ).exec(function (err, result) {
        if (result && !err)
          Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, {
            newUser: true,
            phone: phone,
            otp: otp,
            message: "Otp Sent Successfully.",
          });
        else
          Response.sendResponseWithoutData(
            res,
            resCode.WENT_WRONG,
            resMessage.WENT_WRONG
          );
      });
    } else {
      Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        "Otp not Sent. Please try again later."
      );
    }
  }
};

const loginWithEmail = async (req, res, next) => {
  const { email } = req.body;
  if (!email) {
    return Response.sendResponseWithoutData(
      res,
      resCode.WENT_WRONG,
      resMessage.EMAIL_REQUIRED
    );
  }
  const emailExist = await checkEmailExist(email);
  console.log("emailExist", emailExist);
  if (emailExist == -1) {
    Response.sendResponseWithoutData(
      res,
      resCode.WENT_WRONG,
      resMessage.EMAIL_REQUIRED
    );
  } else if (emailExist && !generalHelper.isObjectEmpty(emailExist)) {
    var otp = Math.floor(1000 + Math.random() * 9000);
    var tempUserData = {
      email: email,
      otp: otp,
    };
    // Response.sendResponseWithoutData( res,resCode.EVERYTHING_IS_OK,emailExist);
    TempUsers.findOneAndUpdate(
      { email: email }, //your condition for check
      { $set: tempUserData }, //new values you want to set
      { upsert: true, new: true }
    ).exec(function (err, result) {
      // if(result && !err)
      // Response.sendResponseWithData( res,resCode.EVERYTHING_IS_OK,{newUser:false,email:email,otp:otp,message:"Otp Sent Successfully."});
      // else
      // Response.sendResponseWithoutData( res,resCode.WENT_WRONG,resMessage.WENT_WRONG);
    });
    Customers.findOneAndUpdate(
      { email: email }, //your condition for check
      { $set: { otp: otp } }, //new values you want to set
      { new: true }
    ).exec(function (err, result) {
      if (result && !err)
        return Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, {
          newUser: false,
          email: email,
          otp: otp,
          message: "Otp Sent Successfully.",
        });
      else
        return Response.sendResponseWithoutData(
          res,
          resCode.WENT_WRONG,
          resMessage.WENT_WRONG
        );
    });
  } else {
    var otp = Math.floor(1000 + Math.random() * 9000);
    var tempUserData = {
      email: email,
      otp: otp,
    };
    // console.log('tempUserData',tempUserData);
    const otpSend = false;
    message.sendemail(
      email,
      "OTP",
      "Your email id is " + email + " and OTP is " + otp,
      (err, success) => {
        console.log("email error======", err, success, otp);
        const otpSend = true;
        //          Response.sendResponseWithData(res, resCode.WENT_WRONG, resMessage.INTERNAL_SERVER_ERROR,err)

        //     }
        //   else{
        // console.log("emaillllll", success, result,otp)
        //  callback(null, success)
        // Response.sendResponseWithData(res,resCode.EVERYTHING_IS_OK,resMessage.LOGIN_SUCCESS,res2,token);
        // }

        // const otpSend = sendMobileOtp();
        if (otpSend) {
          TempUsers.findOneAndUpdate(
            { email: email }, //your condition for check
            { $set: tempUserData }, //new values you want to set
            { upsert: true, new: true }
          ).exec(function (err, result) {
            if (result && !err)
              Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, {
                newUser: true,
                email: email,
                otp: otp,
                message: "Otp Sent Successfully.",
              });
            else
              Response.sendResponseWithoutData(
                res,
                resCode.WENT_WRONG,
                resMessage.WENT_WRONG
              );
          });
        } else {
          Response.sendResponseWithoutData(
            res,
            resCode.WENT_WRONG,
            "Otp not Sent. Please try again later."
          );
        }
      }
    );
  }
};

const registerCustomer = (req, res, next) => {
  const { firstName, lastName, email, phone, dob, gender, customerType } =
    req.body;
  var customerData = new Customers({
    firstName: firstName,
    lastName: lastName,
    email: email,
    phone: phone,
    dob: dob,
    gender: gender,
    customerType: customerType,
  });
  customerData.save((err, result) => {
    if (!err) {
      var token = jwt.sign(
        {
          _id: result._id,
          email: result.email,
          password: result.password,
        },
        config().secret_key
      );
      result.jwtToken = token;
      (result.lastLoginIp = req.socket.remoteAddress), result.save();
      Response.sendResponseWithData(
        res,
        resCode.EVERYTHING_IS_OK,
        "Customer register successfully.",
        result
      );
    } else {
      Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        resMessage.WENT_WRONG
      );
    }
  });
};

const registerSomeOneCustomer = (req, res, next) => {
  const {
    firstName,
    lastName,
    email,
    phone,
    dob,
    gender,
    customerType,
    refCustomer,
  } = req.body;
  var customerData = new Customers({
    firstName: firstName,
    lastName: lastName,
    email: email,
    phone: phone,
    dob: dob,
    gender: gender,
    customerType: customerType,
    refCustomer: refCustomer,
  });
  customerData.save((err, result) => {
    if (!err) {
      Response.sendResponseWithData(
        res,
        resCode.EVERYTHING_IS_OK,
        "Customer add successfully.",
        result
      );
    } else {
      Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        resMessage.WENT_WRONG
      );
    }
  });
};

const verifyMobileOtp = (req, res, next) => {
  const { phone, otp } = req.body;
  if (!phone) {
    return Response.sendResponseWithoutData(
      res,
      resCode.WENT_WRONG,
      "Please Enter Phone Number."
    );
  }
  TempUsers.find({ phone: phone, otp: otp })
    .lean()
    .exec((err, result) => {
      console.log("findPhoneOtp", err, result.length);
      if (err) {
        Response.sendResponseWithoutData(
          res,
          resCode.WENT_WRONG,
          resCode.WENT_WRONG
        );
      } else if (result.length == 0) {
        Response.sendResponseWithData(
          res,
          resCode.EVERYTHING_IS_OK,
          "Invalid Otp.",
          result
        );
      } else {
        Customers.findOne(
          { phone: phone },
          function (customerErr, customerResult) {
            console.log("findCustomerByPhone", customerResult);
            if (!customerErr && customerResult) {
              var token = jwt.sign(
                {
                  _id: customerResult._id,
                  email: customerResult.email,
                  password: customerResult.password,
                },
                config().secret_key
              );
              console.log("token1", token);
              try {
                (customerResult.jwtToken = token),
                  (customerResult.lastLoginIp = req.socket.remoteAddress),
                  (customerResult.otp = otp),
                  customerResult.save();
              } catch (errorUpdateCustomer) {
                console.log("errorUpdateCustomer", errorUpdateCustomer);
              }
              Response.sendResponseWithData(
                res,
                resCode.EVERYTHING_IS_OK,
                "Otp Verified Successfully"
              );
            } else {
              Response.sendResponseWithData(
                res,
                resCode.EVERYTHING_IS_OK,
                "Otp Verified Successfully"
              );
            }
          }
        );
      }
    });
};

const verifyEmailOtp = (req, res, next) => {
  const { email, otp } = req.body;
  if (!email) {
    return Response.sendResponseWithoutData(
      res,
      resCode.WENT_WRONG,
      resMessage.EMAIL_REQUIRED
    );
  }
  TempUsers.find({ email: email, otp: otp })
    .lean()
    .exec((err, result) => {
      console.log("findEmailOtp", err, result.length);
      if (err) {
        Response.sendResponseWithoutData(
          res,
          resCode.WENT_WRONG,
          resCode.WENT_WRONG
        );
      } else if (result.length == 0) {
        Response.sendResponseWithData(
          res,
          resCode.EVERYTHING_IS_OK,
          "Invalid Otp.",
          result
        );
      } else {
        Customers.findOne(
          { email: email },
          function (customerErr, customerResult) {
            console.log("findCustomerByEmail", customerResult);
            if (!customerErr && customerResult && customerResult) {
              var token = jwt.sign(
                {
                  _id: customerResult._id,
                  email: customerResult.email,
                  password: customerResult.password,
                },
                config().secret_key
              );
              console.log("token1", token);
              try {
                (customerResult.jwtToken = token),
                  (customerResult.lastLoginIp = req.socket.remoteAddress),
                  (customerResult.otp = otp),
                  customerResult.save();
              } catch (errorUpdateCustomer) {
                console.log("errorUpdateCustomer", errorUpdateCustomer);
              }
              Response.sendResponseWithData(
                res,
                resCode.EVERYTHING_IS_OK,
                "Otp Verified Successfully"
              );
            } else {
              Response.sendResponseWithData(
                res,
                resCode.EVERYTHING_IS_OK,
                "Otp Verified Successfully"
              );
            }
          }
        );
      }
    });
};

// Client Side
const editClientDetails = (req, res) => {
  const {
    firstName,
    lastName,
    nickName,
    gender,
    dob,
    ssnNumber,
    phone,
    phone2,
    email,
    address,
    state,
    city,
    pincode,
    automatedReminder,
    appointmentConfirmation,
    occupation,
    employmentStatus,
  } = req.body;
  var clientData = {
    firstName: firstName,
    lastName: lastName,
    nickName: nickName,
    gender: gender,
    dob: dob,
    ssnNumber: ssnNumber,
    phone: phone,
    phone2: phone2,
    email: email,
    address: address,
    state: state,
    city: city,
    pincode: pincode,
    automatedReminder: automatedReminder,
    appointmentConfirmation: appointmentConfirmation,
    occupation: occupation,
    employmentStatus: employmentStatus,
  };
  Customers.findByIdAndUpdate({ _id: req.body._id }, clientData, { new: true })
    .lean()
    .exec((err, result) => {
      if (!err) {
        Response.sendResponseWithData(
          res,
          resCode.EVERYTHING_IS_OK,
          "Customer update successfully.",
          result
        );
      } else {
        Response.sendResponseWithoutData(
          res,
          resCode.WENT_WRONG,
          resMessage.WENT_WRONG
        );
      }
    });
};

const getList = (req, res) => {
  Customers.find({})
    .lean()
    .exec((err, result) => {
      if (err) {
        Response.sendResponseWithoutData(
          res,
          resCode.WENT_WRONG,
          resMessage.WENT_WRONG
        );
      } else if (result.length == 0) {
        Response.sendResponseWithData(
          res,
          resCode.EVERYTHING_IS_OK,
          "Customer not found .",
          result
        );
      } else {
        Response.sendResponseWithData(
          res,
          resCode.EVERYTHING_IS_OK,
          "Customer found successfully.",
          result
        );
      }
    });
};

const getCustomerById = (req, res) => {
  Customers.find({ _id: req.body._id })
    .lean()
    .exec((err, result) => {
      if (err) {
        Response.sendResponseWithoutData(
          res,
          resCode.WENT_WRONG,
          resMessage.WENT_WRONG
        );
      } else if (!result || result.length == 0) {
        Response.sendResponseWithData(
          res,
          resCode.EVERYTHING_IS_OK,
          "Customer not found ."
        );
      } else {
        try {
          console.log(result[0].emergencyContact);
          delete result[0].emergencyContact;
        } catch (err) {
          console.log("delete emergencyContact", err);
        }

        Response.sendResponseWithData(
          res,
          resCode.EVERYTHING_IS_OK,
          "Customer found successfully.",
          result
        );
      }
    });
};

const getCustomerEmergencyContactById = (req, res) => {
  if (!req.body._id) {
    Response.sendResponseWithoutData(
      res,
      resCode.WENT_WRONG,
      resMessage.ENTER_USER_ID
    );
  } else if (!generalHelper.checkObjectId(req.body._id)) {
    Response.sendResponseWithoutData(
      res,
      resCode.WENT_WRONG,
      resMessage.ENTER_VALID_USER_ID
    );
  } else {
    Customers.find({ _id: req.body._id })
      .lean()
      .exec((err, result) => {
        if (err) {
          Response.sendResponseWithoutData(
            res,
            resCode.WENT_WRONG,
            resMessage.WENT_WRONG
          );
        } else if (!result || result.length == 0) {
          Response.sendResponseWithData(
            res,
            resCode.EVERYTHING_IS_OK,
            "Customer not found ."
          );
        } else {
          Response.sendResponseWithData(
            res,
            resCode.EVERYTHING_IS_OK,
            "Customer Emergency Contact found successfully.",
            result[0].emergencyContact
          );
        }
      });
  }
};

const makeEmergencyData = async (emergencyContact) => {
  var returnArr = [];
  emergencyContact &&
    emergencyContact.length > 0 &&
    emergencyContact.map(async (FN, FNX) => {
      returnArr.push(returnArr);
    });
  return returnArr;
};

const updateEmergencyContact = async (req, res) => {
  if (!req.body._id) {
    Response.sendResponseWithoutData(
      res,
      resCode.WENT_WRONG,
      resMessage.ENTER_USER_ID
    );
  } else if (!generalHelper.checkObjectId(req.body._id)) {
    Response.sendResponseWithoutData(
      res,
      resCode.WENT_WRONG,
      resMessage.ENTER_VALID_USER_ID
    );
  } else {
    var { fullName, relationship, language, phoneType, altPhone, phone } =
      req.body;
    console.log("body", req.body);
    let emergencyContactArr = [];
    if (Array.isArray(fullName)) {
      fullName.map((ec, ecx) => {
        let emergencyContactObj = {};
        emergencyContactObj = {
          ...emergencyContactObj,
          fullName: fullName[ecx],
        };
        emergencyContactObj = {
          ...emergencyContactObj,
          relationship: relationship[ecx],
        };
        emergencyContactObj = {
          ...emergencyContactObj,
          language: language[ecx],
        };

        emergencyContactObj = {
          ...emergencyContactObj,
          phone: [
            {
              phoneType: phoneType[ecx],
              phone: phone[ecx],
            },
          ],
        };

        // emergencyContactObj = {...emergencyContactObj, phoneType: phoneType[ecx], };
        // emergencyContactObj = { ...emergencyContactObj, phone: phone[ecx] };

        emergencyContactObj = {
          ...emergencyContactObj,
          altPhone: altPhone[ecx],
        };

        emergencyContactArr.push(emergencyContactObj);
      });
    }
    let editData = {
      emergencyContact: emergencyContactArr,
    };
    console.log("editData", editData);
    Customers.findByIdAndUpdate({ _id: req.body._id }, editData, { new: true })
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
            "User contect save successfully.",
            result.emergencyContact
          );
        }
      });
  }
};
const communicationPreferences = async (req, res) => {
  const { customerId, appointmentReminders, appointmentConfirmation } =
    req.body;
  // console.log("phoneType",contactInfo, phoneType,phone,primary);
  var customerDetails = {
    appointmentReminders: appointmentReminders,
    appointmentConfirmation: appointmentConfirmation,
  };
  console.log("customerDetails", customerDetails);
  Customers.findByIdAndUpdate({ _id: customerId }, customerDetails, {
    new: true,
  }).exec((err, result) => {
    console.log("err", err);
    if (!err) {
      Response.sendResponseWithData(
        res,
        resCode.EVERYTHING_IS_OK,
        "Customer communication preferences update successfully.",
        result
      );
    } else {
      Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        resMessage.WENT_WRONG
      );
    }
  });
};

const addClientDetail = async (req, res) => {
  const {
    customerId,
    firstName,
    lastName,
    nickName,
    dob,
    gender,
    ssnNumber,
    contactInfo,
    primaryEmail,
    secondaryEmail,
    address,
    state,
    city,
    pincode,
    occupation,
    employmentStatus,
    phoneType,
    phone,
    primary,
  } = req.body;
  // console.log("phoneType",contactInfo, phoneType,phone,primary);
  var customerDetails = {
    firstName: firstName,
    lastName: lastName,
    nickName: nickName,
    dob: dob,
    gender: gender,
    ssnNumber: ssnNumber,
    primaryEmail: primaryEmail,
    secondaryEmail: secondaryEmail,
    address: address,
    state: state,
    city: city,
    pincode: pincode,
    occupation: occupation,
    employmentStatus: employmentStatus,
    primaryEmail: primaryEmail,
    secondaryEmail: secondaryEmail,
    contactInformation: generalHelper.managePhoneAndType(
      phone,
      phoneType,
      primary
    ),
  };
  console.log("customerDetails", customerDetails);
  Customers.findByIdAndUpdate({ _id: customerId }, customerDetails, {
    new: true,
  }).exec((err, result) => {
    console.log("err", err);
    if (!err) {
      Response.sendResponseWithData(
        res,
        resCode.EVERYTHING_IS_OK,
        "Customer update successfully.",
        result
      );
    } else {
      Response.sendResponseWithoutData(
        res,
        resCode.WENT_WRONG,
        resMessage.WENT_WRONG
      );
    }
  });
};

const deleteEmergencyContactByContactId = (req, res) => {
  if (!req.body.contactId) {
    Response.sendResponseWithoutData(
      res,
      resCode.WENT_WRONG,
      "Please enter contact id."
    );
  } else if (!generalHelper.checkObjectId(req.body.contactId)) {
    Response.sendResponseWithoutData(
      res,
      resCode.WENT_WRONG,
      "Please enter valid contact id."
    );
  } else if (!req.body.customerId) {
    Response.sendResponseWithoutData(
      res,
      resCode.WENT_WRONG,
      "Please enter customer id."
    );
  } else if (!generalHelper.checkObjectId(req.body.customerId)) {
    Response.sendResponseWithoutData(
      res,
      resCode.WENT_WRONG,
      "Please enter valid customer id."
    );
  } else {
    Customers.findByIdAndUpdate(
      { _id: req.body.customerId },
      { $pull: { emergencyContact: { _id: req.body.contactId } } },
      { new: true }
    )
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
            result.emergencyContact
          );
        }
      });
  }
};

const clientLock = async (req, res) => {
  if (!req.body._id) {
    return await Response.sendResponseWithoutData(
      res,
      resCode.WENT_WRONG,
      "Please enter client id"
    );
  } else if (!generalHelper.checkObjectId(req.body._id)) {
    Response.sendResponseWithoutData(
      res,
      resCode.WENT_WRONG,
      "Please enter valid client id"
    );
  }

  Customers.findByIdAndUpdate(
    { _id: req.body._id },
    { status: "LOCK" },
    { new: true }
  )
    .lean()
    .exec((err, result) => {
      if (!err) {
        Response.sendResponseWithData(
          res,
          resCode.EVERYTHING_IS_OK,
          "Client Status Changed Successfully.",
          result
        );
      } else
        Response.sendResponseWithoutData(
          res,
          resCode.WENT_WRONG,
          resMessage.WENT_WRONG
        );
    });
};

const getExistingProfileList = async (req, res) => {
  var ID = await req.body.customerId;
  if (!ID) {
    return await Response.sendResponseWithoutData(
      res,
      resCode.WENT_WRONG,
      "Please Enter Customer Id."
    );
  } else if (!generalHelper.checkObjectId(ID)) {
    return await Response.sendResponseWithoutData(
      res,
      resCode.WENT_WRONG,
      "Please Enter Valid Customer Id."
    );
  } else {
    await Customers.find({ refCustomer: ID })
      .select("_id firstName lastName nickName email")
      .exec(async (err, result) => {
        console.log(err, result);
        if (err)
          Response.sendResponseWithoutData(
            res,
            resCode.WENT_WRONG,
            resMessage.WENT_WRONG
          );
        else if (!result || result.length == 0 || result == [])
          Response.sendResponseWithoutData(
            res,
            resCode.WENT_WRONG,
            "Customer Not Found."
          );
        else {
          return await Response.sendResponseWithData(
            res,
            resCode.EVERYTHING_IS_OK,
            "Customer Found Successfully.",
            result
          );
        }
      });
  }
};

const clientPortalEmergencyContact = async (req, res) => {
  if (!req.body.customerId) {
    Response.sendResponseWithoutData(
      res,
      resCode.WENT_WRONG,
      resMessage.ENTER_USER_ID
    );
  } else if (!generalHelper.checkObjectId(req.body.customerId)) {
    Response.sendResponseWithoutData(
      res,
      resCode.WENT_WRONG,
      resMessage.ENTER_VALID_USER_ID
    );
  } else {
    var { customerId, fullName, relationship, language, phoneType, phone } =
      req.body;
    let editData = {
      emergencyContact: {
        fullName: fullName,
        relationship: relationship,
        language: language,
        phone: generalHelper.managePhoneAndType(phone, phoneType),
      },
    };

    console.log("editData", editData);
    Customers.findByIdAndUpdate({ _id: customerId }, editData, { new: true })
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
            "User emergency contect save successfully.",
            result.emergencyContact
          );
        }
      });
  }
};
const addMedicalToClient = async (customerId, medicalProviderRecord) => {
  if (customerId && medicalProviderRecord) {
    Customers.findByIdAndUpdate(
      { _id: customerId },
      { $pull: { medicalProviderInformation: medicalProviderRecord } },
      { new: true }
    ).lean().exec();
  }
};
const medicalProviderInformation = async (req, res) => {
  if (!(await req.body.customerId)) {
    return await Response.sendResponseWithoutData(
      res,
      resCode.WENT_WRONG,
      resMessage.ENTER_USER_ID
    );
  } else if (!(await generalHelper.checkObjectId(req.body.customerId))) {
    return await Response.sendResponseWithoutData(
      res,
      resCode.WENT_WRONG,
      resMessage.ENTER_VALID_USER_ID
    );
  } else {
    var {
      customerId,
      familyDoctorName,
      familyDoctorPhone,
      referringDoctorName,
      referringDoctorPhone,
      lastPhysicalExamination,
    } = req.body;
    let MedicalProviderData = await new MedicalProviderInformationModel({
      familyDoctorName: familyDoctorName,
      familyDoctorPhone: familyDoctorPhone,
      referringDoctorName: referringDoctorName,
      referringDoctorPhone: referringDoctorPhone,
      lastPhysicalExamination: lastPhysicalExamination,
    });

    MedicalProviderData.save(async (err, result) => {
      if (err) {
        console.log(err);
        return await Response.sendResponseWithoutData(
          res,
          resCode.WENT_WRONG,
          resMessage.INTERNAL_SERVER_ERROR
        );
      } else {
        addMedicalToClient(customerId, result._id);
        return await Response.sendResponseWithData(
          res,
          resCode.EVERYTHING_IS_OK,
          "User medical provider information save successfully.",
          result
        );
      }
    });
  }
};

module.exports = {
  loginWithMobile,
  registerCustomer,
  verifyMobileOtp,
  loginWithEmail,
  verifyEmailOtp,
  editClientDetails,
  getList,
  getCustomerById,
  updateEmergencyContact,
  deleteEmergencyContactByContactId,
  getCustomerEmergencyContactById,
  clientLock,
  registerSomeOneCustomer,
  getExistingProfileList,
  addClientDetail,
  communicationPreferences,
  clientPortalEmergencyContact,
  medicalProviderInformation,
};
