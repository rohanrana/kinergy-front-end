import User from '../models/userModel.js';
import Response from '../common_functions/response_handler.js';
import resCode from '../helper/httpResponseCode.js';
import resMessage from '../helper/httpResponseMessage.js';
import bcrypt from 'bcryptjs';
import waterfall from 'async-waterfall';
import jwt from 'jsonwebtoken';
import config from '../config/env/config.js';
import mongoose from 'mongoose'

const userApis = {
//=====signup==========
    'signup': (req, res) => {
        console.log("erquest is=======>>>>", req.body);
        if (!req.body.email)
            Response.sendResponseWithoutData(res, resCode.INTERNAL_SERVER_ERROR, 'Please enter the email.');
        else {
            User.findOne({ email: req.body.email, status: "ACTIVE" }, (err3, result3) => {
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
                                let user = new User(req.body);
                                user.save((error, result) => {
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
    },
    //=================login api =====
    'login': (req, res) => {
        console.log("login request====++", req.body)
        let id;
        if (!req.body)
            Response.sendResponseWithoutData(res, resCode.INTERNAL_SERVER_ERROR, 'Please enter the details.');
        else {
            console.log("else entered login")
            User.findOne({ email: req.body.email, $or: [{ status: "ACTIVE" }, { status: "BLOCK" }], type: req.body.type }).lean().exec((error, result) => {
                if (error)
                    Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.WENT_WRONG);
                else if (!result) {
                    Response.sendResponseWithoutData(res, resCode.UNAUTHORIZED, resMessage.NOT_MATCH);
                }
                else {
                        bcrypt.compare(req.body.password, result.password, (err, res1) => {
                            if (res1) {
                                console.log("result is " + JSON.stringify(result.jwtToken))
                                if (!result.jwtToken) {
                                    console.log("secret key is " + config().secret_key)
                                    var token = jwt.sign({ _id: result._id, email: result.email, password: result.password }, config().secret_key);
                                    User.findOneAndUpdate({ email: req.body.email }, { $set: { jwtToken: token } }, { new: true }, (err1, res2) => {
                                        Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, resMessage.LOGIN_SUCCESS, result, token)
                                    })
                                } else {
                                    Response.sendResponseWithoutData(res, resCode.ALREADY_EXIST, "This user is already login on another device.")
                                }
                            }
                            else
                                Response.sendResponseWithoutData(res, resCode.UNAUTHORIZED, "Incorrect password.")
                        })
                   // }
                }

            })
        }
    },

  

    //================ LOGOUT ===========================
    'logOut': (req, res) => {
        console.log("req for logout is " + JSON.stringify(req.body))
        if (!req.body)
            Response.sendResponseWithoutData(res, resCode.BAD_REQUEST, "Please fill the id.")
        else {
            //   User.update({_id:req.body.userId},{$set:{jwtToken:''}},(error_,result_)=>{ 
            User.updateOne({ _id: req.body._id }, { $set: { jwtToken: '' } }, (error_, result_) => {
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



    //============================================================Module Exports==========================================================
};

export default userApis;