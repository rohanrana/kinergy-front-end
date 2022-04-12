 const express = require('express');
 const countryApis = require('../webservices/countryStateCityController');
 const router = express.Router();

 router.post('/getCountry', countryApis.getCountry);
 router.post('/getStateByCountry', countryApis.getStateByCountry);
 router.post('/getCityByState', countryApis.getCityByState);


 module.exports = router;