const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongoosePaginate = require("mongoose-paginate");
const couponServiceSchema = new Schema({
  coupon: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Coupon",
    default: null,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ServiceCategory",
    default: null,
  },
  service: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Service",
    default: null,
  },
  subService: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Service",
    default: null,
  },
  expireDate: { type: String, require: true, default: "" },
  status: {
    type: String,
    // enum:["ACTIVE","INACTIVE"],
    default: "ACTIVE",
  },
});


couponServiceSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("CouponService", couponServiceSchema);
