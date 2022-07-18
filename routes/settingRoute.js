const express = require('express');

const router = express.Router();
const authHandler = require('../middleware/authHandler');
const settingValidator = require("../validators/settingValidator");
const settingApis = require('../webservices/settingController');

router.post('/addOrUpdate',authHandler.auth_func,settingValidator.add,settingApis.addOrUpdate);
router.post('/communication/addOrUpdate',authHandler.auth_func,settingValidator.add,settingApis.addOrUpdateCommunication);
router.post('/appointment/addOrUpdate',authHandler.auth_func,settingValidator.add,settingApis.addOrUpdateAppointment);
router.post('/editById',authHandler.auth_func,settingValidator.edit,settingApis.editById);

router.post('/getSetting',authHandler.auth_func,settingApis.getList);
router.post('/communication/getSetting',authHandler.auth_func,settingApis.getCommunicationSettingList);
router.post('/appointment/getSetting',authHandler.auth_func,settingApis.getAppointmentSettingList);
router.post('/getSettingByNameOrId',authHandler.auth_func,settingApis.getSettingByNameOrId);


router.post('/delete',authHandler.auth_func,settingApis.delete);

module.exports = router;