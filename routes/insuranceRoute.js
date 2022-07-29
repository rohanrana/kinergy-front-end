const routers = require('express')
const insuranceApis = require("../webservices/insuranceController");
const authHandler = require('../middleware/authHandler.js');
const insuranceValidation = require('../validators/insuranceValidator');
const router = routers.Router();

// Admin Side
router.post('/add',authHandler.auth_func,insuranceValidation.add,insuranceApis.add);
router.post('/edit',authHandler.auth_func,insuranceValidation.edit,insuranceApis.edit);
router.post('/delete',authHandler.auth_func,insuranceApis.insuranceDelete);
router.post('/getInsuranceList',authHandler.auth_func,insuranceApis.getInsuranceList);
router.post('/getInsuranceById',authHandler.auth_func,insuranceApis.getInsuranceById);


// Client Side
router.post('/client/add',insuranceApis.fileUpload,authHandler.auth_func,insuranceValidation.clientAdd,insuranceApis.clientAddInsurance);
router.post('/client/getInsurance',authHandler.auth_func,insuranceApis.getClientInsurance);
router.post('/client/edit',insuranceApis.fileUpload,authHandler.auth_func,insuranceValidation.clientEdit,insuranceApis.clientEditInsurance);

module.exports = router;
