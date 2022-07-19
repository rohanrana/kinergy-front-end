const { check, validationResult } = require('express-validator');
const resCode = require('../helper/httpResponseCode.js');
const resMessage = require('../helper/httpResponseMessage.js');
const Response = require('../common_functions/response_handler');
const Facility = require('../models/facilityModel');
// const path = require('path');
// const fs = require('fs');
const generateAddValidation = (req, res, next) => [
    check('facilityName')
    .custom((value, {req, loc, path}) => {
        let userOptions = {};
        userOptions = {...userOptions,facilityName:value};

        // console.log('userOptions',userOptions);
        return Facility.findOne(userOptions).then(facility => {
            
            if (facility) {
                return Promise.reject(resMessage.ALL_READY_EXIST_NAME);
            }
        });
    })
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.FACILITY_NAME_REQUIRED),
    check('email')    
    .isEmail()
    .withMessage(resMessage.EMAIL_VALID)
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.EMAIL_IS_REQUIRED),

]
const generateEditValidation = (req, res, next) => [
    check('facilityName')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.FACILITY_NAME_REQUIRED),
    check('email')
    .isEmail()
    .withMessage(resMessage.EMAIL_VALID)

]

const reporter = (req, res, next) => {
    var errors = validationResult(req);
    // console.log(errors);
    if (!errors.isEmpty()) {
        const errorMessages = errors.array().map(error => ({
            title: error.param,
            msg: error.msg
        }));
        const dedupThings = Array.from(errorMessages.reduce((m, t) => m.set(t.title, t), new Map()).values());
        Response.sendResponseWithError(res, resCode.UNPROCESSABLE_ENTITY, 'Validation Errors', dedupThings);
    } else {
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