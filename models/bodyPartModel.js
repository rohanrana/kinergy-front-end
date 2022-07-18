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
    type: mongoose.Schema.Types.ObjectId,
    ref: "Option",
    default: null,
  },
  bodySide: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Option",
    default: null,
  },
});

bodyPartSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("bodyPart", bodyPartSchema);
