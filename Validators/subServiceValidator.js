const { check, validationResult } = require('express-validator');

const resCode = require('../helper/httpResponseCode.js');
const resMessage = require('../helper/httpResponseMessage.js');
const Response = require('../common_functions/response_handler');
const SubService = require('../models/subServiceModel');
const slugify = require('slugify')
var fs = require('fs');

const generateAddValidation = (req, res, next) => [

    check('title')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.TITLE_REQUIRED)
    .custom(value => {
        return SubService.findOne({ slug: slugify(value, { replacement: '-', remove: undefined, lower: true, strict: true, trim: true }), }).then(subService => {
            if (subService) {
                return Promise.reject(resMessage.TITLE_ALREADY_EXIST);
            }
        });
    }),
    check('addBy')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.ADD_BY_USER_ID_REQUIRED),
    check('service')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.SERVICE_ID_REQUIRED)


];
const generateEditValidation = (req, res, next) => [

    check('title')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.TITLE_REQUIRED)
]
const reporter = (req, res, next) => {

    // __if file has any error
    if (req.file) {
        if (req.file.error != 'undefined' && req.file.error == true) {

            for (let i = 0; i < Object.keys(req.files).length; i++) {
                console.log('error', i, req.files);
                let fieldname = Object.keys(req.files)[i];
                let filePath = 'public/uploads/service/subService/' + '/' + req.body[fieldname];
                console.log('path', filePath)
                fs.unlink(filePath, function(err) {
                    if (!err) {
                        console.log('removed');
                    }
                });
            }
            // return res.status(resCode.UNPROCESSABLE_ENTITY).json({
            //     errors: req.file
            // });
            Response.sendResponseWithError(res, resCode.UNPROCESSABLE_ENTITY, 'Validation Errors', req.file);
        }
    }

    // unlink file if any error occurs

    // Check validation other fields
    var errors = validationResult(req);
    if (!errors.isEmpty()) {
        if(req.files.length > 0){
        if (req.files != 'undefined' && req.files  && req.files.length != 0) {
            for (let i = 0; i < Object.keys(req.files).length; i++) {

                let fieldname = Object.keys(req.files)[i];
                let filePath = 'public/uploads/service/subService' + '/' + req.body[fieldname];
                fs.unlink(filePath,
                    function(err) {
                        if (!err) {
                            console.info(`removed`);
                        }
                    });

            }
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