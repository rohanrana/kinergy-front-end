const express = require("express");

const router = express.Router();
const authHandler = require("../middleware/authHandler");

const profileApis = require("../webservices/profileController");
const profileValidator = require("../validators/profileValidator");

router.post(
  "/updatePersonalDetail",
  authHandler.auth_func,
  profileValidator.updatePersonalDetail,
  profileApis.updatePersonalDetail
);
router.post(
  "/updateContactDetail",
  authHandler.auth_func,
  profileApis.updateContactDetail
);
router.post(
  "/updatePassword",
  authHandler.auth_func,
  profileValidator.updatePassword,
  profileApis.updatePassword
);
router.post(
  "/updateOtherPreferences",
  authHandler.auth_func,
  profileValidator.otherPreferences,
  profileApis.updateOtherPreferences
);

router.post(
  "/getProfileDetails",
  authHandler.auth_func,
  profileValidator.getUserDetails,
  profileApis.getUserDetails
);

module.exports = router;
