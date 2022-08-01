const routers = require('express')
const availabilityCalenderRouteApis = require("../webservices/availabilityCalenderController");
const authHandler = require('../middleware/authHandler.js')
const availabilityCalenderValidator = require('../validators/availabilityCalenderValidator.js');
const router = routers.Router();

router.post('/add',authHandler.auth_func,availabilityCalenderValidator.add,availabilityCalenderRouteApis.add);
router.post('/get',authHandler.auth_func,availabilityCalenderRouteApis.get);
router.post('/getByDate',authHandler.auth_func,availabilityCalenderRouteApis.getByDate);
// router.post('/addTimeSlots',authHandler.auth_func,availabilityCalenderValidator.addTimeSlots ,availabilityCalenderRouteApis.addTimeSlots);

module.exports = router;
