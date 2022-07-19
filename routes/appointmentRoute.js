const express = require("express");
const router = express.Router();
const authHandler = require('../middleware/authHandler')
const appointmentApis = require('../webservices/appointmentController');

const appointmentValidator = require('../validators/appointmentValidator');

router.post('/book', authHandler.auth_func, appointmentValidator.add, appointmentApis.book);
router.post('/edit', authHandler.auth_func, appointmentValidator.edit, appointmentApis.edit);

router.post('/getList', authHandler.auth_func, appointmentApis.getList);
router.post('/appointmentById', authHandler.auth_func, appointmentApis.appointmentById);
router.post('/appointmentByCustomerId', authHandler.auth_func, appointmentApis.appointmentByCustomerId);
router.post('/appointmentByStaffId', authHandler.auth_func, appointmentApis.appointmentByStaffId);
router.post('/delete', authHandler.auth_func, appointmentApis.deleteAppointment);
router.post('/changeStatus', authHandler.auth_func, appointmentApis.changeStatus);

// Client Side
router.post('/customerBooking', authHandler.auth_func, appointmentValidator.addByCustomer, appointmentApis.customerBooking);
// router.post('/bookingAppointmentSomeOneElse', authHandler.auth_func, appointmentValidator.addByCustomer, appointmentApis.bookingAppointmentSomeOneElse);
router.post('/followUpBooking', authHandler.auth_func, appointmentValidator.addByCustomer, appointmentApis.followUpBooking);
router.post('/getAppointmentDetail', authHandler.auth_func,appointmentApis.getAppointmentDetail);
module.exports = router;