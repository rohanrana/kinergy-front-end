const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const femailsOnlySchema = new Schema(
  {
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customers",
      default: null,
    },

    pregnant: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    nursing: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
  },
 
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("FemalesOnly", femailsOnlySchema);
