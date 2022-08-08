const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const dayScheduleSchema = new Schema(
  {
    type: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      default: null,
    },
    sort: {
      type: Number,
      default:0
    }
  }
);

module.exports = mongoose.model("Days", dayScheduleSchema);
