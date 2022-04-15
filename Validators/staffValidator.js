const { check, validationResult } = require('express-validator');

const Staffs = require('../models/staffModel.js');
const Customers = require('../models/customersModel.js');
const resCode = require('../helper/httpResponseCode.js');
const resMessage = require('../helper/httpResponseMessage.js');


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

const StaffAddValidation = (req, res, next) => [
    check('firstName')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.FIRST_NAME_REQUIRED),
    check('contact')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.CONTACT_REQUIRED),
    check('type')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.TYPE_REQUIRED),
    check('address')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.ADDRESS_REQUIRED),
    check('country')
    .isInt().withMessage(resMessage.COUNTRY_INT)
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.COUNTRY_REQUIRED),

    check('state')
    .isInt().withMessage(resMessage.STATE_INT)
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.STATE_REQUIRED),

    check('city')
    .isInt().withMessage(resMessage.CITY_INT)
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.CITY_REQUIRED),

    check('pin')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.PIN_REQUIRED),
    check('dob')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.DOB_REQUIRED),
    check('gender')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.GENDER_REQUIRED),
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

const StaffEditValidation = (req, res, next) => [
    check('firstName')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.FIRST_NAME_REQUIRED),
    check('contact')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.CONTACT_REQUIRED),
    check('type')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.TYPE_REQUIRED),
    check('address')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.ADDRESS_REQUIRED),
    check('country')
    .isInt().withMessage(resMessage.COUNTRY_INT)
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.COUNTRY_REQUIRED),

    check('state')
    .isInt().withMessage(resMessage.STATE_INT)
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.STATE_REQUIRED),

    check('city')
    .isInt().withMessage(resMessage.CITY_INT)
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.CITY_REQUIRED),

    check('pin')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.PIN_REQUIRED),
    check('dob')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.DOB_REQUIRED),
    check('gender')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.GENDER_REQUIRED),
    check('email')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage(resMessage.EMAIL_REQUIRED)
    .bail()
    .normalizeEmail()
    .isEmail()
    .withMessage(resMessage.EMAIL_VALID)
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
    ],
    add: [
        StaffAddValidation(),
        reporter
    ],
    edit: [
        StaffEditValidation(),
        reporter
    ]
};