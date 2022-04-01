const routers =require( 'express')
const staffApis =require( '../webservices/staffController.js')
const authHandler =require( '../middleware/authHandler.js')
const router =routers.Router();

router.post('/signup', staffApis.signup);
router.post('/login', staffApis.login);
router.post('/logOut',staffApis.logOut);
router.get('/userList',authHandler.auth_func,staffApis.userListing);
router.post('/addStaff',authHandler.auth_func,staffApis.addStaff);

module.exports = router;