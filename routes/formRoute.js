const express = require("express");
const router = express.Router();
const authHandler = require('../middleware/authHandler')
const formsApis = require('../webservices/formController');

const formsValidator = require('../Validators/formValidator');

router.post('/create', authHandler.auth_func, formsValidator.add, formsApis.create); 
router.post('/edit', authHandler.auth_func, formsValidator.edit, formsApis.edit); 

router.post('/formList', authHandler.auth_func, formsApis.list); 
router.post('/delete', authHandler.auth_func, formsApis.delete); 
router.post('/status', authHandler.auth_func, formsApis.status); 

module.exports = router;  