const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// const Facility = require('../models/facilityModel');
const userAuthorizedDetailSchema = new Schema({
  rel: {
    type: String,
    default: null,
  },
  relId: {
    type: String,
    default: null,
  },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customers",
    default: null,
  },
  underStandAboveInformation: {
    type: mongoose.Schema.Types.Boolean,
    default: false,
  },
  iamAnAuthorizedRepresentativeForClient: {
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
});

module.exports = mongoose.model(
  "UserAuthorizedDetail",
  userAuthorizedDetailSchema
);
