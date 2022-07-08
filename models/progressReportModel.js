const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");
const Schema = mongoose.Schema;

const progressReportSchema = new Schema(
  {
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customers",
      default: null,
    },
    injuryDate: {
      type: Date,
      default: null,
    },
    surgeryDate: {
      type: Date,
      default: null,
    },
    physicianName: {
      type: String,
      default: null,
    },
    therapistName: {
      type: String,
      default: null,
    },
    synopsis: {
      type: String,
      default: null,
    },
    impression: {
      type: String,
      default: null,
    },
    plan: {
      type: String,
      default: null,
    },
    rom_status: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    rom_comment: {
      type: String,
      default: null,
    },
    palpation_status: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    palpation_comment: {
      type: String,
      default: null,
    },
    joint_mobility_status: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    joint_mobility_comment: {
      type: String,
      default: null,
    },
    strength_status: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    strength_comment: {
      type: String,
      default: null,
    },

    swelling_status: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    swelling_comment: {
      type: String,
      default: null,
    },

    function_status: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    function_comment: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

progressReportSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("ProgressReport", progressReportSchema);
