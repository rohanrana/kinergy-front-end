const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");
const Schema = mongoose.Schema;
const STATUS = require("../helper/status");

const appointmentSchema = new Schema(
  {
    appointmentType: {
      type: String,
      enum: ["INITIAL", "FOLLOWUP"],
      default: "INITIAL",
    },
    serviceType: {
      type: String,
      enum: ["SERVICE", "SUBSERVICE"],
      default: "SERVICE",
    },
    appointmentFor: {
      type: String,
      enum: ["MYSELF", "ELSE"],
      default: "MYSELF",
    },
    service: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Service",
      default: null,
    },
    servicePrice: {
      type: mongoose.Schema.Types.ObjectId,
      default: null,
    },
    serviceDuration: {
      type: String,
      default: null, // IN MINUTES
    },
    serviceAmount: {
      type: String,
      default: null,
    },
    appointmentDate: {
      type: Date,
      default: null,
    },
    appointmentTime: {
      type: String,
      default: null,
    },

    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customers",
      default: null,
    },
    staff: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Staff",
      default: null,
    },
    provider: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Facility",
      default: null,
    },
    department: {
      type: String,
      default: null,
    },
    case: {
      type: String,
      default: null,
    },
    location: {
      type: String,
      default: null,
    },
    spentTime: {
      type: String,
      default: null,
    },
    status: {
      type: String,
      // enum: ["UPCOMING", "COMPLETE", "CANCEL"],
      default: STATUS.PENDING,
    },
    couponApplied: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    coupon: {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Coupon",
      },
      title: {
        type: String,
      },
      couponCode: {
        type: String,
      },
      couponType: {
        type: String,
      },
      value: {
        type: String,
      },
    },

    amount: {
      type: String,
      default: "0.00",
    },
    taxAmount: {
      type: String,
      default: "0.00",
    },
    discountAmount: {
      type: String,
      default: "0.00",
    },
    totalAmount: {
      type: String,
      default: "0.00",
    },
  },
  {
    timestamps: true,
  }
);

appointmentSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("Appointment", appointmentSchema);
