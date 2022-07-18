const express = require("express");
const router = express.Router();
const authHandler = require('../middleware/authHandler')
const taxApis = require('../webservices/taxController');

const taxValidator = require('../validators/taxValidator');

router.post('/add', authHandler.auth_func, taxValidator.add, taxApis.add);
router.post('/edit', authHandler.auth_func, taxValidator.edit, taxApis.edit);
router.post('/taxList', authHandler.auth_func, taxApis.taxList);
router.post('/changeStatus', authHandler.auth_func, taxApis.changeStatus);
router.post('/taxById', authHandler.auth_func, taxApis.taxById);
router.post('/delete', authHandler.auth_func, taxApis.delete);


module.exports = router;