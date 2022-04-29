const express = require("express");
const router = express.Router();
const authHandler = require('../middleware/authHandler')
const appointmentApis = require('../webservices/appointmentController');

const appointmentValidator = require('../Validators/appointmentValidator');

router.post('/book', authHandler.auth_func, appointmentValidator.add, appointmentApis.book);
router.post('/edit', authHandler.auth_func, appointmentValidator.edit, appointmentApis.edit);

router.post('/getList', authHandler.auth_func, appointmentApis.getList);
router.post('/appointmentById/:appointmentId', authHandler.auth_func, appointmentApis.appointmentById);
router.post('/appointmentByCustomerId/:customerId', authHandler.auth_func, appointmentApis.appointmentByCustomerId);
router.post('/appointmentByStaffId/:staffId', authHandler.auth_func, appointmentApis.appointmentByStaffId);
router.post('/delete/:appointmentId', authHandler.auth_func, appointmentApis.delete);
router.post('/changeStatus/:appointmentId', authHandler.auth_func, appointmentApis.changeStatus);


module.exports = router;