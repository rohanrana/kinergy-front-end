const routers = require('express')
const roleApis = require('../webservices/roleController.js')
const authHandler = require('../middleware/authHandler.js')
const router = routers.Router();


router.post('/addRole', authHandler.auth_func, roleApis.addRole);
router.post('/editRole', authHandler.auth_func, roleApis.editRole);
router.post('/getRole', authHandler.auth_func, roleApis.getRole);
router.post('/getPremissionByRole', authHandler.auth_func, roleApis.getPremissionByRole)
router.post('/changeStatus', authHandler.auth_func, roleApis.changeStatus);
module.exports = router;