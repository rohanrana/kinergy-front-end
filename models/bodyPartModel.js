const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");
const Schema = mongoose.Schema;

const bodyPartSchema = new Schema({
  caseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "CaseRecord",
    default: null,
  },
  bodyPart: {
    type: String,
    default: null,
  },
  bodySide: {
    type: String,
    default: null,
  },
});

bodyPartSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("bodyPart", bodyPartSchema);
