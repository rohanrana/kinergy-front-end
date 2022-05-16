const Staff = require('../models/staffModel.js');
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

const path = require('path');
const fs = require('fs');
const multer = require('multer');
const maxSize = 1 * 1024 * 1024;

const returnPagination = (result) => {
    delete result.docs;
    return result;
  };

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
            } else {
                Staff.findOne({ email: req.body.email, status: "ACTIVE", }, (err3, result3) => {
                    if (err3) {

                        Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.INTERNAL_SERVER_ERROR);
                    } else if (result3) {

                        Response.sendResponseWithoutData(res, resCode.ALREADY_EXIST, resMessage.ALL_READY_EXIST_EMAIL)

                    } else {

                        var retVal = "";
                        const saltRounds = 10;
                        retVal = req.body.password;
                        bcrypt.genSalt(saltRounds, (err, salt) => {
                            bcrypt.hash(retVal, salt, (error, hash) => {
                                req.body.password = hash;
                                console.log("hash is " + hash)
                                console.log("orig pass" + req.body.password)
                                    // console.log("orig pass" + req.body.Account)
                                let staffs = new Staff(req.body);
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
        var otp = Math.floor(1000 + Math.random() * 9000);
        console.log(otp);
        if (!req.body)
            Response.sendResponseWithoutData(res, resCode.INTERNAL_SERVER_ERROR, 'Please enter the details.');
        else {
            // console.log("else entered login", req.body, otp)
            console.log('UserType', req.body.type);
            if (req.body.type != "CUSTOMER") {
                Staff.findOne({ email: req.body.email, status: "ACTIVE" }).lean().exec((error, result) => {
                    //console.log(error, result, req.body, "sghfsdfsdffsdfh")
                    if (error)
                        Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.WENT_WRONG);
                    else if (!result) {
                        console.log('result', result);
                        Response.sendResponseWithoutData(res, resCode.UNAUTHORIZED, resMessage.NOT_MATCH);
                    } else {
                        bcrypt.compare(req.body.password, result.password, (err, res1) => {
                                if (res1) {
                                    // console.log("result is " + JSON.stringify(result.jwtToken))
                                    // if (!result.jwtToken) {
                                    console.log("secret key is " + config().secret_key, (req.headers['x-forwarded-for'] || '').split(',').pop().trim() ||
                                        req.socket.remoteAddress)
                                    var token = jwt.sign({ _id: result._id, email: result.email, password: result.password }, config().secret_key);
                                    Staff.findOneAndUpdate({ email: req.body.email }, {
                                            $set: {
                                                jwtToken: token,
                                                lastLoginIp: req.socket.remoteAddress,
                                                otp: otp
                                            }
                                        }, { new: true }, (err1, res2) => {
                                            //console.log('TEST',err1,res2,otp)
                                            // Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, resMessage.LOGIN_SUCCESS, result, token)
                                            message.sendemail(result.email, "OTP", "Your email id is " + result.email + " and OTP is " + otp, (err, success) => {
                                                console.log("email error======", err, otp)
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
                                } else
                                    Response.sendResponseWithoutData(res, resCode.UNAUTHORIZED, "Incorrect password.")
                            })
                            // }
                    }

                })
            } else {
                Customers.findOne({ email: req.body.email, status: "ACTIVE" }).lean().exec((error, result) => {
                    // console.log(error, result, req.body, "sghfsdfsdffsdfh")
                    if (error)
                        Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.WENT_WRONG);
                    else if (!result) {
                        Response.sendResponseWithoutData(res, resCode.UNAUTHORIZED, resMessage.NOT_MATCH);
                    } else {
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
                                } else
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
        console.log("req",req.body);
        const perPage = 10,
       page = req.body.page != "undefined" && req.body.page ? Math.max(0, req.body.page) : 1;
       var options  ={ page: page, limit: perPage ,lean:true};
        if (req.body.type != 'CUSTOMER') {
            Staff.paginate({},options,function (error, result) {
            // Staff.find().lean().exec((error, result) => {
                // console.log(error, result, "sghfsdfsdffsdfh")
                if (error)
                    Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.WENT_WRONG);
                else if (!result) {
                    Response.sendResponseWithoutData(res, 401, 'No User Found.');
                } else {
                    // Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, 'User Found.', [result])
                    Response.sendResponseWithPagination(
                        res,
                        resCode.EVERYTHING_IS_OK,
                        "User Found.",
                        result.docs,
                        returnPagination(result)
                      );
                }

            })
        } else {
            // Customers.find({ status: "ACTIVE" }).lean().exec((error, result) => {
                Customers.paginate({},options,function (error, result) {
                // console.log(error, result, "sghfsdfsdffsdfh")
                if (error)
                    Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.WENT_WRONG);
                else if (!result || result.docs.length == 0) {
                    Response.sendResponseWithoutData(res, 401, 'No User Found.');
                } else {
                    Response.sendResponseWithPagination(
                        res,
                        resCode.EVERYTHING_IS_OK,
                        "User Found.",
                        result.docs,
                        returnPagination(result)
                      );
                }

            })
        }

        //}
    },
     //=================user Seraching and FIlter listing api =====
     'userSearchListing': (req, res) => {
        
        const perPage = 10,
       page = req.body.page != "undefined" && req.body.page ? Math.max(0, req.body.page) : 1;
       var options  ={ page: page, limit: perPage ,lean:true};

       let SearchOption ={};
    if(req.body.search !== undefined && req.body.search){
    SearchOption = {...SearchOption, firstName: { $regex: `${req.body.search}`, $options: "i" } }
    }
    if(req.body.role !== undefined && req.body.role){
      SearchOption = {...SearchOption, roleId: req.body.role }
    }
    if(req.body.status !== undefined && req.body.status){
        SearchOption = {...SearchOption, status: req.body.status.toUpperCase() }
    }
    console.log("SearchData",SearchOption);
        if (req.body.type != 'CUSTOMER') {
            Staff.paginate(SearchOption,options,function (error, result) {
            // Staff.find().lean().exec((error, result) => {
                // console.log(error, result, "sghfsdfsdffsdfh")
                if (error)
                    Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.WENT_WRONG);
                else if (!result || result.docs.length == 0) {
                    Response.sendResponseWithoutData(res, 401, 'No User Found.');
                } else {
                    // Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, 'User Found.', [result])
                    Response.sendResponseWithPagination(
                        res,
                        resCode.EVERYTHING_IS_OK,
                        "User Found.",
                        result.docs,
                        returnPagination(result)
                      );
                }

            })
        } else {
            // Customers.find({ status: "ACTIVE" }).lean().exec((error, result) => {
                Customers.paginate(SearchOption,options,function (error, result) {
                // console.log(error, result, "sghfsdfsdffsdfh")
                if (error)
                    Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.WENT_WRONG);
                else if (!result || result.docs.length == 0) {
                    Response.sendResponseWithoutData(res, 401, 'No User Found.');
                } else {
                    Response.sendResponseWithPagination(
                        res,
                        resCode.EVERYTHING_IS_OK,
                        "User Found.",
                        result.docs,
                        returnPagination(result)
                      );
                }

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
            if (req.body.type == "CUSTOMER") {
                Customers.updateOne({ _id: req.body._id }, { $set: { jwtToken: '' } }, (error_, result_) => {
                    if (error_) {
                        console.log("error of logout " + JSON.stringify(error_))
                        Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.INTERNAL_SERVER_ERROR)
                    } else if (!result_) {
                        Response.sendResponseWithoutData(res, resCode.NOT_FOUND, resMessage.NOT_FOUND)
                    } else {
                        console.log("result of logout " + JSON.stringify(result_))
                        Response.sendResponseWithoutData(res, resCode.EVERYTHING_IS_OK, "User logged out successfully.")
                    }
                })
            } else {
                Staff.updateOne({ _id: req.body._id }, { $set: { jwtToken: '' } }, (error_, result_) => {
                    if (error_) {
                        console.log("error of logout " + JSON.stringify(error_))
                        Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.INTERNAL_SERVER_ERROR)
                    } else if (!result_) {
                        Response.sendResponseWithoutData(res, resCode.NOT_FOUND, resMessage.NOT_FOUND)
                    } else {
                        console.log("result of logout " + JSON.stringify(result_))
                        Response.sendResponseWithoutData(res, resCode.EVERYTHING_IS_OK, "User logged out successfully.")
                    }
                })
            }

        }
    },

    //================ OTP ===========================
    'otp': (req, res) => {
        // console.log("req for otp Verify is " + JSON.stringify(req.body))
        if (!req.body)
            Response.sendResponseWithoutData(res, resCode.BAD_REQUEST, "Please provide the email.")
        else {
            //   User.update({_id:req.body.userId},{$set:{jwtToken:''}},(error_,result_)=>{ 
            if (req.body.type != "CUSTOMER") {
                Staff.findOne({ email: req.body.email, status: "ACTIVE", type: req.body.type, otp: req.body.otp }, (error, result1) => {
                    console.log("STafffs======", error, result1, req.body)
                    if (error) {
                        Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.INTERNAL_SERVER_ERROR)
                    } else if (!result1) {
                        Response.sendResponseWithoutData(res, resCode.NOT_FOUND, "Invalid Otp")
                    } else {

                        // Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, "OTP verified successfully.", result1)
                        console.log('OTP RESPONSE', result1.jwtToken);
                        Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, "OTP verified successfully.", result1, result1.jwtToken)
                            // Response.sendResponseWithData(res,resCode.EVERYTHING_IS_OK,"Signed up successfully.", result.id)
                            // }                    

                    }
                })
            } else {
                Customers.findOne({ email: req.body.email, status: "ACTIVE", type: req.body.type, otp: req.body.otp }, (error, result1) => {
                    if (error) {
                        Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.INTERNAL_SERVER_ERROR)
                    } else if (!result1 || result1.length === 0) {
                        Response.sendResponseWithoutData(res, resCode.NOT_FOUND, "Invalid Otp")
                    } else {
                        // Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, "OTP verified successfully.", result1)
                        Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, "OTP verified successfully.", result1, )
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
        else {
            if (req.body.password) {
                var retVal = "";
                const saltRounds = 10;
                retVal = req.body.password;
                bcrypt.genSalt(saltRounds, (err, salt) => {
                    bcrypt.hash(retVal, salt, (error, hash) => {
                        req.body.password = hash;
                        console.log(req.body.password);
                    })
                })
            }
            if (req.body.type == "CUSTOMER") {
                Customers.findOne({ email: req.body.email, status: "ACTIVE" }).lean().exec((error, result) => {
                    console.log('add customer---', error, result)
                    if (error)
                        Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.WENT_WRONG);
                    else if (result) {
                        Response.sendResponseWithoutData(res, 401, 'Customer already exists.');
                    } else {
                        let customer = new Customers(req.body);
                        customer.save((error1, result1) => {
                            console.log('error1',error1);
                            if (error1) {
                                console.log('my_errors', error1)
                                Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.INTERNAL_SERVER_ERROR)
                            } else {
                                Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, "Customer added successfully.", result1)
                            }
                        })
                    }

                })
            } else {
                Staff.findOne({ email: req.body.email, status: "ACTIVE" }).lean().exec((error, result) => {
                    console.log('add user1---', error, result)
                    if (error)
                        Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.WENT_WRONG);
                    else if (result) {
                        Response.sendResponseWithoutData(res, 401, 'Staff already exists.');
                    } else {
                        let staff = new Staff(req.body);
                        staff.save((error1, result1) => {
                            console.log('result1',error1);
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

    //================= edit Staff by Id=====
    'editStaff': (req, res) => {

        if (!req.body._id)
            Response.sendResponseWithoutData(res, resCode.INTERNAL_SERVER_ERROR, 'Please enter the id of user.');
        else {
            if (req.body.password) {
                var retVal = "";
                const saltRounds = 10;
                retVal = req.body.password;
                bcrypt.genSalt(saltRounds, (err, salt) => {
                    bcrypt.hash(retVal, salt, (error, hash) => {
                        req.body.password = hash;
                        console.log(req.body.password);
                    })
                })
            }
            if (req.body.type == "CUSTOMER") {
                Customers.findOne({ _id: req.body._id }).lean().exec((error, result) => {

                    if (error)
                        Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.WENT_WRONG);
                    else if (!result) {
                        Response.sendResponseWithoutData(res, 401, 'Staff not exists.');
                    } else {
                        Customers.findOneAndUpdate({ _id: req.body._id }, {
                            $set: {
                                "firstName": req.body.firstName,
                                "lastName": req.body.lastName,
                                "address": req.body.address,
                                "contact": req.body.contact,
                                "email": req.body.email,
                                "status": req.body.status,
                                "type": req.body.type,
                                "city": req.body.city,
                                "state": req.body.state,
                                "country": req.body.country,
                                "pin": req.body.pin,
                                "gender": req.body.gender,
                                "dob": req.body.dob,
                            }
                        }, { new: true }).lean().exec((error1, result1) => {
                            if (error1) {
                                console.log(error1)
                                Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.INTERNAL_SERVER_ERROR)
                            } else {
                                Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, "Customer edit successfully.", result1)
                            }
                        })
                    }

                })
            } else {
                Staff.findOne({ _id: req.body._id }).lean().exec((error, result) => {
                    // console.log('Edit Staff---', error, result)
                    if (error)
                        Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.WENT_WRONG);
                    else if (!result) {
                        Response.sendResponseWithoutData(res, 401, 'Staff  not exists.');
                    } else {
                        console.log(req.body);
                        Staff.findOneAndUpdate({ _id: req.body._id }, {
                            $set: {
                                "firstName": req.body.firstName,
                                "lastName": req.body.lastName,
                                "address": req.body.address,
                                "contact": req.body.contact,
                                "email": req.body.email,
                                "status": req.body.status,
                                "type": req.body.type,
                                "city": req.body.city,
                                "state": req.body.state,
                                "country": req.body.country,
                                "pin": req.body.pin,
                                "gender": req.body.gender,
                                "dob": req.body.dob,
                            }
                        }, { new: true }).lean().exec((error1, result1) => {
                            if (error1) {
                                Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.INTERNAL_SERVER_ERROR)
                            } else {
                                Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, "Staff edit successfully.", result1)
                            }
                        })
                    }

                })
            }

        }
    },


    //================================Get profile api======================================
    'getProfile': (req, res) => {
        if (!req.body._id)
            Response.sendResponseWithoutData(res, resCode.INTERNAL_SERVER_ERROR, 'Please enter the id.');
        else {
            if (req.body.type == "CUSTOMER") {
                Customers.findOne({ _id: req.body._id, status: "ACTIVE" }).lean().exec((error, result) => {
                    console.log('get user---', error, result)
                    if (error)
                        Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.WENT_WRONG);
                    else if (!result) {
                        Response.sendResponseWithoutData(res, 401, 'No user exists.');
                    } else {
                        Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, "User found successfully.", result)
                    }

                })
            } else {
                Staff.findOne({ _id: req.body._id, status: "ACTIVE" }).lean().exec((error, result) => {
                    console.log('add user---', error, result)
                    if (error)
                        Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.WENT_WRONG);
                    else if (!result) {
                        Response.sendResponseWithoutData(res, 401, 'No user exists.');
                    } else {
                        Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, "User found successfully.", result)
                    }
                })
            }

        }
    },

    //================================Get UserById api======================================
    'getStaffById': (req, res) => {
        if (!req.body._id)
            Response.sendResponseWithoutData(res, resCode.INTERNAL_SERVER_ERROR, 'Please enter the id.');
        else {
            if (req.body.type == "CUSTOMER") {
                Customers.findOne({ _id: req.body._id }).lean().exec((error, result) => {
                    console.log('get user---', error, result)
                    if (error)
                        Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.WENT_WRONG);
                    else if (!result) {
                        Response.sendResponseWithoutData(res, 401, 'No user exists.');
                    } else {
                        Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, "User found successfully.", result)
                    }

                })
            } else {
                Staff.findOne({ _id: req.body._id }).lean().exec((error, result) => {
                    console.log('add user---', error, result)
                    if (error)
                        Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.WENT_WRONG);
                    else if (!result) {
                        Response.sendResponseWithoutData(res, 401, 'No user exists.');
                    } else {
                        Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, "User found successfully.", result)
                    }
                })
            }

        }
    },
    //================================Get profile api======================================
    'editProfile': (req, res) => {
        if (!req.body._id)
            Response.sendResponseWithoutData(res, resCode.INTERNAL_SERVER_ERROR, 'Please enter the id.');
        else {
            if (req.body.type == "CUSTOMER") {
                Customers.findOneAndUpdate({ _id: req.body._id, status: "ACTIVE" }, {
                    $set: {
                        "firstName": req.body.firstName,
                        "lastName": req.body.lastName,
                        "address": req.body.address,
                        "contact": req.body.contact,
                        "email": req.body.email,
                        "status": req.body.status,
                        "type": req.body.type,
                        "city": req.body.city,
                        "state": req.body.state,
                        "country": req.body.country,
                        "pin": req.body.pin,
                        "gender": req.body.gender,
                        "dob": req.body.dob,
                    }
                }, { new: true }).lean().exec((error, result) => {
                    console.log('edit user---', error, result)
                    if (error)
                        Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.WENT_WRONG);
                    else if (!result) {
                        Response.sendResponseWithoutData(res, 401, 'No user exists.');
                    } else {
                        Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, "User updated successfully.", result)
                    }

                })
            } else {
                Staff.findOneAndUpdate({ _id: req.body._id, status: "ACTIVE" }, {
                    $set: {
                        "firstName": req.body.firstName,
                        "lastName": req.body.lastName,
                        "contact": req.body.contact
                    }
                }, { new: true }).lean().exec((error, result) => {
                    console.log('add user---', error, result)
                    if (error)
                        Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.WENT_WRONG);
                    else if (!result) {
                        Response.sendResponseWithoutData(res, 401, 'No user exists.');
                    } else {
                        Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, "User updated successfully.", result)
                    }
                })
            }

        }
    },
    'changeStatus': (req, res, next) => {
        var STATUS = ["ACTIVE", "INACTIVE", "BLOCK"];
        if (!req.body._id) {
            Response.sendResponseWithoutData(res, resCode.WENT_WRONG, 'Please Enter Staff Id');
        } else if (!req.body.status) {
            Response.sendResponseWithoutData(res, resCode.WENT_WRONG, 'Please Enter Staff Status');
        } else if (!STATUS.includes(req.body.status)) {
            Response.sendResponseWithoutData(res, resCode.WENT_WRONG, 'Invalid  Status Type');
        } else {
            if (req.body.type == "CUSTOMER") {
                Customers.findOneAndUpdate({ _id: req.body._id }, { status: req.body.status }, { new: true }).lean().exec((err, result) => {
                    if (!err) {
                        Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, 'Staff Status Changed Successfully.', result);
                    } else
                        Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.WENT_WRONG);

                });
            } else {
                Staff.findOneAndUpdate({ _id: req.body._id }, { status: req.body.status.toUpperCase() }, { new: true }).lean().exec((err, result) => {
                    if (!err) {
                        Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, 'Staff Status Changed Successfully.', result);
                    } else
                        Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.WENT_WRONG);

                });
            }
        }

    },

    // =========================================================== Files Upload
    'fileUpload': (req, res, next) => {


        var storage = multer.diskStorage({
            destination: function(req, file, cb) {
                // console.log(file);
                // Uploads is the Upload_folder_name
                cb(null, "public/uploads/user");
            },
            filename: function(req, file, cb) {
                // console.log(req.body, file);
                var extname = path.extname(file.originalname).toLowerCase();
                var imageName = file.fieldname + "-" + Date.now() + extname
                    // console.log(imageName);
                req.body[file.fieldname] = imageName;
                cb(null, imageName)
            }
        })


        var upload = multer({
            storage: storage,
            limits: { fileSize: maxSize },
            fileFilter: (req, file, cb) => {
                // console.log(req.body, file);
                if (
                    file.mimetype == "image/png" ||
                    file.mimetype == "image/jpg" ||
                    file.mimetype == "image/jpeg"
                ) {
                    cb(null, true);
                } else {
                    cb(null, false);
                    // return new cb(new Error("Only/ .png, .jpg and .jpeg format allowed!"));
                    req.file = {
                        error: true,
                        title: file.fieldname,
                        msg: "Only .png, .jpg and .jpeg format allowed!",
                        status: -6
                    }


                }

            },
            onFileSizeLimit: function(file) {
                req.file = {
                    error: true,
                    title: file.fieldname,
                    msg: "Image file is to large",
                    status: -6
                }
            }
        }).fields([{
            name: 'profilePic',
            maxCount: 1
        }, {
            name: 'signature',
            maxCount: 1
        }]);


        upload(req, res, function(err) {
            if (err instanceof multer.MulterError) {
                console.log('uploading_err', err);
                // A Multer error occurred when uploading.
            } else if (err) {
                // An unknown error occurred when uploading.
                console.log('uploading_err', err);
            }
            // Everything went fine. 

            next()
        })
    }

    //============================================================Module Exports==========================================================
};

module.exports = staffApis;