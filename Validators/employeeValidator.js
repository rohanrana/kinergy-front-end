const { check, validationResult } = require('express-validator');
const resCode = require('../helper/httpResponseCode.js');
const resMessage = require('../helper/httpResponseMessage.js');
const path = require('path');
const fs = require('fs');
const generateAddValidation = (req, res, next) => [
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
        if (req.file.error !== 'undefined' && req.file.error == true) {

            for (let i = 0; i < Object.keys(req.files).length; i++) {
                console.log('error', i, req.files);
                let fieldname = Object.keys(req.files)[i];
                let filePath = 'public/uploads/service/' + '/' + req.body[fieldname];
                console.log('path', filePath)
                fs.unlink(filePath, function(err) {
                    if (!err) {
                        console.log('removed');
                    }
                });
            }
            return res.status(resCode.UNPROCESSABLE_ENTITY).json({
                errors: req.file
            });
        }
    }
    // ==================
    var errors = validationResult(req);
    // console.log(errors);
    if (!errors.isEmpty()) {
        const errorMessages = errors.array().map(error => ({
            title: error.param,
            msg: error.msg
        }));
        const dedupThings = Array.from(errorMessages.reduce((m, t) => m.set(t.title, t), new Map()).values());
        return res.status(resCode.UNPROCESSABLE_ENTITY).json({
            errors: dedupThings
        });
    }
    next();
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