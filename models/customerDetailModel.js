const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerDetailSchema = new Schema(
  {
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customers",
      default: null,
    },
    medicationDescripion: {
      type: String,
      default: null,
    },
    supplementDescripion: {
      type: String,
      default: null,
    },

    allergies: {
      type: String,
      default: null,
    }

    // drinkAlcohol: {
    //   type: mongoose.Schema.Types.Boolean,
    //   default: null,
    // },
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("CustomerDetail", customerDetailSchema);
