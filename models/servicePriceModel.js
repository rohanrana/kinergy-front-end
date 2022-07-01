const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const servicePriceSchema = new Schema(
  {
  service: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Service",
      default: null,
    },
    initialConsultation: {
      title: {
        type: String,
        default: null,
      },
      priceDetails: [
        {
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
          price: { type: Number, default: 0 },
          duration: { type: Number, default: null },
        },
      ],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("ServicePrice", servicePriceSchema);
