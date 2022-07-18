const express = require("express");
const router = express.Router();
const serviceValidator = require("../Validators/serviceValidator");

const serviceApis = require("../webservices/serviceController.js");
const authHandler = require("../middleware/authHandler");

router.post(
  "/add",
  serviceApis.fileUpload,
  serviceValidator.add,
  authHandler.auth_func,
  serviceApis.add
);
router.post(
  "/edit",
  serviceApis.fileUpload,
  serviceValidator.edit,
  authHandler.auth_func,
  serviceApis.edit
);
router.post("/getList", authHandler.auth_func, serviceApis.getList);
router.post("/getListById", authHandler.auth_func, serviceApis.getListById);
router.post("/delete", authHandler.auth_func, serviceApis.delete);
router.post("/changeStatus", authHandler.auth_func, serviceApis.changeStatus);
router.post(
  "/getListByCategoryId",
  authHandler.auth_func,
  serviceApis.getListByCategoryId
);
router.post(
  "/getListByServiceId",
  authHandler.auth_func,
  serviceApis.getListByServiceId
);

router.post("/addProvider", authHandler.auth_func, serviceApis.addProvider);

// Client Side
router.post("/getServiceList", serviceApis.getServiceListClientSide);
router.post("/getSubServiceList", serviceApis.getSubServiceListClientSide);
router.post("/getServiceDetailById", serviceApis.getServiceDetailById);
router.post("/getServiceProvider", serviceApis.getServiceProvider);
module.exports = router;
