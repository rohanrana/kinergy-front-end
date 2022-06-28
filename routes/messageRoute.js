const express = require('express');

const router = express.Router();
const authHandler = require('../middleware/authHandler');
const messageValidator = require("../Validators/messageValidator");
const messageApis = require('../webservices/messageController');

router.post('/add',authHandler.auth_func,messageValidator.addMessage,messageApis.add);
router.post('/getMessage',authHandler.auth_func,messageApis.getMessage);
router.post('/delete',authHandler.auth_func,messageApis.delete);


module.exports = router;