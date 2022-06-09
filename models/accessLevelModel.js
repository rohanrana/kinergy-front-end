const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const Facility = require('../models/facilityModel');
const accessLevelSchema = new Schema({
  level: {
    type: String,
    default: null,
  },
  slug: {
    type: String,
    default: null,
  },
  sort: {
    type: Number,
    default: 0,
  },
  status: {
    type: String,
    default: "ACTIVE",
  },
});

module.exports = mongoose.model("AccessLevel", accessLevelSchema);
