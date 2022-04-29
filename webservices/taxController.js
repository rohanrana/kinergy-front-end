const Response = require('../common_functions/response_handler');
const resCode = require('../helper/httpResponseCode');
const resMessage = require('../helper/httpResponseMessage');
const Tax = require('../models/taxModel');


const STATUS = ["ACTIVE", "INACTIVE", "BLOCK"];

const taxApis = {
    'add': (req, res, next) => {
        const { taxName, taxRate, status } = req.body;
        const tax = new Tax({
            taxName: taxName,
            taxRate: taxRate,
            status: status
        });
        console.log('tax', tax);

        tax.save((err, result) => {
            // console.log(err, result);
            if (!err)
                Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, 'Tax Add Successfully.', result);
            else {
                console.log(err);
                Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.WENT_WRONG);
            }
        });
    },
    'edit': (req, res, next) => {

        if (!req.body._id) {
            Response.sendResponseWithoutData(res, resCode.WENT_WRONG, 'Please Enter Tax Id.');
        } else {
            const { taxName, taxRate, status } = req.body;
            const editData = {
                taxName: taxName,
                taxRate: taxRate,
                status: status
            };
            Tax.findOneAndUpdate({ _id: req.body._id }, editData, { new: true }).lean().exec((err, result) => {
                if (!err) {
                    Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, 'Tax Update Successfully.', result);
                } else {
                    console.log(err);
                    Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.WENT_WRONG);
                }


            });
        }
    },
    'delete': (req, res) => {
        if (!req.params.taxId) {
            Response.sendResponseWithoutData(res, resCode.WENT_WRONG, 'Please Enter Tax Id');
        } else {
            Tax.findOneAndDelete({ _id: req.params.taxId }).lean().exec((err, result) => {
                if (!err) {
                    Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, 'Tax Deleted Successfully', result);
                } else {
                    console.log(err);
                    Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.WENT_WRONG);

                }
            });
        }
    },

    'taxById': (req, res, next) => {
        if (!req.params.taxId) {
            Response.sendResponseWithoutData(res, resCode.WENT_WRONG, 'Please Enter Tax Id.');
        } else {
            Tax.find({ _id: req.params.taxId }).lean().exec((err, result) => {
                // console.log(result.length);
                if (err)
                    Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.WENT_WRONG);
                else if (!result || result.length == 0)
                    Response.sendResponseWithoutData(res, resCode.WENT_WRONG, 'Tax Not Found.');
                else
                    Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, 'Tax Found Successfully.', result);
            });
        }
    },

    'taxList': (req, res, next) => {
        Tax.find({ status: "ACTIVE" }).lean().exec((err, result) => {
            console.log(err);
            if (err)
                Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.WENT_WRONG);
            else if (!result || result.length == 0)
                Response.sendResponseWithoutData(res, resCode.WENT_WRONG, 'Tax Not Found.');
            else
                Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, 'Tax List .', result);
        });
    },
    'changeStatus': (req, res, next) => {

        if (!req.params.taxId) {
            Response.sendResponseWithoutData(res, resCode.WENT_WRONG, 'Please Enter Tax Id');
        } else if (!req.body.status) {
            Response.sendResponseWithoutData(res, resCode.WENT_WRONG, 'Please Enter Tax Status');
        } else if (!STATUS.includes(req.body.status)) {
            Response.sendResponseWithoutData(res, resCode.WENT_WRONG, 'Invalid  Tax Type');
        } else {
            Tax.findOneAndUpdate({ _id: req.params.taxId }, { status: req.body.status.toUpperCase() }, { new: true }).lean().exec((err, result) => {
                if (!err) {
                    Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, 'Tax Status Changed Successfully.', result);
                } else
                    Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.WENT_WRONG);

            });

        }

    }

}

module.exports = taxApis;