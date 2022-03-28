import routers from 'express';
import staffApis from '../webservices/staffController.js';
import authHandler from '../middleware/authHandler.js';
const router =routers.Router();

router.post('/signup', staffApis.signup);
router.post('/login', staffApis.login);
router.post('/logOut',staffApis.logOut);




export default router;