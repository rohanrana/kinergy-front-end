const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const timeScheduleSchema = new Schema(
  {
    provider: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Facility",
      default: null,
    },
    type: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      default: null,
    },
    available: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    intervals: [
      {
        from: {
          type: String,
          default: "09:00",
        },
        to: {
          type: String,
          default: "17:00",
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("TimeSchedule", timeScheduleSchema);
