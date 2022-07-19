const express = require("express");
const router = express.Router();
const authHandler = require('../middleware/authHandler')
const formsApis = require('../webservices/formController');

const formsValidator = require('../validators/formValidator');

router.post('/create', authHandler.auth_func, formsValidator.add, formsApis.create); 
router.post('/edit', authHandler.auth_func, formsValidator.edit, formsApis.edit); 
router.post('/formById', authHandler.auth_func, formsApis.formById); 
router.post('/formList', authHandler.auth_func, formsApis.list); 
router.post('/delete', authHandler.auth_func, formsApis.delete); 
router.post('/status', authHandler.auth_func, formsApis.status); 
router.post('/addServiceToForm',authHandler.auth_func,formsApis.addServiceToForm);
router.post('/getLinkServices',authHandler.auth_func,formsApis.getLinkServices);

module.exports = router;  