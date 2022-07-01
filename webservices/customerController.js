const Customers = require("../models/customersModel.js");
const TempUsers = require("../models/tempUserModel.js");
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
const generalHelper = require('../helper/general.js');
const checkPhoneExist = async (phone) => {      
  if (phone == "") {
    return -1;
  } else {
    const inputPhone = typeof phone === "string" ? parseInt(phone) : phone;
    console.log('inputPhone',inputPhone)
      return Customers.find({phone:inputPhone}).exec();
  }
};
const checkEmailExist = async (email) => {      
  if (email == "") {
    return -1;
  } else {    
    console.log('inputemail',email)
      return Customers.find({email:email}).exec();
  }
};

const loginWithMobile = async (req, res, next) => {
  const {phone} = req.body;
  if(!phone){
    return Response.sendResponseWithoutData( res,resCode.WENT_WRONG,'Please Enter Phone Number.' );
  }
  const phoneExist = await checkPhoneExist(phone);
  console.log('phoneExist',phoneExist);
  if(phoneExist == -1){
    Response.sendResponseWithoutData( res,resCode.WENT_WRONG,'Please Enter Phone Number.' );
  }else if(phoneExist && !generalHelper.isObjectEmpty(phoneExist)){
    var otp = Math.floor(1000+Math.random() * 9000);      
      var tempUserData = {
        phone:phone,
        otp:otp
    };
    // Response.sendResponseWithoutData( res,resCode.EVERYTHING_IS_OK,phoneExist);
    TempUsers.findOneAndUpdate(
        {phone:phone},       //your condition for check
        { $set: tempUserData },       //new values you want to set
        { upsert: true, 'new': true }).exec(function (err, result){
            // if(result && !err)
            // Response.sendResponseWithData( res,resCode.EVERYTHING_IS_OK,{newUser:false,phone:phone,otp:otp,message:"Otp Sent Successfully."});
            // else
            // Response.sendResponseWithoutData( res,resCode.WENT_WRONG,resMessage.WENT_WRONG);
        });
        Customers.findOneAndUpdate(
            {phone:phone},       //your condition for check
            { $set: {otp:otp} },       //new values you want to set
            { 'new': true }).exec(function (err, result){
                if(result && !err)
                return Response.sendResponseWithData( res,resCode.EVERYTHING_IS_OK,{newUser:false,phone:phone,otp:otp,message:"Otp Sent Successfully."});
                else
                return Response.sendResponseWithoutData( res,resCode.WENT_WRONG,resMessage.WENT_WRONG);
            });

  }else{    
      var otp = Math.floor(1000+Math.random() * 9000);      
      var tempUserData = {
        phone:phone,
        otp:otp
    };
    // console.log('tempUserData',tempUserData);
      
    const otpSend = true;
    // const otpSend = sendMobileOtp();
    if(otpSend){
        TempUsers.findOneAndUpdate(
        {phone:phone},       //your condition for check
        { $set: tempUserData },       //new values you want to set
        { upsert: true, 'new': true }).exec(function (err, result){
            if(result && !err)
            Response.sendResponseWithData( res,resCode.EVERYTHING_IS_OK,{newUser:true,phone:phone,otp:otp,message:"Otp Sent Successfully."});
            else
            Response.sendResponseWithoutData( res,resCode.WENT_WRONG,resMessage.WENT_WRONG);
        });
    }else{
        Response.sendResponseWithoutData( res,resCode.WENT_WRONG,'Otp not Sent. Please try again later.' );
    }
  }
  
};

const loginWithEmail = async (req, res, next) => {
  const {email} = req.body;
  if(!email){
    return Response.sendResponseWithoutData( res,resCode.WENT_WRONG,resMessage.EMAIL_REQUIRED);
  }
  const emailExist = await checkEmailExist(email);
  console.log('emailExist',emailExist);
  if(emailExist == -1){
    Response.sendResponseWithoutData( res,resCode.WENT_WRONG,resMessage.EMAIL_REQUIRED);
  }else if(emailExist && !generalHelper.isObjectEmpty(emailExist)){
    var otp = Math.floor(1000+Math.random() * 9000);      
      var tempUserData = {
        email:email,
        otp:otp
    };    
    // Response.sendResponseWithoutData( res,resCode.EVERYTHING_IS_OK,emailExist);
    TempUsers.findOneAndUpdate(
        {email:email},       //your condition for check
        { $set: tempUserData },       //new values you want to set
        { upsert: true, 'new': true }).exec(function (err, result){
            // if(result && !err)
            // Response.sendResponseWithData( res,resCode.EVERYTHING_IS_OK,{newUser:false,email:email,otp:otp,message:"Otp Sent Successfully."});
            // else
            // Response.sendResponseWithoutData( res,resCode.WENT_WRONG,resMessage.WENT_WRONG);
        });
        Customers.findOneAndUpdate(
            {email:email},       //your condition for check
            { $set: {otp:otp} },       //new values you want to set
            { 'new': true }).exec(function (err, result){
                if(result && !err)
                return Response.sendResponseWithData( res,resCode.EVERYTHING_IS_OK,{newUser:false,email:email,otp:otp,message:"Otp Sent Successfully."});
                else
                return Response.sendResponseWithoutData( res,resCode.WENT_WRONG,resMessage.WENT_WRONG);
            });

  }else{    
      var otp = Math.floor(1000+Math.random() * 9000);      
      var tempUserData = {
        email:email,
        otp:otp
    };
    // console.log('tempUserData',tempUserData);
    const otpSend = false;
    message.sendemail(email,"OTP","Your email id is " + email + " and OTP is " + otp,(err, success) => {
      console.log("email error======", err,success, otp);
      const otpSend = true;
      //          Response.sendResponseWithData(res, resCode.WENT_WRONG, resMessage.INTERNAL_SERVER_ERROR,err)

      //     }  
      //   else{
      // console.log("emaillllll", success, result,otp)
      //  callback(null, success)
      // Response.sendResponseWithData(res,resCode.EVERYTHING_IS_OK,resMessage.LOGIN_SUCCESS,res2,token);
      // }

       // const otpSend = sendMobileOtp();
    if(otpSend){
      TempUsers.findOneAndUpdate(
      {email:email},       //your condition for check
      { $set: tempUserData },       //new values you want to set
      { upsert: true, 'new': true }).exec(function (err, result){
          if(result && !err)
          Response.sendResponseWithData( res,resCode.EVERYTHING_IS_OK,{newUser:true,email:email,otp:otp,message:"Otp Sent Successfully."});
          else
          Response.sendResponseWithoutData( res,resCode.WENT_WRONG,resMessage.WENT_WRONG);
      });
  }else{
      Response.sendResponseWithoutData( res,resCode.WENT_WRONG,'Otp not Sent. Please try again later.' );
  }
    });
    
   
  }
  
};

