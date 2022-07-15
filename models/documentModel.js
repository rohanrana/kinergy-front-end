const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");
const Schema = mongoose.Schema;

const documentSchema = new Schema(
  {
    interventionLinkedTo: {
      type: String,
      default: null,
    },
    documentType: {
      type: String,
      default: null,
    },
    attachedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Staff",
      default: null,
    },
    dateOfDocument: {
      type: Date,
      default: () => new Date(),
    },
  },

  {
    timestamps: true,
  }
);

documentSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("Document", documentSchema);
