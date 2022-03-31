const jwt =require( 'jsonwebtoken')

//const app =require( 'express'()
const config =require( '../config/env/config.js')
const Response =require( '../common_functions/response_handler.js')
const resCode =require( '../helper/httpResponseCode.js')
const resMessage =require( '../helper/httpResponseMessage.js')
const User =require( '../models/userModel.js')

const auth = { 
   "auth_func": (req, res, next)=>{
        var token = req.body.token || req.query.token || req.headers['token'];
        var userId = req.headers._id;
        if(token){
            console.log("secret key is "+config().secret_key)

            jwt.verify(token, config().secret_key, (err,decoded)=>{
                
                if(err)
                {
                    console.log("token not verified",err)
                    Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.WENT_WRONG)
                }    
                else{
                    console.log("token verified")
                    // User.findOne({_id:userId,status:"ACTIVE"},(error, result)=>{
                    //     if(error)
                    //         Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.WENT_WRONG)
                    //     else if(!result)
                    //         Response.sendResponseWithoutData(res, resCode.NOT_FOUND, "User not found.")
                    //     else{
                            req.decoded = decoded;
                            next();
                        // }                        
                    // })
                }
            })
        }else{
            Response.sendResponseWithoutData(res, 403, "No token provided.")
        }

    },

};

module.exports = auth;