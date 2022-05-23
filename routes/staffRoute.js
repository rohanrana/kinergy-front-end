const routers = require('express')
const staffApis = require('../webservices/staffController.js')
const authHandler = require('../middleware/authHandler.js')
const router = routers.Router();

const staffValidator = require('../Validators/staffValidator');
router.post('/signup', staffApis.fileUpload, staffValidator.signup, staffApis.signup);
router.post('/login', staffApis.login);
router.post('/logOut', staffApis.logOut);
router.post('/userList', staffApis.userListing);
router.post('/userSearchList', staffApis.userSearchListing);
router.post('/addStaff', authHandler.auth_func, staffValidator.add, staffApis.addStaff);
router.post('/getStaffById', authHandler.auth_func, staffApis.getStaffById);

router.post('/editStaff', authHandler.auth_func, staffValidator.edit, staffApis.editStaff);
router.post('/otp', staffApis.otp);
router.post('/getProfile', authHandler.auth_func, staffApis.getProfile);
router.post('/editProfile', authHandler.auth_func, staffApis.editProfile);

router.post('/changeStatus', authHandler.auth_func, staffApis.changeStatus);
// router.post('/delete', authHandler.auth_func, staffApis.delete);



module.exports = router;