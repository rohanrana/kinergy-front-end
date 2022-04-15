const express = require("express");
const router = express.Router();
const serviceValidator = require('../Validators/serviceValidator');


const fileUpload = require('../middleware/fileUpload');
// const fileUploadErrorHandler = require('../middleware/fileUploadErrorHandler');



const serviceApis = require('../webservices/serviceController.js');
const authHandler = require('../middleware/authHandler');

router.post('/add', fileUpload.single("image"), serviceValidator.add, authHandler.auth_func, serviceApis.add);
router.get('/serviceList', authHandler.auth_func, serviceApis.getList);
router.get('/getService/:serviceId', authHandler.auth_func, serviceApis.getServiceById);
router.post('/edit', authHandler.auth_func, serviceValidator.edit, serviceApis.edit);
router.get('/delete', authHandler.auth_func, serviceApis.delete);



module.exports = router;