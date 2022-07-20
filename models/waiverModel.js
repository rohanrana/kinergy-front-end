const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const Facility = require('../models/facilityModel');
const waiverSchema = new Schema({
  appointment: {
    type: mongoose.Schema.Types.ObjectId,
    default: false,
  },
  authorizedRepresentativeName: {
    type: String,
    default: null,
  },
  date: {
    type: Date,
    default: null,
  },
  signature: {
    type: String,
    default: null,
  },
  validFor: {
    type: mongoose.Schema.Types.Boolean,
    default: false,
  },
  iamAuthorized: {
    type: mongoose.Schema.Types.Boolean,
    default: false,
  },
  needSign: {
    type: mongoose.Schema.Types.Boolean,
    default: false,
  },
});

module.exports = mongoose.model("Waiver", waiverSchema);
