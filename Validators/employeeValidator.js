const { check, validationResult } = require('express-validator');
const resCode = require('../helper/httpResponseCode.js');
const resMessage = require('../helper/httpResponseMessage.js');
const Response = require('../common_functions/response_handler');
const path = require('path');
const fs = require('fs');
const Employee = require('../models/employeeModel');
const generateAddValidation = (req, res, next) => [
    check('firstName')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.FIRST_NAME_REQUIRED),
    check('email')
    .custom((value, {req, loc, path}) => {
        let userOptions = {};
        userOptions = {...userOptions,email:value};

        console.log('userOptions',userOptions);
        return Employee.findOne(userOptions).then(employee => {
            
            if (employee) {
                return Promise.reject(resMessage.EMAIL_ALREADY_EXISTS);
            }
        });
    })
    .isEmail()
    .withMessage(resMessage.EMAIL_VALID)
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.EMAIL_REQUIRED)

]
const generateEditValidation = (req, res, next) => [
    check('firstName')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.FIRST_NAME_REQUIRED),
    check('email')
    .isEmail()
    .withMessage(resMessage.EMAIL_VALID)
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.EMAIL_REQUIRED)

]

const reporter = (req, res, next) => {
    // ================== IF FILE ERROR =============
    if (req.file) {
        if (req.file.error != 'undefined' && req.file.error == true) {

            for (let i = 0; i < Object.keys(req.files).length; i++) {
                // console.log('files', i, req.files);
                let fieldname = Object.keys(req.files)[i];
                let filePath = 'public/uploads/employee' + '/' + req.body[fieldname];
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
            //     response_code: 422,
            //     errors: req.file
            // });
            // Response.sendResponseWithData(res, resCode.UNPROCESSABLE_ENTITY, {
            //     response_code: 422,
            //     errors: req.file
            // });
            Response.sendResponseWithError(res, resCode.UNPROCESSABLE_ENTITY, 'Validation Errors', req.file);
        }
    }
    // ==================
    var errors = validationResult(req);
    // console.log(errors);
    if (!errors.isEmpty()) {
        if (req.files !== 'undefined' && req.files) {
            for (let i = 0; i < Object.keys(req.files).length; i++) {

                let fieldname = Object.keys(req.files)[i];
                let filePath = 'public/uploads/employee/' + '/' + req.body[fieldname];
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
            response_message: error.msg
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
    ],
    editDocument: [
        reporter
    ]
}