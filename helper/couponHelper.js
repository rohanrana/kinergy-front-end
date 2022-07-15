const Coupon = require("../models/couponModel");
const couponHit = (couponId) => {
  var couponData = Coupon.findOneAndUpdate(
    { _id: couponId },
    { $inc: { hits: 1 } }
  ).exec((couponHitErr, couponHitData) => {
    console.log('couponHitErr',couponHitErr,'couponHitData',couponHitData);
  });
};
module.exports = { couponHit };
