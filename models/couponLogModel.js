const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongoosePaginate = require("mongoose-paginate");
const couponLogSchema = new Schema({
  couponId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Coupon",
    default: null,
  },
  couponName: {
    type: String,
    default: null,
  },
  couponCode: {
    type: String,
    default: null,
  },
  endDate: {
    type: String,
    default: null,
  },
  couponType: {
    type: String,
    default: null,
  },
  value: {
    type: String,
    default: "0",
  },
  service: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Service",
    default: null,
  },
});

couponLogSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("CouponLog", couponLogSchema);
