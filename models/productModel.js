const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    name: {
      type: String,
      default: null,
    },
    description: {
      type: String,
      default: null,
    },
    code: {
      type: String,
      default: null,
    },
    quantity: {
      type: Number,
      default: 0,
    },
    tax: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Tax",
      default: 0,
    },
    price: {
      type: mongoose.Schema.Types.Decimal128,
      default: 0,
    },

    totalAmount: {
      type: mongoose.Schema.Types.Decimal128,
      default: 0,
    },
    stockStatus: {
      type: Number,
      enum: [0, 1],
      default: 1,
    },
    image: {
      type: String,
      default: null,
    },
    status: {
      type: String,
      // enum: ["ACTIVE", "INACTIVE", "BLOCK", "ARCHIVED"],
      default: "ACTIVE",
    },
  },
  {
    timestamps: true,
  },
  { toJSON: { getters: true } }
);

productSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("Product", productSchema);
