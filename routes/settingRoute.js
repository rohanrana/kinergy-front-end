const express = require('express');

const router = express.Router();
const authHandler = require('../middleware/authHandler');

const settingApis = require('../webservices/settingController');

router.post('/addOrUpdate',authHandler.auth_func,settingApis.addOrUpdate);
router.post('/editById',authHandler.auth_func,settingApis.editById);

router.post('/getSetting',authHandler.auth_func,settingApis.getList);

router.post('/getSettingByNameOrId',authHandler.auth_func,settingApis.getSettingByNameOrId);


router.post('/delete',authHandler.auth_func,settingApis.delete);

module.exports = router;