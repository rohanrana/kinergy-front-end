const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");
const Schema = mongoose.Schema;

const medicalRecordSchema = new Schema(
  {
    dateOfSurgery: {
      type: Date,
      default: null,
    },
    ReportedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Staff",
      default: null,
    },
    surgeonName: {
      type: String,
      default: null,
    },
    description: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

medicalRecordSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("MedicalRecord", medicalRecordSchema);
