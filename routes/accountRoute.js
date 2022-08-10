const express = require('express');

const router = express.Router();
const authHandler = require('../middleware/authHandler');
const accountValidator = require("../validators/accountValidator");
const accountApis = require('../webservices/accountController');

router.post('/searchProfile',authHandler.auth_func,accountValidator.search,accountApis.search);
router.post('/sendAccessGrantRequest',authHandler.auth_func,accountApis.sendAccessGrantRequest);
router.post('/getAccessGrantList',authHandler.auth_func,accountApis.getAccessGrantList);
router.post('/changeGrantAcessStatus',authHandler.auth_func,accountApis.changeGrantAcessStatus);
router.post('/unlinkAllAccount',authHandler.auth_func,accountApis.unlinkAllAccount);


module.exports = router;