const routers = require('express')
const scheduleCalenderRouteApis = require("../webservices/scheduleCalenderController");
const authHandler = require('../middleware/authHandler.js')
const scheduleCalenderValidator = require('../validators/scheduleCalenderValidator');
const router = routers.Router();

router.post('/addDays',authHandler.auth_func,scheduleCalenderValidator.addDays,scheduleCalenderRouteApis.addDays);
router.post('/add',authHandler.auth_func,scheduleCalenderValidator.add,scheduleCalenderRouteApis.add);
router.post('/get',authHandler.auth_func,scheduleCalenderRouteApis.get);
router.post('/getDays',authHandler.auth_func,scheduleCalenderRouteApis.getDays);
module.exports = router;
