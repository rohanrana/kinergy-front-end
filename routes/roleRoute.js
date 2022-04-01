const routers =require( 'express')
const roleApis =require( '../webservices/roleController.js')
const authHandler =require( '../middleware/authHandler.js')
const router =routers.Router();


router.post('/addRole',authHandler.auth_func,roleApis.addRole);
router.post('/editRole',authHandler.auth_func,roleApis.editRole);

module.exports = router;