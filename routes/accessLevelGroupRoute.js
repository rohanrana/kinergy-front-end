const express = require("express");
const router = express.Router();
const authHandler = require('../middleware/authHandler')
const accessLevelApis = require('../webservices/accessLevel/accessLevelGroupController');

const accessLevelGroupValidator = require('../Validators/accessLevelGroupValidator');

router.post('/addGroup', authHandler.auth_func, accessLevelGroupValidator.add, accessLevelApis.addGroup);
router.post('/editGroup', authHandler.auth_func, accessLevelGroupValidator.edit, accessLevelApis.editGroup);
router.post('/groupList', authHandler.auth_func, accessLevelApis.groupList);
router.post('/getGroupById', authHandler.auth_func, accessLevelApis.getGroupById);
router.post('/delete', authHandler.auth_func, accessLevelApis.deleteGroup);

module.exports = router;