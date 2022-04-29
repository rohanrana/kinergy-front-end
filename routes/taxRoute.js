const express = require("express");
const router = express.Router();
const authHandler = require('../middleware/authHandler')
const taxApis = require('../webservices/taxController');

const taxValidator = require('../Validators/taxValidator');

router.post('/add', authHandler.auth_func, taxValidator.add, taxApis.add);
router.post('/edit', authHandler.auth_func, taxValidator.edit, taxApis.edit);
router.post('/taxList', authHandler.auth_func, taxApis.taxList);
router.post('/delete/:taxId', authHandler.auth_func, taxApis.delete);
router.post('/taxById/:taxId', authHandler.auth_func, taxApis.taxById);
router.post('/changeStatus/:taxId', authHandler.auth_func, taxApis.changeStatus);


module.exports = router;