const routers = require('express')
const customerApis = require('../webservices/customerController.js');
const medicalRecordApis = require("../webservices/medicalRecordController.js");
const injuryRecordApis = require("../webservices/injuryRecordController.js");
const surgeryRecordApis = require("../webservices/surgeryRecordController.js");
const progressReportApis = require("../webservices/progressReportController.js");
const authHandler = require('../middleware/authHandler.js')
const customerValidation = require('../validators/customerValidator.js');
const router = routers.Router();

// Admin Side
router.post('/medicalRecord/add',authHandler.auth_func,customerValidation.medicalRecordAdd,medicalRecordApis.add);
router.post('/injuryRecord/add',authHandler.auth_func,injuryRecordApis.add);
router.post('/surgeryRecord/add',surgeryRecordApis.fileUpload,authHandler.auth_func,customerValidation.surgeryRecordAdd,surgeryRecordApis.add);
router.post('/progressReport/add',authHandler.auth_func,customerValidation.progressReportAdd,progressReportApis.add);
router.post('/progressReport/add',authHandler.auth_func,customerValidation.progressReportAdd,progressReportApis.add);
// Client Admin Side
router.post('/editDetails',authHandler.auth_func,customerApis.editClientDetails);
router.post('/getList',authHandler.auth_func,customerApis.getList);
router.post('/getCustomerById',authHandler.auth_func,customerApis.getCustomerById);
router.post('/getCustomerEmergencyContactById',authHandler.auth_func,customerApis.getCustomerEmergencyContactById);
router.post('/updateEmergencyContact',authHandler.auth_func,customerApis.updateEmergencyContact);
router.post('/deleteEmergencyContactByContactId',authHandler.auth_func,customerApis.deleteEmergencyContactByContactId);

router.get('/', function(req, res, next) {
    res.render('index', { title: 'add user' });
  });

 router.post('/clientLock',authHandler.auth_func,customerApis.clientLock);

// Client Side
router.post('/loginWithMobile',authHandler.auth_func,customerValidation.mobileLogin,customerApis.loginWithMobile);
router.post('/loginWithEmail',authHandler.auth_func,customerValidation.emailLogin,customerApis.loginWithEmail);
router.post('/verifyMobileOtp',authHandler.auth_func,customerValidation.verifyOtp,customerApis.verifyMobileOtp);
router.post('/verifyEmailOtp',authHandler.auth_func,customerValidation.verifyOtp,customerApis.verifyEmailOtp);
router.post('/register',authHandler.auth_func,customerValidation.registerNewCustomer,customerApis.registerCustomer);
router.post('/registerSomeOneElse',authHandler.auth_func,customerValidation.CustomerAddSomeOneValidation,customerApis.registerSomeOneCustomer);



module.exports = router;