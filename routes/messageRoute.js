const express = require('express');

const router = express.Router();
const authHandler = require('../middleware/authHandler');

const messageApis = require('../webservices/messageController');

router.post('/add',authHandler.auth_func,messageApis.add);
router.post('/getMessage',authHandler.auth_func,messageApis.getMessage);


module.exports = router;