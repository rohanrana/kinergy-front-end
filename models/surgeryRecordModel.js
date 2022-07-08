const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");
const Schema = mongoose.Schema;

const surgeryRecordSchema = new Schema(
  {
    medicalRecord:{
      type:String,
      default:null
    },
    dateOfSurgery: {
      type: Date,
      default: null,
    },
    reportedBy: {
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

surgeryRecordSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("SurgeryRecord", surgeryRecordSchema);
