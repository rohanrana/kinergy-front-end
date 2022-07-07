const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");
const Schema = mongoose.Schema;

const medicalRecordSchema = new Schema(
  {
    relId: {
      type: mongoose.Schema.Types.ObjectId,
      default: null,
    },
    relType: {
      type: String,
      default: null,
    },
    fileName: {
      type: String,
      default: null,
    },
    fileType: {
      type: String,
      default: null,
    },
    visableToCustomer: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    staff: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Staff",
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

medicalRecordSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("File", medicalRecordSchema);
