const express = require('express');

const router = express.Router();
const authHandler = require('../middleware/authHandler');
const waiverValidator = require("../validators/waiverValidator");
const waiverApis = require('../webservices/waiverController');

router.post('/add',waiverApis.fileUpload,authHandler.auth_func,waiverValidator.waiver,waiverApis.add);
router.post('/get',authHandler.auth_func,waiverApis.get);


module.exports = router;