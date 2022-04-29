const express = require("express");
const router = express.Router();
const authHandler = require('../middleware/authHandler')
const facilityApis = require('../webservices/facilityController');

const facilityValidator = require('../Validators/facilityValidator');

router.post('/add', facilityValidator.add, authHandler.auth_func, facilityApis.add);
router.post('/edit', facilityValidator.edit, authHandler.auth_func, facilityApis.edit);
router.post('/delete', authHandler.auth_func, facilityApis.delete);
router.post('/facilityList', authHandler.auth_func, facilityApis.facilityList);
router.post('/facilityById/:facilityId', authHandler.auth_func, facilityApis.facilityById);
router.post('/changeStatus', authHandler.auth_func, facilityApis.changeStatus);
module.exports = router;