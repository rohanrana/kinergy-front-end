const Response = require('../common_functions/response_handler');
const resCode = require('../helper/httpResponseCode');
const resMessage = require('../helper/httpResponseMessage');
const Facility = require('../models/facilityModel');
const City = require('../models/cityModel');

const async = require('async');
// const path = require('path');

// const fs = require('fs');
// const multer = require('multer');
// const maxSize = 1 * 1024 * 1024;

const facilityApis = {
    'add': (req, res, next) => {
        const { facilityName, city, state, pincode, phone, fax, email } = req.body;
        const facility = new Facility({
            facilityName: facilityName,
            city: city,
            state: state,
            pincode: pincode,
            phone: phone,
            fax: fax,
            email: email,

        });

        facility.save((err, result) => {
            // console.log(err, result);
            if (!err)
                Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, 'Facility Add Successfully.', result);
            else {
                console.log(err);
                Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.WENT_WRONG);
            }
        });
    },
    'edit': (req, res, next) => {

        if (!req.body._id) {
            Response.sendResponseWithoutData(res, resCode.WENT_WRONG, 'Please Enter Facility Id.');
        } else {
            const { facilityName, city, state, pincode, phone, fax, email } = req.body;
            const editData = {
                facilityName: facilityName,
                city: city,
                state: state,
                pincode: pincode,
                phone: phone,
                fax: fax,
                email: email,

            };
            Facility.findOneAndUpdate({ _id: req.body._id }, editData, { new: true }).lean().exec((err, result) => {
                if (!err) {
                    Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, 'Facility Update Successfully.', result);
                } else
                    Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.WENT_WRONG);

            });
        }
    },
    'delete': (req, res) => {
        if (!req.body._id) {
            Response.sendResponseWithoutData(res, resCode.WENT_WRONG, 'Please Enter Facility Id');
        } else {
            Facility.findOneAndDelete({ _id: req.body._id }).lean().exec((err, result) => {
                if (!err) {
                    Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, 'Facility Deleted Successfully', result);
                } else {
                    console.log(err);
                    Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.WENT_WRONG);

                }
            });
        }
    },

    'facilityById': (req, res, next) => {
        if (!req.params.facilityId) {
            Response.sendResponseWithoutData(res, resCode.WENT_WRONG, 'Please Enter Facility Id.');
        } else {
            Facility.find({ _id: req.params.facilityId }).populate('city').populate('state').lean().exec((err, result) => {
                // console.log(result.length);
                if (err)
                    Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.WENT_WRONG);
                else if (!result || result.length == 0)
                    Response.sendResponseWithoutData(res, resCode.WENT_WRONG, 'Facility Not Found.');
                else
                    Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, 'Facility Found Successfully.', result);
            });
        }
    },

    'facilityList': (req, res, next) => {
        Facility.find().populate('city').populate('state').lean().exec((err, result) => {
            // console.log(result.length);
            if (err)
                Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.WENT_WRONG);
            else if (!result || result.length == 0)
                Response.sendResponseWithoutData(res, resCode.WENT_WRONG, 'Facility Not Found.');
            else
                Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, 'Facility List .', result);
        });
    },
    'changeStatus': (req, res, next) => {
        var STATUS = ["ACTIVE", "INACTIVE", "BLOCK"];
        if (!req.body._id) {
            Response.sendResponseWithoutData(res, resCode.WENT_WRONG, 'Please Enter Facility Id');
        } else if (!req.body.status) {
            Response.sendResponseWithoutData(res, resCode.WENT_WRONG, 'Please Enter Facility Status');
        } else if (!STATUS.includes(req.body.status)) {
            Response.sendResponseWithoutData(res, resCode.WENT_WRONG, 'Invalid  Facility Type');
        } else {
            Facility.findOneAndUpdate({ _id: req.body._id }, { status: req.body.status.toUpperCase() }, { new: true }).lean().exec((err, result) => {
                if (!err) {
                    Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, 'Facility Status Changed Successfully.', result);
                } else
                    Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.WENT_WRONG);

            });

        }

    }

}

module.exports = facilityApis;