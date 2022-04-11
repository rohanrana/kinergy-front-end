const { check, validationResult } = require('express-validator');

const Staffs = require('../models/staffModel.js');
const Customers = require('../models/customersModel.js');
const resCode = require('../helper/httpResponseCode.js');
const resMessage = require('../helper/httpResponseMessage.js');;


const generateValidators = (req, res, next) => [
    check('email')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.EMAIL_REQUIRED)
    .bail()
    .normalizeEmail()
    .isEmail()
    .withMessage(resMessage.EMAIL_VALID),
    check("password")
    .matches(/^(?=.*[A-Za-z])(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/)
    .withMessage(resMessage.PASSWORD_STRONG)
    .notEmpty()
    .withMessage(resMessage.PASSWORD_REQUIRED)
];


const reporter = (req, res, next) => {
    var errors = validationResult(req);
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
    login: [
        generateValidators(),
        reporter
    ]
};