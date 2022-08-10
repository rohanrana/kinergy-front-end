const express = require("express");
const router = express.Router();
const authHandler = require('../middleware/authHandler')
const facilityApis = require('../webservices/facilityController');

const facilityValidator = require('../validators/facilityValidator');

router.post('/add',facilityApis.fileUpload, authHandler.auth_func,facilityValidator.add,  facilityApis.add);
router.post('/edit',facilityApis.fileUpload, authHandler.auth_func,facilityValidator.edit,  facilityApis.edit);
router.post('/delete', authHandler.auth_func, facilityApis.delete);
router.post('/facilityList', authHandler.auth_func, facilityApis.facilityList);


router.post('/facilityById', facilityApis.facilityById);
router.post('/getFacilityAvailability', facilityApis.getFacilityAvailability);
router.post('/getFacilityAvailabilityByDate', facilityApis.getFacilityAvailabilityByDate);
router.post('/changeStatus', authHandler.auth_func, facilityApis.changeStatus);
// Client Side 
router.post('/getProviderBookedSlot',  facilityApis.getProviderBookedSlot);

module.exports = router;