const express = require("express");
const router = express.Router();
const authHandler = require('../middleware/authHandler')
const employeeApis = require('../webservices/employeeController');

const employeeValidator = require('../validators/employeeValidator');

router.post('/add', employeeApis.fileUpload,authHandler.auth_func, employeeValidator.add,  employeeApis.add);
router.post('/edit', employeeApis.fileUpload,  authHandler.auth_func,employeeValidator.edit, employeeApis.edit);
router.post('/editDocument', employeeApis.fileUpload, authHandler.auth_func, employeeValidator.editDocument, employeeApis.editDocument);
router.post('/delete', authHandler.auth_func, employeeApis.delete);
router.post('/employeeList', authHandler.auth_func, employeeApis.employeeList);
router.post('/employeeById', authHandler.auth_func, employeeApis.employeeById);
router.post('/changeStatus', authHandler.auth_func, employeeApis.changeStatus);

module.exports = router;