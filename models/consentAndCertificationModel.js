const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const Facility = require('../models/facilityModel');
const consentAndCertificationSchema = new Schema({
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customers",
    default: null,
  },
  appointment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Appointment",
    default: null,
  },
  readAndAgree: {
    type: mongoose.Schema.Types.Boolean,
    default: false,
  },
  authorizedRepresentative: {
    type: mongoose.Schema.Types.Boolean,
    default: false,
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
    default: null,
  },
});

module.exports = mongoose.model(
  "ConsentAndCertification",
  consentAndCertificationSchema
);
