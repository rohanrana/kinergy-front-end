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
    haveSubService: {
      type: String,
      enum: ["YES", "NO"],
      default: "NO",
    },
    image: {
      type: String,
      default: null,
    },
    priceDetail: [
      {
        price: { type: Number, default: null },
        duration: { type: Number, default: null },
      },
    ],
    insuranceApplicable:{
        type: String,
        enum: ["YES", "NO"],
        default: "NO"
    },
    addBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Staff",
      default: null,
    },
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
