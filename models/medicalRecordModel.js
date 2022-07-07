const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");
const Schema = mongoose.Schema;

const medicalRecordSchema = new Schema(
  {
    dateOnSet: {
      type: Date,
      default: null,
    },
    treatedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Staff",
      default: null,
    },
    casePhysician: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    casePhysicianName: {
      type: String,
      default: null,
    },
    injuryType: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Option",
      default: null,
    },
    bodyDetails: [
      {
        bodyPart: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Option",
          default: null,
        },
        bodySide: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Option",
          default: null,
        },
      },
    ],
    description: {
      type: String,
      default: null,
    },
    restrictions: {
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
