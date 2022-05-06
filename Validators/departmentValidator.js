const { check, validationResult } = require('express-validator');
const resCode = require('../helper/httpResponseCode.js');
const resMessage = require('../helper/httpResponseMessage.js');
const Response = require('../common_functions/response_handler');
const Department = require('../models/departmentModel');
var fs = require('fs');

var ObjectId = require('mongoose').Types.ObjectId;
// const path = require('path');
// const fs = require('fs');
const generateAddValidation = (req, res, next) => [
    check('name')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.DEPARTMENT_NAME_REQUIRED)
    .custom((value, {req, loc, path}) => {
        console.log(req.body.name);
        return Department.findOne({ 
            name:value
        }).then(user => {
            console.log('user',user);
            if (user) {
                return Promise.reject(resMessage.ALL_READY_EXIST_NAME);
            }
        });
    }),   
    check('type') 
    .trim()
    .escape()  
    .not()
    .isEmpty()
    .withMessage(resMessage.DEPARTMENT_TYPE_REQUIRED),
];
const generateEditValidation = (req, res, next) => [
    check('name')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.DEPARTMENT_NAME_REQUIRED),   
    check('type')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.DEPARTMENT_TYPE_REQUIRED),
];

const reporter = (req, res, next) => {


    //   ================== IF FILE ERROR =============
      console.log(req.file);
      if (req.file) {
  
          if (req.file.error != 'undefined' && req.file.error == true) {
  
              for (let i = 0; i < Object.keys(req.files).length; i++) {
                  // console.log('files', i, req.files);
                  let fieldname = Object.keys(req.files)[i];
                  let filePath = 'public/uploads/department' + '/' + req.body[fieldname];
                  // console.log('path', filePath)
                  fs.unlink(filePath, function(err) {
                      if (!err) {
                          console.log('removed');
                      } else {
                          console.log('removing_file_error', err);
                      }
                  });
              }
              // return res.status(resCode.UNPROCESSABLE_ENTITY).json({
              //     errors: req.file
              // });
              Response.sendResponseWithError(res, resCode.UNPROCESSABLE_ENTITY, 'Validation Errors', req.file);
          }
      }
      // ==================

      
    var errors = validationResult(req);
    console.log('files',req.files);
    if (!errors.isEmpty()) {

        if (!req.files != 'undefined' && req.files != null && req.files != {} ) {
            for (let i = 0; i < Object.keys(req.files).length; i++) {

                let fieldname = Object.keys(req.files)[i];
                let filePath = 'public/uploads/department/' + '/' + req.body[fieldname];
                fs.unlink(filePath,
                    function(err) {
                        if (!err) {
                            console.info(`removed`);
                        }
                    });

            }
        }

        const errorMessages = errors.array().map(error => ({
            title: error.param,
            msg: error.msg
        }));
        const dedupThings = Array.from(errorMessages.reduce((m, t) => m.set(t.title, t), new Map()).values());
        // return res.status(resCode.UNPROCESSABLE_ENTITY).json({
        //     errors: dedupThings
        // });
        Response.sendResponseWithError(res, resCode.UNPROCESSABLE_ENTITY, 'Validation Errors', dedupThings);
    }else{
        next();
    }
    
}

module.exports = {
    add: [
        generateAddValidation(),
        reporter
    ],
    edit: [
        generateEditValidation(),
        reporter
    ]
}