const routers = require('express')
const documentReportApis = require("../webservices/documentController");
const authHandler = require('../middleware/authHandler.js')
const customerValidation = require('../validators/customerValidator.js');
const router = routers.Router();

router.post('/add',documentReportApis.fileUpload,authHandler.auth_func,documentReportApis.add);
router.post('/edit',documentReportApis.fileUpload,authHandler.auth_func,documentReportApis.edit);
router.post('/getList',authHandler.auth_func,documentReportApis.getList);

router.post('/getById',authHandler.auth_func,documentReportApis.getById);
router.post('/deleteDocument',authHandler.auth_func,documentReportApis.deleteDocument);


module.exports = router;
