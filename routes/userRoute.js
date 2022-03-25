import routers from 'express';
import usersApi from '../webservices/userController.js';
import authHandler from '../middleware/authHandler.js';
const router =routers.Router();

router.post('/signup', usersApi.signup);
router.post('/login', usersApi.login);
router.post('/logOut',usersApi.logOut);




export default router;