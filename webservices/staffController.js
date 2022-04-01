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
const mongoose = require('mongoose')

const staffApis = {
    //=====signup==========
    'signup': (req, res) => {
        console.log("erquest is=======>>>>", req.body);
        if (!req.body.email)
            Response.sendResponseWithoutData(res, resCode.INTERNAL_SERVER_ERROR, 'Please enter the email.');
        else {
            if (req.body.type == "CUSTOMER") {

                Customers.findOne({ email: req.body.email, status: "ACTIVE", }, (err3, result3) => {
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
        let id;
        if (!req.body)
            Response.sendResponseWithoutData(res, resCode.INTERNAL_SERVER_ERROR, 'Please enter the details.');
        else {
            console.log("else entered login", req.body, req)
            if (req.body.type == "SUPERADMIN" || req.body.type == "DOCTOR") {
                Staffs.findOne({ email: req.body.email, type: req.body.type, status: "ACTIVE" }).lean().exec((error, result) => {
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
                                Staffs.findOneAndUpdate({ email: req.body.email }, {
                                    $set: {
                                        jwtToken: token, lastLoginIp:
                                            req.socket.remoteAddress
                                    }
                                }, { new: true }, (err1, res2) => {
                                    Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, resMessage.LOGIN_SUCCESS, result, token)
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
                                        jwtToken: token, lastLoginIp:
                                            req.socket.remoteAddress
                                    }
                                }, { new: true }, (err1, res2) => {
                                    Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, resMessage.LOGIN_SUCCESS, result, token)
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
        Staffs.find({ status: "ACTIVE" }).lean().exec((error, result) => {
            console.log(error, result, "sghfsdfsdffsdfh")
            if (error)
                Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.WENT_WRONG);
            else if (!result) {
                Response.sendResponseWithoutData(res, 401, 'No User Found.');
            }
            else {
                Customers.find({ status: "ACTIVE" }).lean().exec((error1, result1) => {
                    console.log(error1, result1)
                    if (error1)
                        Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.WENT_WRONG);
                    else
                        Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, 'User Found.', [...result, ...result1])
                })
            }

        })
        //}
    },


    //================ LOGOUT ===========================
    'logOut': (req, res) => {
        console.log("req for logout is " + JSON.stringify(req.body))
        if (!req.body)
            Response.sendResponseWithoutData(res, resCode.BAD_REQUEST, "Please fill the id.")
        else {
            //   User.update({_id:req.body.userId},{$set:{jwtToken:''}},(error_,result_)=>{ 
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
    },



    //=================add Staff by admin=====
    'addStaff': (req, res) => {
        if (req.body.type == "CUSTOMER") {
            Customers.findOne({ email: req.body.email,status:"ACTIVE" }).lean().exec((error, result) => {
                console.log('add user---',error,result)
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
            Staffs.findOne({ email:req.body.email,status:"ACTIVE"}).lean().exec((error, result) => {
                console.log('add user---',error,result)
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

        //}
    },
 
    //============================================================Module Exports==========================================================
};

module.exports = staffApis;