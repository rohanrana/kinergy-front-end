const express = require("express");
const router = express.Router();
const authHandler = require('../middleware/authHandler')
const facilityApis = require('../webservices/facilityController');

const facilityValidator = require('../validators/facilityValidator');

router.post('/add',facilityApis.fileUpload, authHandler.auth_func,facilityValidator.add,  facilityApis.add);
router.post('/edit',facilityApis.fileUpload, authHandler.auth_func,facilityValidator.edit,  facilityApis.edit);
router.post('/delete', authHandler.auth_func, facilityApis.delete);
router.post('/facilityList', authHandler.auth_func, facilityApis.facilityList);


router.post('/facilityById', authHandler.auth_func, facilityApis.facilityById);
router.post('/changeStatus', authHandler.auth_func, facilityApis.changeStatus);
module.exports = router;