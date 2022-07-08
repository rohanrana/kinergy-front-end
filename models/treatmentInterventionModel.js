const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const interventionSchema = new Schema({
  interventionLinked: {
    type: String,
    default: null,
  },
  dateOfIntervention: {
    type: Date,
    default: null,
  },
  caseStatus: {
    type: String,
    default: null,
  },

  casePhysician: {
    type: String,
    default: null,
  },
  restrictions: {
    type: String,
    default: null,
  },
  // Subjective
  note: { type: String, default: null },
  //   Objective
  observation: {
    type: String,
    default: null,
  },
  rangeOfMotionAndStrength: {
    type: String,
    default: null,
  },
  specialTest: {
    type: String,
    default: null,
  },
  palpation: {
    type: String,
    default: null,
  },
  functionsTests: {
    type: String,
    default: null,
  },
  treatment: {
    type: String,
    default: null,
  },
  //   Assessment (A)
  icdCodes: {
    type: String,
    default: null,
  },
  indexOfSuspicion: {
    type: String,
    default: null,
  },
  surgeryProcedureComplete: {
    type: String,
    default: null,
  },
  // Plan(P)
  plan: {
    type: String,
    default: null,
  },
  MD_recommendations: {
    type: String,
    default: null,
  },
  education: {
    type: String,
    default: null,
  },
  treatmentGoal: {
    type: String,
    default: null,
  },
  //   Sign
  sign: { type: String, default: null },
});

module.exports = mongoose.model("Intervention", interventionSchema);
