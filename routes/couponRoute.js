const express = require("express");
const router = express.Router();
const authHandler = require("../middleware/authHandler");
const couponApis = require("../webservices/couponController");
const couponValidator = require("../Validators/couponValidator");

router.post("/create",authHandler.auth_func,couponValidator.add,couponApis.add);
router.post("/edit",authHandler.auth_func,couponValidator.edit,couponApis.edit);
router.post("/couponList", authHandler.auth_func, couponApis.couponList);
router.post("/getCouponById", authHandler.auth_func, couponApis.getCouponById);
router.post("/delete", authHandler.auth_func, couponApis.deleteCoupon);
router.post("/status", authHandler.auth_func, couponApis.status);

router.post("/apply", authHandler.auth_func, couponApis.apply);
module.exports = router;
