const routers = require('express')
const customerApis = require('../webservices/customerController.js');
const medicalRecordApis = require("../webservices/medicalRecordController.js");
const authHandler = require('../middleware/authHandler.js')
const customerValidation = require('../validators/customerValidator.js');
const router = routers.Router();

// Admin Side
router.post('/medicalRecord/add',authHandler.auth_func,customerValidation.medicalRecordAdd,medicalRecordApis.add);

// Client Side
router.post('/loginWithMobile',authHandler.auth_func,customerValidation.mobileLogin,customerApis.loginWithMobile);
router.post('/loginWithEmail',authHandler.auth_func,customerValidation.emailLogin,customerApis.loginWithEmail);
router.post('/verifyMobileOtp',authHandler.auth_func,customerValidation.verifyOtp,customerApis.verifyMobileOtp);
router.post('/verifyEmailOtp',authHandler.auth_func,customerValidation.verifyOtp,customerApis.verifyEmailOtp);
router.post('/register',authHandler.auth_func,customerValidation.registerNewCustomer,customerApis.registerCustomer);



module.exports = router;