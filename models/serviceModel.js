const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const mongoosePaginate = require("mongoose-paginate");
const serviceSchema = new Schema(
  {
    title: {
      type: String,
      default: null,
    },
    slug: {
      type: String,
      default: null,
    },
    description: {
      type: String,
      default: null,
    },

    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ServiceCategory",
      default: null,
    },
    parentService: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Service",
      default: null,
    },
    serviceType: {
      type: String,
      enum: ["SERVICE", "SUBSERVICE"],
      default: null,
    },
    haveSubService: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    image: {
      type: String,
      default: null,
    },
    imageUrl: {
      type: String,
      default: null,
    },
    initialConsultation: {
      title: {
        type: String,
        default: null,
      },
      priceDetails: [
        {
          _id:{type: mongoose.Schema.Types.ObjectId},
          price: { type: Number, default: 0 },
          duration: { type: Number, default: null },
        },
      ],
    },
    followUpAppointment: {
      title: {
        type: String,
        default: null,
      },
      priceDetails: [
        {
          _id:{type: mongoose.Schema.Types.ObjectId},
          price: { type: Number, default: 0 },
          duration: { type: Number, default: null },
        },
      ],
    },
    providers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Facility",
        default: null,
      },
    ],
    insuranceApplicable: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    addBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Staff",
      default: null,
    },
    subService: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Service",
        default: null,
      },
    ],
    status: {
      type: String,
      enum: ["ACTIVE", "INACTIVE", "BLOCK"],
      default: "ACTIVE",
    },
  },
  {
    timestamps: true,
  }
);

serviceSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("Service", serviceSchema);
