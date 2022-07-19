const { check, validationResult } = require('express-validator');
const resCode = require('../helper/httpResponseCode.js');
const resMessage = require('../helper/httpResponseMessage.js');
const Response = require('../common_functions/response_handler');
const Tax = require('../models/taxModel');
var ObjectId = require('mongoose').Types.ObjectId;
// const path = require('path');
// const fs = require('fs');
const generateAddValidation = (req, res, next) => [
    check('itemType')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.ITEM_TYPE_REQUIRED),
    check('itemCode')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.ITEM_CODE_REQUIRED),
    check('itemName')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.ITEM_NAME_REQUIRED),
    check('itemRate')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.ITEM_RATE_REQUIRED),
    check('itemTax')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.ITEM_TAX_REQUIRED),
    check('itemTotalAmount')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.ITEM_TOTAL_REQUIRED)

]
const generateEditValidation = (req, res, next) => [
    check('itemType')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.ITEM_TYPE_REQUIRED),
    check('itemCode')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.ITEM_CODE_REQUIRED),
    check('itemName')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.ITEM_NAME_REQUIRED),
    check('itemRate')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.ITEM_RATE_REQUIRED),
    check('itemTax')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.ITEM_TAX_REQUIRED),
    check('itemTotalAmount')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.ITEM_TOTAL_REQUIRED)

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