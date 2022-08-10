const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const Facility = require('../models/facilityModel');
const waiverSchema = new Schema({
  appointment: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"Appointment",
    default: null,
  },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"Customers",
    default: null,
  },
  type: {
    type: String,
    enum:["APPOINTMENT","PROFILE"],
    default: 'null',
  },
  appointment: {
    type: mongoose.Schema.Types.ObjectId,
    default: null,
  },
  authorizedRepresentativeName: {
    type: String,
    default: null,
  },
  clientName: {
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
  signatureDate: {
    type: Date,
    default: new Date(),
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
