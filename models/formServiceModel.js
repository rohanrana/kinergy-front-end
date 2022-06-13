const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const formBuilderSchema = new Schema(
  {
    form: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Form",
      default: null,
    },
    serviceCategory: {
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
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("FormService", formBuilderSchema);
