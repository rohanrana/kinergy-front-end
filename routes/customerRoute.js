const routers = require('express')
const customerApis = require('../webservices/customerController.js');
const medicalRecordApis = require("../webservices/medicalRecordController.js");
const injuryRecordApis = require("../webservices/injuryRecordController.js");
const surgeryRecordApis = require("../webservices/surgeryRecordController.js");
const progressReportApis = require("../webservices/progressReportController.js");
const authHandler = require('../middleware/authHandler.js');
const customerValidation = require('../validators/customerValidator.js');
const router = routers.Router();

// Admin Side
router.post('/medicalRecord/add',authHandler.auth_func,customerValidation.medicalRecordAdd,medicalRecordApis.add);
  
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
router.post('/loginWithMobile',customerValidation.mobileLogin,customerApis.loginWithMobile);
router.post('/resendMobileOtp',customerValidation.mobileLogin,customerApis.resendMobileOtp);
router.post('/verifyMobileOtp',customerValidation.verifyOtp,customerApis.verifyMobileOtp);
router.post('/loginWithEmail',customerValidation.emailLogin,customerApis.loginWithEmail);
router.post('/resendEmailOtp',customerValidation.emailLogin,customerApis.resendEmailOtp);
router.post('/verifyEmailOtp',customerValidation.verifyOtp,customerApis.verifyEmailOtp);

router.post('/register',customerValidation.registerNewCustomer,customerApis.registerCustomer);
router.post('/registerSomeOneElse',authHandler.auth_func,customerValidation.CustomerAddSomeOneValidation,customerApis.registerSomeOneCustomer);

router.post('/injuryRecord/add',authHandler.auth_func,injuryRecordApis.add);
router.post('/injuryRecord/get',authHandler.auth_func,injuryRecordApis.get);
router.post('/injuryRecord/getAppointmentDetailByCaseId',authHandler.auth_func,injuryRecordApis.getAppointmentDetailByCaseId);

// Some One Else  Appoinment
router.post('/getExistingProfileList',authHandler.auth_func,customerApis.getExistingProfileList);

// Client Portal Registration
router.post('/clientPortalRegistration/clientDetail',authHandler.auth_func,customerValidation.clientPortalClientDetail,customerApis.addClientDetail);
router.post('/clientPortalRegistration/communicationPreferences',authHandler.auth_func,customerValidation.clientPortalCommunicationPreferences,customerApis.communicationPreferences);
router.post('/clientPortalRegistration/emergencyContact',authHandler.auth_func,customerValidation.clientPortalEmergencyContact,customerApis.clientPortalEmergencyContact);
router.post('/clientPortalRegistration/medicalProviderInformation',authHandler.auth_func,customerValidation.medicalProviderInformation,customerApis.medicalProviderInformation);
router.post('/clientPortalRegistration/personalHabit',authHandler.auth_func,customerValidation.personalHabit,customerApis.personalHabit);
router.post('/clientPortalRegistration/medicationAndSupplement',authHandler.auth_func,customerValidation.medicationAndSupplement,customerApis.medicationAndSupplement);
router.post('/clientPortalRegistration/allergies',authHandler.auth_func,customerApis.allergies);
router.post('/clientPortalRegistration/medicalHistory',authHandler.auth_func,customerApis.medicalHistory);
router.post('/clientPortalRegistration/femalesOnly',authHandler.auth_func,customerApis.femalesOnly);
router.post('/clientPortalRegistration/surgicalHistory',authHandler.auth_func,customerApis.surgicalHistory);
router.post('/clientPortalRegistration/musculoskeletalHistory',authHandler.auth_func,customerApis.musculoskeletalHistory);


module.exports = router;
