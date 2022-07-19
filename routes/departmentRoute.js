const express = require("express");
const router = express.Router();
const authHandler = require('../middleware/authHandler')
const departmentApis = require('../webservices/departmentController');


const departmentValidator = require('../validators/departmentValidator');       

router.post('/add',departmentApis.fileUpload, authHandler.auth_func, departmentValidator.add, departmentApis.add);
router.post('/edit',departmentApis.fileUpload, authHandler.auth_func, departmentValidator.edit, departmentApis.edit);

router.post('/getList', authHandler.auth_func, departmentApis.getList);
// router.post('/departmentById', authHandler.auth_func, departmentApis.departmentById);
// router.post('/departmentByType', authHandler.auth_func, departmentApis.departmentByType);
// router.post('/delete', authHandler.auth_func, departmentApis.delete);
// router.post('/changeStatus', authHandler.auth_func, departmentApis.changeStatus);
// router.post('/changeDepartment', authHandler.auth_func, departmentApis.changeDepartment);


module.exports = router;