const express = require("express");
const router = express.Router();
const authHandler = require('../middleware/authHandler')
const accessLevelApis = require('../webservices/accessLevelController');

const accessLevelValidator = require('../validators/accessLevelValidator');

router.post('/addGroup', authHandler.auth_func, accessLevelValidator.add, accessLevelApis.add);

module.exports = router;    