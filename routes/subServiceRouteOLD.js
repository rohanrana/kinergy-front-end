const express = require("express");
const router = express.Router();
const subServiceValidator = require('../Validators/subServiceValidator');

const subServiceApis = require('../webservices/subServiceController');
const authHandler = require('../middleware/authHandler');

router.post('/add', subServiceApis.fileUpload, subServiceValidator.add, authHandler.auth_func, subServiceApis.add);
router.post('/edit', subServiceApis.fileUpload, subServiceValidator.edit, authHandler.auth_func, subServiceApis.edit);
router.post('/getList', authHandler.auth_func, subServiceApis.getList);
router.post('/getListByServiceId', authHandler.auth_func, subServiceApis.getListByServiceId);
router.post('/getById', authHandler.auth_func, subServiceApis.getById);
router.post('/changeStatus', authHandler.auth_func, subServiceApis.changeStatus);
router.post('/delete', authHandler.auth_func, subServiceApis.delete);


// Client Side
// router.post('/getSubServiceList', authHandler.auth_func, subServiceApis.getSubServiceListClientSide);


module.exports = router;