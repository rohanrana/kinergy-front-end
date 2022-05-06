const express = require("express");
const router = express.Router();
const serviceCategoryValidator = require('../Validators/serviceCategoryValidator');

const serviceCategoryApis = require('../webservices/serviceCategoryController.js');
const authHandler = require('../middleware/authHandler');

router.post('/add', serviceCategoryApis.fileUpload, serviceCategoryValidator.add, authHandler.auth_func, serviceCategoryApis.add);
router.post('/edit', serviceCategoryApis.fileUpload, serviceCategoryValidator.edit, authHandler.auth_func, serviceCategoryApis.edit);
router.post('/getList', authHandler.auth_func, serviceCategoryApis.getList);
router.post('/getListById', authHandler.auth_func, serviceCategoryApis.getListById);
router.post('/delete', authHandler.auth_func, serviceCategoryApis.delete);
router.post('/changeStatus', authHandler.auth_func, serviceCategoryApis.changeStatus);




module.exports = router;