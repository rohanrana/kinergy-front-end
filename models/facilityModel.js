const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");
const Schema = mongoose.Schema;

const facilitySchema = new Schema(
  {
    facilityName: {
      type: String,
      default: null,
    },
    location: {
      type: String,
      default: null,
    },
    openHours: {
      type: String,
      default: null,
    },
    contact: [
      {
        phone: [
          {
            phoneType: { type: String, default: null },
            phone: { type: String, default: null },
          },
        ],
        email: {
          type: String,
          trim: true,
          lowercase: true,
          default: null,
        },
      },
    ],

    address: [
      {
        address: {
          type: String,
          default: null,
        },
        state: {
          type: Number,
          ref: "State",
          default: null,
        },
        city: {
          type: Number,
          ref: "City",
          default: null,
        },
        pincode: {
          type: String,
          default: null,
        },
      },
    ],

    image: {
      type: String,
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

facilitySchema.plugin(mongoosePaginate);
module.exports = mongoose.model("Facility", facilitySchema);
