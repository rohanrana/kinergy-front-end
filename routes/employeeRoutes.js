const express = require("express");
const router = express.Router();
const authHandler = require('../middleware/authHandler')
const employeeApis = require('../webservices/employeeController');

const employeeValidator = require('../Validators/employeeValidator');

router.post('/add', employeeApis.fileUpload, employeeValidator.add, authHandler.auth_func, employeeApis.add);
router.post('/edit', employeeApis.fileUpload, employeeValidator.edit, authHandler.auth_func, employeeApis.edit);
router.post('/delete', authHandler.auth_func, employeeApis.delete);
router.post('/employeeList', authHandler.auth_func, employeeApis.employeeList);
router.post('/employeeById', authHandler.auth_func, employeeApis.employeeById);

module.exports = router;