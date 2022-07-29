const routers = require('express')
const scheduleCalenderRouteApis = require("../webservices/scheduleCalenderController");
const authHandler = require('../middleware/authHandler.js')
const scheduleCalenderValidator = require('../validators/scheduleCalenderValidator');
const router = routers.Router();

router.post('/addDays',authHandler.auth_func,scheduleCalenderValidator.add,scheduleCalenderRouteApis.add);
router.post('/getDays',authHandler.auth_func,scheduleCalenderRouteApis.getDays);
module.exports = router;
