const routers = require('express')
const blockCalenderRouteApis = require("../webservices/blockCalenderController");
const authHandler = require('../middleware/authHandler.js')
const blockCalenderValidator = require('../validators/blockCalenderValidator.js');
const router = routers.Router();

router.post('/add',authHandler.auth_func,blockCalenderValidator.add,blockCalenderRouteApis.add);
router.post('/getBlockCalender',authHandler.auth_func,blockCalenderRouteApis.getBlockCalender);
// router.post('/addTimeSlots',authHandler.auth_func,blockCalenderValidator.addTimeSlots ,blockCalenderRouteApis.addTimeSlots);

module.exports = router;
