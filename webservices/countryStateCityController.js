const Country = require('../models/countryModel');
const State = require('../models/stateModel');
const City = require('../models/cityModel');
const Response = require('../common_functions/response_handler');
const resCode = require('../helper/httpResponseCode');
const resMessage = require('../helper/httpResponseMessage');


const countryCityStateApis = {
    // =========================getCountry=====================
    'getCountry': (req, res) => {
        Country.find().lean().exec((error, result) => {
            if (error)
                Response.sendResponseWithoutData(res, resCode.WENT_WRONG, resMessage.WENT_WRONG);
            else if (!result)
                Response.sendResponseWithoutData(res, resCode.UNAUTHORIZED, resMessage.COUNTRY_NOT_FOUND);
            else
                Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, 'Country List.', [...result]);
        });
    },
    // =========================getStateByCountryID=====================
    'getStateByCountry': (req, res) => {
        if (!req.body._id) {
            Response.sendResponseWithoutData(res, resCode.INTERNAL_SERVER_ERROR, resMessage.Country_ID_NOT_FOUND);
        } else {
            State.find({ country: req.body._id }, { cities: 0 }).lean().exec((error, result) => {
                if (error) {
                    Response.sendResponseWithData(res, resCode.WENT_WRONG, error);
                } else if (!result) {
                    Response.sendResponseWithoutData(res, resCode.UNAUTHORIZED, resMessage.STATE_NOT_FOUND);
                } else {
                    Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, 'State List', [...result]);
                }
            });
        }
    },
    // =========================getCityByStateID=====================
    'getCityByState': (req, res) => {
        if (!req.body._id) {
            Response.sendResponseWithoutData(res, resCode.INTERNAL_SERVER_ERROR, resMessage.Country_ID_NOT_FOUND);
        } else {
            City.find({ state: req.body._id }, { state: 0 }).sort({ name: 1 }).lean().exec((error, result) => {
                if (error) {
                    Response.sendResponseWithData(res, resCode.WENT_WRONG, error);
                } else if (!result) {
                    Response.sendResponseWithoutData(res, resCode.UNAUTHORIZED, resMessage.STATE_NOT_FOUND);
                } else {
                    Response.sendResponseWithData(res, resCode.EVERYTHING_IS_OK, 'City List', [...result]);
                }
            });
        }
    }
}

module.exports = countryCityStateApis;