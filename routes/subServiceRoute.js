const express = require("express");
const router = express.Router();
const subServiceValidator = require('../Validators/subServiceValidator');

const subServiceApis = require('../webservices/subServiceController');
const authHandler = require('../middleware/authHandler');

router.post('/add', subServiceApis.fileUpload, subServiceValidator.add, authHandler.auth_func, subServiceApis.add);
router.post('/edit', subServiceApis.fileUpload, subServiceValidator.edit, authHandler.auth_func, subServiceApis.edit);
// router.post('/getList', authHandler.auth_func, subServiceApis.getList);
// router.post('/getListById', authHandler.auth_func, subServiceApis.getListById);
// router.post('/delete', authHandler.auth_func, subServiceApis.delete);
// router.post('/changeStatus', authHandler.auth_func, subServiceApis.changeStatus);




module.exports = router;