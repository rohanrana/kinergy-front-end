const express = require("express");
const router = express.Router();
const authHandler = require('../middleware/authHandler')
const formsApis = require('../webservices/appointmentController');

const formsValidator = require('../validators/appointmentValidator');

router.post('/create', authHandler.auth_func, formsValidator.add, formsApis.create); 

module.exports = router;  