const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const surgicalHistorySchema = new Schema(
  {
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customers",
      default: null,
    },

    abdominalSurgery: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    appendixSurgery: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    brainSurgery: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    breastSurgery: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    colonSurgery: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    valveSurgery: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    heartSurgery: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    herniaSurgery: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    hysterectomy: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    jointSurgery: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    spineSurgery: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    c_section: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },

    eyeSurgery: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    fractureSurgery: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    boneSurgery: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    stomachSurgery: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    tubesTied: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    otherSurgeryNotListed: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },

    comment: {
      type: String,
      default: null,
    },
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("SurgicalHistory", surgicalHistorySchema);
