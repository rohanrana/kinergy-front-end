const routers = require('express')
const staffApis = require('../webservices/staffController.js')
const authHandler = require('../middleware/authHandler.js')
const router = routers.Router();

const staffValidator = require('../Validators/staffValidator');
router.post('/signup', staffApis.signup);
router.post('/login', authHandler.auth_func, staffValidator.login, staffApis.login);
router.post('/logOut', staffApis.logOut);
router.get('/userList', authHandler.auth_func, staffApis.userListing);
router.post('/addStaff', authHandler.auth_func, staffValidator.add, staffApis.addStaff);
router.post('/getStaffById', authHandler.auth_func, staffApis.getStaffById);

router.post('/editStaff', authHandler.auth_func, staffValidator.edit, staffApis.editStaff);
router.post('/otp', staffApis.otp);
router.post('/getProfile', authHandler.auth_func, staffApis.getProfile);
router.post('/editProfile', authHandler.auth_func, staffApis.editProfile);



module.exports = router;