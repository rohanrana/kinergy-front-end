const express = require("express");
const router = express.Router();
const authHandler = require('../middleware/authHandler')
const accessLevelApis = require('../webservices/accessLevel/accessLevelPermissionController');

const accessLevelPermissionValidator = require('../Validators/accessLevelPermissionValidator');

router.post('/addPermission', authHandler.auth_func, accessLevelPermissionValidator.add, accessLevelApis.addPermission);
router.post('/editPermission', authHandler.auth_func, accessLevelPermissionValidator.edit, accessLevelApis.editPermission);
router.post('/permissionList', authHandler.auth_func, accessLevelApis.permissionList);
router.post('/getPermissionById', authHandler.auth_func, accessLevelApis.getPermissionById);
router.post('/delete', authHandler.auth_func, accessLevelApis.deletePermission);

module.exports = router;