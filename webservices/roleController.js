const Staffs = require('../models/staffModel.js');
const Customers = require('../models/customersModel.js');
const Roles = require('../models/roleModel.js');
const Response = require('../common_functions/response_handler.js')
const resCode = require('../helper/httpResponseCode.js')
const resMessage = require('../helper/httpResponseMessage.js')
const bcrypt = require('bcryptjs')
const waterfall = require('async-waterfall')
const jwt = require('jsonwebtoken')
const config = require('../config/env/config.js')();
const mongoose = require('mongoose')

const roleApis = {
  
    //=================add Roles=====
    'addRole': (req, res) => {
        Roles.findOne({ roleName: req.body.roleName }).lean().exec((error, result) => {
            if (error)
                Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.WENT_WRONG);
            else if (result) {
                Response.sendResponseWithoutData(res, 401, 'Role already exists.');
            }
            else {
                let role = new Roles(req.body);
                role.save((error1, result1) => {
                    if (error1) {
                        Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.INTERNAL_SERVER_ERROR)
                    } else {
                        Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, "Role added successfully.", result1)
                    }
                })
            }

        })
        //}
    },


    //=================edit Roles=====
    'editRole': (req, res) => {
        
        Roles.findOne({ _id: req.body._id }).lean().exec((error, result) => {
            if (error)
                Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.WENT_WRONG);
            else {
                let obj = {
                        premission: {
                            "premissionName": req.body.premissionName,
                            "capabilities": req.body.capabilities
                        }
                    
                };  
                console.log("obj---",obj)                  
                Roles.findByIdAndUpdate({_id:req.body._id},{$set:req.body},{new:true},(error1,result1)=>{
                    if(error1){
                        Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.WENT_WRONG);
                    }
                    else{
                        Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, "Role updated successfully.", result1)
                    }
                })
            }

        })
        //}
    },

    //============================================================Module Exports==========================================================
};

module.exports = roleApis;