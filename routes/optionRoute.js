const express = require("express");
const router = express.Router();
const authHandler = require('../middleware/authHandler')
const optionApis = require('../webservices/optionController');

const optionValidator = require('../Validators/optionValidator');

router.post('/addOption',authHandler.auth_func,optionValidator.add,optionApis.add);
router.post('/editOption',authHandler.auth_func,optionValidator.edit,optionApis.edit);
router.post('/getOption',authHandler.auth_func,optionApis.getOptions);
router.post('/getOptionById',authHandler.auth_func,optionValidator.getById,optionApis.getOptionById);
router.post('/getChildOption',authHandler.auth_func,optionApis.getChildOptions);

module.exports = router;