const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongoosePaginate = require("mongoose-paginate");
const couponSchema = new Schema(
  {
    title: {
      type: String,
      default: null,
    },
    couponCode: {
      type: String,
      default: null,
    },
    description: {
      type: String,
      default: null,
    },
    startDate: {
      type: Date,
      default: () => new Date(),
    },
    endDate: {
      type: Date,
      default: () => new Date(),
    },
    perUserLimit: {
      type: Number,
      default: 1,
    },
    hits: {
      type: Number,
      default: 0,
    },
    couponType: {
      type: String,
      enum: ["PERCENTAGE", "AMOUNT"],
      default: "AMOUNT",
    },
    couponValue: {
      type: String,
      default: 0,
    },

    couponService: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "CouponService",
        default: null,
      },
    ],

    status: {
      type: String,
      // enum:["ACTIVE","INACTIVE"],
      default: "ACTIVE",
    },
  },
  {
    timestamps: true,
  }
);

couponSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("Coupon", couponSchema);
