const express = require("express");
const router = express.Router();
const serviceCategoryValidator = require('../validators/serviceCategoryValidator');

const serviceCategoryApis = require('../webservices/serviceCategoryController.js');
const authHandler = require('../middleware/authHandler');

router.post('/add', serviceCategoryApis.fileUpload,authHandler.auth_func, serviceCategoryValidator.add,  serviceCategoryApis.add);
router.post('/edit', serviceCategoryApis.fileUpload, authHandler.auth_func,serviceCategoryValidator.edit,  serviceCategoryApis.edit);
router.post('/getList', authHandler.auth_func, serviceCategoryApis.getList);
router.post('/getListById', authHandler.auth_func, serviceCategoryApis.getListById);
router.post('/delete', authHandler.auth_func, serviceCategoryApis.delete);
router.post('/changeStatus', authHandler.auth_func, serviceCategoryApis.changeStatus);

// Client Side
router.post('/getServiceCategoryList', serviceCategoryApis.getServiceCategoryList);


module.exports = router;