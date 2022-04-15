const { check, validationResult } = require('express-validator');

const resCode = require('../helper/httpResponseCode.js');
const resMessage = require('../helper/httpResponseMessage.js');
const Service = require('../models/serviceModel');
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
        return Service.findOne({ slug: slugify(value, { replacement: '-', remove: undefined, lower: true, strict: true, trim: true }), }).then(service => {
            if (service) {
                return Promise.reject(resMessage.TITLE_ALREADY_EXIST);
            }
        });
    })
    // .withMessage('Only .png, .jpg and .jpeg format allowed!'), // custom error message that will be send back if the file in not a pdf. 


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
    console.log(req.file);
    // __if file has any error
    // if (req.file.error !== 'undefined' && req.file.error == true) {
    //     return res.status(resCode.UNPROCESSABLE_ENTITY).json({
    //         errors: req.file
    //     });
    // }

    // unlink file if any error occurs

    // Check validation other fields
    var errors = validationResult(req);
    if (!errors.isEmpty()) {
        if (req.body.image) {
            fs.unlink('public/upload/service/' + req.body.image, function(err) {
                if (err && err.code == 'ENOENT') {
                    // file doens't exist
                    console.info("File doesn't exist, won't remove it.");
                } else if (err) {
                    // other errors, e.g. maybe we don't have enough permission
                    console.error("Error occurred while trying to remove file");
                } else {
                    console.info(`removed`);
                }
            });
        }

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