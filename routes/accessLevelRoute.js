const express = require("express");
const router = express.Router();
const authHandler = require('../middleware/authHandler')
const accessLevelApis = require('../webservices/accessLevelController');

const accessLevelValidator = require('../Validators/accessLevelValidator');

router.post('/addLevel', authHandler.auth_func, accessLevelValidator.add, accessLevelApis.add);
router.post('/editLevel', authHandler.auth_func, accessLevelValidator.edit, accessLevelApis.edit);
router.post('/getLevelPermission', authHandler.auth_func,  accessLevelApis.getLevelPermission);
router.post('/getLevelList', authHandler.auth_func,  accessLevelApis.getLevelList);
router.post('/delete', authHandler.auth_func,  accessLevelApis.deleteLevel);
// router.post('/permissionsToLevel', authHandler.auth_func,  accessLevelApis.permissionsToLevel);
router.post('/permissionsToLevel', authHandler.auth_func,  accessLevelApis.permissionsToLevelNew);
router.post('/getLevelById', authHandler.auth_func,  accessLevelApis.getLevelById);

// router.post('/getLevelPermissionByLevelId', authHandler.auth_func,  accessLevelApis.getLevelPermissionByLevelId);
router.post('/getLevelPermissionByLevelId', authHandler.auth_func,  accessLevelApis.getLevelPermissionByLevelIdNew);



router.post('/searchPreference', authHandler.auth_func,  accessLevelApis.searchPreference);

module.exports = router;