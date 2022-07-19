const { check, validationResult } = require('express-validator');
const resCode = require('../helper/httpResponseCode.js');
const resMessage = require('../helper/httpResponseMessage.js');
const Response = require('../common_functions/response_handler');
// const path = require('path');
// const fs = require('fs');
const generateAddValidation = (req, res, next) => [
    check('taxName')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage('Tax name required'),
    check('taxRate')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage('Tax Rate required')

]
const generateEditValidation = (req, res, next) => [
    check('taxName')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage('Tax name required'),
    check('taxRate')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage('Tax Rate required')

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