const express = require("express");
const router = express.Router();
const serviceValidator = require('../Validators/serviceValidator');


const fileUpload = require('../middleware/fileUpload');
const serviceApis = require('../webservices/serviceController.js');
const authHandler = require('../middleware/authHandler');

// router.post('/add', fileUpload.fields([{
//     name: 'logo',
//     maxCount: 1
// }, {
//     name: 'banner',
//     maxCount: 1
// }]), serviceValidator.add, authHandler.auth_func, serviceApis.add);

router.post('/add', serviceApis.fileUpload, serviceValidator.add, authHandler.auth_func, serviceApis.add);
router.get('/serviceList', authHandler.auth_func, serviceApis.getList);
router.get('/getService/:serviceId', authHandler.auth_func, serviceApis.getServiceById);
router.post('/edit', serviceApis.fileUpload, serviceValidator.edit, authHandler.auth_func, serviceApis.edit);
router.get('/delete', authHandler.auth_func, serviceApis.delete);



module.exports = router;