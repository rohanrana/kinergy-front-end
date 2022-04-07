const Staffs = require('../models/staffModel.js');
const Customers = require('../models/customersModel.js');
const Roles = require('../models/roleModel.js');
const Response = require('../common_functions/response_handler.js')
const resCode = require('../helper/httpResponseCode.js')
const resMessage = require('../helper/httpResponseMessage.js')
const bcrypt = require('bcryptjs')
const waterfall = require('async-waterfall')
const jwt = require('jsonwebtoken')
const config = require('../config/env/config.js')
const mongoose = require('mongoose');
const message = require('../common_functions/message.js');

const staffApis = {
    //=====signup==========
    'signup': (req, res) => {
        console.log("erquest is=======>>>>", req.body);
        if (!req.body.email)
            Response.sendResponseWithoutData(res, resCode.INTERNAL_SERVER_ERROR, 'Please enter the email.');
        else {
            if (req.body.type == "CUSTOMER") {

                Customers.findOne({ email: req.body.email, status: "ACTIVE", }, (err3, result3) => {
                    console.log("fdgghg----",err3,result3)
                    if (err3)
                        Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.INTERNAL_SERVER_ERROR)
                    else if (result3)
                        Response.sendResponseWithoutData(res, resCode.ALREADY_EXIST, resMessage.ALL_READY_EXIST_EMAIL)
                    else {
                        var retVal = "";
                        const saltRounds = 10;
                        retVal = req.body.password;
                        bcrypt.genSalt(saltRounds, (err, salt) => {
                            bcrypt.hash(retVal, salt, (error, hash) => {
                                req.body.password = hash;
                                console.log("hash is " + hash)
                                console.log("orig pass" + req.body.password)
                                // console.log("orig pass" + req.body.Account)
                                let customer = new Customers(req.body);
                                customer.save((error, result) => {
                                    if (error) {
                                        console.log(error)
                                        Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.INTERNAL_SERVER_ERROR)
                                    } else {
                                        Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, "Signed up successfully.", result)
                                    }
                                })
                            })
                        })

                    }
                })
            }
            else {
                Staffs.findOne({ email: req.body.email, status: "ACTIVE", }, (err3, result3) => {
                    if (err3)
                        Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.INTERNAL_SERVER_ERROR)
                    else if (result3)
                        Response.sendResponseWithoutData(res, resCode.ALREADY_EXIST, resMessage.ALL_READY_EXIST_EMAIL)
                    else {
                        var retVal = "";
                        const saltRounds = 10;
                        retVal = req.body.password;
                        bcrypt.genSalt(saltRounds, (err, salt) => {
                            bcrypt.hash(retVal, salt, (error, hash) => {
                                req.body.password = hash;
                                console.log("hash is " + hash)
                                console.log("orig pass" + req.body.password)
                                // console.log("orig pass" + req.body.Account)
                                let staffs = new Staffs(req.body);
                                staffs.save((error, result) => {
                                    if (error) {
                                        console.log(error)
                                        Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.INTERNAL_SERVER_ERROR)
                                    } else {
                                        Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, "Signed up successfully.", result)
                                    }
                                })
                            })
                        })

                    }
                })
            }

        }
    },
    //=================login api =====
    'login': (req, res) => {
        console.log("login request====++", req.body)
        var otp=Math.floor(1000 + Math.random() * 9000);

        if (!req.body)
            Response.sendResponseWithoutData(res, resCode.INTERNAL_SERVER_ERROR, 'Please enter the details.');
        else {
           // console.log("else entered login", req.body, otp)
            if (req.body.type != "CUSTOMER" ) {
                Staffs.findOne({ email: req.body.email, status: "ACTIVE" }).lean().exec((error, result) => {
                    //console.log(error, result, req.body, "sghfsdfsdffsdfh")
                    if (error)
                        Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.WENT_WRONG);
                    else if (!result) {
                        Response.sendResponseWithoutData(res, resCode.UNAUTHORIZED, resMessage.NOT_MATCH);
                    }
                    else {
                        bcrypt.compare(req.body.password, result.password, (err, res1) => {
                            if (res1) {
                               // console.log("result is " + JSON.stringify(result.jwtToken))
                                // if (!result.jwtToken) {
                                console.log("secret key is " + config().secret_key, (req.headers['x-forwarded-for'] || '').split(',').pop().trim() ||
                                    req.socket.remoteAddress)
                                var token = jwt.sign({ _id: result._id, email: result.email, password: result.password }, config().secret_key);
                                Staffs.findOneAndUpdate({ email: req.body.email }, {
                                    $set: {
                                        jwtToken: token, lastLoginIp:
                                        req.socket.remoteAddress,
                                        otp: otp
                                    }
                                }, { new: true }, (err1, res2) => {
                                    //console.log('TEST',err1,res2,otp)
                                    // Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, resMessage.LOGIN_SUCCESS, result, token)
                                    message.sendemail(result.email, "OTP", "Your email id is " + result.email + " and OTP is " + otp, (err, success) => {
                                        console.log("email error======", err,otp)
                                        //          Response.sendResponseWithData(res, resCode.WENT_WRONG, resMessage.INTERNAL_SERVER_ERROR,err)
                                        //     }
            
                                        //   else{
                                       // console.log("emaillllll", success, result,otp)
                                        //  callback(null, success)
                                        Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, resMessage.LOGIN_SUCCESS, res2, token)
                                        // Response.sendResponseWithData(res,resCode.EVERYTHING_IS_OK,"Signed up successfully.", result.id)
                                        // }                    
                                    });
                                })
                                // } else {
                                //     Response.sendResponseWithoutData(res, resCode.ALREADY_EXIST, "This user is already login on another device.")
                                // }
                            }
                            else
                                Response.sendResponseWithoutData(res, resCode.UNAUTHORIZED, "Incorrect password.")
                        })
                        // }
                    }

                })
            }
            else {
                Customers.findOne({ email: req.body.email, status: "ACTIVE" }).lean().exec((error, result) => {
                    console.log(error, result, req.body, "sghfsdfsdffsdfh")
                    if (error)
                        Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.WENT_WRONG);
                    else if (!result) {
                        Response.sendResponseWithoutData(res, resCode.UNAUTHORIZED, resMessage.NOT_MATCH);
                    }
                    else {
                        bcrypt.compare(req.body.password, result.password, (err, res1) => {
                            if (res1) {
                                console.log("result is " + JSON.stringify(result.jwtToken))
                                // if (!result.jwtToken) {
                                console.log("secret key is " + config().secret_key, (req.headers['x-forwarded-for'] || '').split(',').pop().trim() ||
                                    req.socket.remoteAddress)
                                var token = jwt.sign({ _id: result._id, email: result.email, password: result.password }, config().secret_key);
                                Customers.findOneAndUpdate({ email: req.body.email }, {
                                    $set: {
                                        jwtToken: token,
                                        lastLoginIp: req.socket.remoteAddress,
                                        otp: otp
                                    }
                                }, { new: true }, (err1, res2) => {
                                    console.log('TEST 2')
                                    message.sendemail(result.email, "OTP", "Your email id is " + result.email + " and OTP is " + otp, (err, success) => {
                                        console.log("email error======", err)
                                        //          Response.sendResponseWithData(res, resCode.WENT_WRONG, resMessage.INTERNAL_SERVER_ERROR,err)
                                        //     }
            
                                        //   else{
                                        console.log("emaillllll", success, result)
                                        //  callback(null, success)
                                        Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, resMessage.LOGIN_SUCCESS, res2, token)
                                        // Response.sendResponseWithData(res,resCode.EVERYTHING_IS_OK,"Signed up successfully.", result.id)
                                        // }                    
                                    });
                                   // Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, resMessage.LOGIN_SUCCESS, result, token)
                                })
                                // } else {
                                //     Response.sendResponseWithoutData(res, resCode.ALREADY_EXIST, "This user is already login on another device.")
                                // }
                            }
                            else
                                Response.sendResponseWithoutData(res, resCode.UNAUTHORIZED, "Incorrect password.")
                        })
                        // }
                    }

                })
            }

        }
    },

    //=================user listing api =====
    'userListing': (req, res) => {
        console.log("userlist")
        if(req.body.type!="CUSTOMER"){
            Staffs.find({ status: "ACTIVE" }).lean().exec((error, result) => {
                console.log(error, result, "sghfsdfsdffsdfh")
                if (error)
                    Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.WENT_WRONG);
                else if (!result) {
                    Response.sendResponseWithoutData(res, 401, 'No User Found.');
                }
                else
                    Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, 'User Found.', result)
    
            })
        }
        else{
                    Customers.find({ status: "ACTIVE" }).lean().exec((error1, result1) => {
                        console.log(error1, result1)
                        if (error1)
                            Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.WENT_WRONG);
                        else
                            Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, 'User Found.', result1)
                    })
               
           
        }
       
        //}
    },


    //================ LOGOUT ===========================
    'logOut': (req, res) => {
        console.log("req for logout is " + JSON.stringify(req.body))
        if (!req.body)
            Response.sendResponseWithoutData(res, resCode.BAD_REQUEST, "Please fill the id.")
        else {
            //   User.update({_id:req.body.userId},{$set:{jwtToken:''}},(error_,result_)=>{ 
            if(req.body.type=="CUSTOMER"){
                Customers.updateOne({ _id: req.body._id }, { $set: { jwtToken: '' } }, (error_, result_) => {
                    if (error_) {
                        console.log("error of logout " + JSON.stringify(error_))
                        Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.INTERNAL_SERVER_ERROR)
                    } else if (!result_) {
                        Response.sendResponseWithoutData(res, resCode.NOT_FOUND, resMessage.NOT_FOUND)
                    }
                    else {
                        console.log("result of logout " + JSON.stringify(result_))
                        Response.sendResponseWithoutData(res, resCode.EVERYTHING_IS_OK, "User logged out successfully.")
                    }
                })
            }
            else{
                Staffs.updateOne({ _id: req.body._id }, { $set: { jwtToken: '' } }, (error_, result_) => {
                    if (error_) {
                        console.log("error of logout " + JSON.stringify(error_))
                        Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.INTERNAL_SERVER_ERROR)
                    } else if (!result_) {
                        Response.sendResponseWithoutData(res, resCode.NOT_FOUND, resMessage.NOT_FOUND)
                    }
                    else {
                        console.log("result of logout " + JSON.stringify(result_))
                        Response.sendResponseWithoutData(res, resCode.EVERYTHING_IS_OK, "User logged out successfully.")
                    }
                })
            }
            
        }
    },

    //================ OTP ===========================
    'otp': (req, res) => {
        console.log("req for logout is " + JSON.stringify(req.body))
        if (!req.body)
            Response.sendResponseWithoutData(res, resCode.BAD_REQUEST, "Please provide the email.")
        else {
            //   User.update({_id:req.body.userId},{$set:{jwtToken:''}},(error_,result_)=>{ 
            if (req.body.type != "CUSTOMER" ) {
                Staffs.findOne({ email: req.body.email, status: "ACTIVE",type:req.body.type,otp:req.body.otp }, (error, result) => {
                    console.log("STafffs======",error,result,req.body)
                    if (error) {
                        Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.INTERNAL_SERVER_ERROR)
                    } else if (!result) {
                        Response.sendResponseWithoutData(res, resCode.NOT_FOUND, resMessage.NOT_FOUND)
                    }
                    else {
                       
                            Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, "OTP verified successfully.", result)
                            // Response.sendResponseWithData(res,resCode.EVERYTHING_IS_OK,"Signed up successfully.", result.id)
                            // }                    

                    }
                })
            }
            else {
                Customers.findOne({ email: req.body.email, status: "ACTIVE",type:req.body.type,otp:req.body.otp }, (error, result) => {
                    if (error) {
                        Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.INTERNAL_SERVER_ERROR)
                    } else if (!result) {
                        Response.sendResponseWithoutData(res, resCode.NOT_FOUND, resMessage.NOT_FOUND)
                    }
                    else {
                            Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, "OTP verified successfully.", result)
                            // Response.sendResponseWithData(res,resCode.EVERYTHING_IS_OK,"Signed up successfully.", result.id)
                            // }                    
                       //});
                    }
                })
            }

        }
    },



    //=================add Staff by admin=====
    'addStaff': (req, res) => {
        if (!req.body.type)
            Response.sendResponseWithoutData(res, resCode.INTERNAL_SERVER_ERROR, 'Please enter the type of user.');
        else{
        if (req.body.type == "CUSTOMER") {
            Customers.findOne({ email: req.body.email, status: "ACTIVE" }).lean().exec((error, result) => {
                console.log('add user---', error, result)
                if (error)
                    Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.WENT_WRONG);
                else if (result) {
                    Response.sendResponseWithoutData(res, 401, 'Staff already exists.');
                }
                else {
                    let staff = new Staff(req.body);
                    staff.save((error1, result1) => {
                        if (error1) {
                            console.log(error)
                            Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.INTERNAL_SERVER_ERROR)
                        } else {
                            Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, "Staff added successfully.", result1)
                        }
                    })
                }

            })
        }
        else {
            Staffs.findOne({ email: req.body.email, status: "ACTIVE" }).lean().exec((error, result) => {
                console.log('add user---', error, result)
                if (error)
                    Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.WENT_WRONG);
                else if (result) {
                    Response.sendResponseWithoutData(res, 401, 'Staff already exists.');
                }
                else {
                    let staff = new Staffs(req.body);
                    staff.save((error1, result1) => {
                        if (error1) {
                            Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.INTERNAL_SERVER_ERROR)
                        } else {
                            Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, "Staff added successfully.", result1)
                        }
                    })
                }

            })
        }

        }
    },

    //================================Get profile api======================================
    'getProfile': (req,res) => {
        if (!req.body._id)
            Response.sendResponseWithoutData(res, resCode.INTERNAL_SERVER_ERROR, 'Please enter the id.');
        else{
        if (req.body.type == "CUSTOMER") {
            Customers.findOne({ _id: req.body._id, status: "ACTIVE" }).lean().exec((error, result) => {
                console.log('get user---', error, result)
                if (error)
                    Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.WENT_WRONG);
                else if (!result) {
                    Response.sendResponseWithoutData(res, 401, 'No user exists.');
                }
                else {
                      Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, "User found successfully.", result) 
                }

            })
        }
        else {
            Staffs.findOne({ _id: req.body._id, status: "ACTIVE" }).lean().exec((error, result) => {
                console.log('add user---', error, result)
                if (error)
                    Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.WENT_WRONG);
                else if (!result) {
                    Response.sendResponseWithoutData(res, 401, 'No user exists.');
                }
                else {
                            Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, "User found successfully.", result)
                        }
            })
        }

        }
    },
    //================================Get profile api======================================
    'editProfile': (req,res) => {
        if (!req.body._id)
            Response.sendResponseWithoutData(res, resCode.INTERNAL_SERVER_ERROR, 'Please enter the id.');
        else{
        if (req.body.type == "CUSTOMER") {
            Customers.findOneAndUpdate({ _id: req.body._id, status: "ACTIVE" },{$set:{ "firstName": req.body.firstName,
            "lastName":req.body.lastName,"contact": req.body.contact}},{new:true}).lean().exec((error, result) => {
                console.log('edit user---', error, result)
                if (error)
                    Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.WENT_WRONG);
                else if (!result) {
                    Response.sendResponseWithoutData(res, 401, 'No user exists.');
                }
                else {
                      Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, "User updated successfully.", result) 
                }

            })
        }
        else {
            Staffs.findOneAndUpdate({ _id: req.body._id, status: "ACTIVE" },{$set:{ "firstName": req.body.firstName,
            "lastName":req.body.lastName,"contact": req.body.contact}},{new:true}).lean().exec((error, result) => {
                console.log('add user---', error, result)
                if (error)
                    Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.WENT_WRONG);
                else if (!result) {
                    Response.sendResponseWithoutData(res, 401, 'No user exists.');
                }
                else {
                    Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, "User updated successfully.", result)
                }
            })
        }

        }
    }

    //============================================================Module Exports==========================================================
};

module.exports = staffApis;