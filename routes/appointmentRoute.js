const express = require("express");
const router = express.Router();
const authHandler = require('../middleware/authHandler')
const appointmentApis = require('../webservices/appointmentController');

const appointmentValidator = require('../Validators/appointmentValidator');

router.post('/book', authHandler.auth_func, appointmentValidator.add, appointmentApis.book);
router.post('/edit', authHandler.auth_func, appointmentValidator.edit, appointmentApis.edit);

router.post('/getList', authHandler.auth_func, appointmentApis.getList);
router.post('/appointmentById', authHandler.auth_func, appointmentApis.appointmentById);
router.post('/appointmentByCustomerId', authHandler.auth_func, appointmentApis.appointmentByCustomerId);
router.post('/appointmentByStaffId', authHandler.auth_func, appointmentApis.appointmentByStaffId);
router.post('/delete', authHandler.auth_func, appointmentApis.delete);
router.post('/changeStatus', authHandler.auth_func, appointmentApis.changeStatus);


module.exports = router;