const registerCustomer = (req,res,next)=>{
    const {firstName,lastName,email,phone,dob,gender,customerType} = req.body;
    var customerData = new Customers({firstName:firstName,lastName:lastName,email:email,phone:phone,dob:dob,gender:gender,customerType:customerType});
    customerData.save((err,result)=>{
        if(!err){
          var token = jwt.sign(
            {
              _id: result._id,
              email: result.email,
              password: result.password,
            },
            config().secret_key
          );
          result.jwtToken = token;
          result.lastLoginIp  = req.socket.remoteAddress,
          result.save();
            Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK,'Customer register successfully.',result);
        }else{
            Response.sendResponseWithoutData(res, resCode.WENT_WRONG,resMessage.WENT_WRONG);
        }
    })
}

const verifyMobileOtp = (req,res,next)=>{
    const {phone,otp} = req.body;
    if(!phone){
      return Response.sendResponseWithoutData( res,resCode.WENT_WRONG,'Please Enter Phone Number.' );
    }
        TempUsers.find({phone:phone,otp:otp}).lean().exec((err,result)=>{
            console.log('findPhoneOtp',err,result.length);
            if(err){
                Response.sendResponseWithoutData(res,resCode.WENT_WRONG,resCode.WENT_WRONG);
            }else if(result.length == 0){
                Response.sendResponseWithData(res,resCode.EVERYTHING_IS_OK,'Invalid Otp.',result);
            }else{               
                Customers.findOne({phone:phone},function(customerErr,customerResult){
                    console.log('findCustomerByPhone',customerResult);
                    if(!customerErr && customerResult){
                        var token = jwt.sign(
                            {
                              _id: customerResult._id,
                              email: customerResult.email,
                              password: customerResult.password,
                            },
                            config().secret_key
                          );
                          console.log('token1',token);
                          try{
                            customerResult.jwtToken=token,
                            customerResult.lastLoginIp= req.socket.remoteAddress,
                            customerResult.otp = otp,
                            customerResult.save();
                          }catch(errorUpdateCustomer){
                            console.log('errorUpdateCustomer',errorUpdateCustomer);
                          }                          
                          Response.sendResponseWithData(res,resCode.EVERYTHING_IS_OK,'Otp Verified Successfully');
                    }else{
                        Response.sendResponseWithData(res,resCode.EVERYTHING_IS_OK,'Otp Verified Successfully');
                    }
                })
            }
        })
}

const verifyEmailOtp = (req,res,next)=>{
  const {email,otp} = req.body;
  if(!email){
    return Response.sendResponseWithoutData( res,resCode.WENT_WRONG,resMessage.EMAIL_REQUIRED);
  }
      TempUsers.find({email:email,otp:otp}).lean().exec((err,result)=>{
          console.log('findEmailOtp',err,result.length);
          if(err){
              Response.sendResponseWithoutData(res,resCode.WENT_WRONG,resCode.WENT_WRONG);
          }else if(result.length == 0){
              Response.sendResponseWithData(res,resCode.EVERYTHING_IS_OK,'Invalid Otp.',result);
          }else{               
              Customers.findOne({email:email},function(customerErr,customerResult){
                  console.log('findCustomerByEmail',customerResult);
                  if(!customerErr && customerResult && customerResult){
                      var token = jwt.sign(
                          {
                            _id: customerResult._id,
                            email: customerResult.email,
                            password: customerResult.password,
                          },
                          config().secret_key
                        );
                        console.log('token1',token);
                        try{
                          customerResult.jwtToken=token,
                          customerResult.lastLoginIp= req.socket.remoteAddress,
                          customerResult.otp = otp,
                          customerResult.save();
                        }catch(errorUpdateCustomer){
                          console.log('errorUpdateCustomer',errorUpdateCustomer);
                        }   
                        Response.sendResponseWithData(res,resCode.EVERYTHING_IS_OK,'Otp Verified Successfully');
                  }else{
                      Response.sendResponseWithData(res,resCode.EVERYTHING_IS_OK,'Otp Verified Successfully');
                  }
              })
          }
      })
}
module.exports = {
  loginWithMobile,
  registerCustomer,
  verifyMobileOtp,
  loginWithEmail,
  verifyEmailOtp
};
