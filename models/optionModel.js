const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");
const Schema = mongoose.Schema;

const optionSchema = new Schema({
  name: {
    type: String,
    default: null,
  },
  slug: {
    type: String,
    default: null,
  },
  parentOption: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Option",
    default: null,
  },
  relTo: {
    type: String,
    enum: ["undefined", "injuryType", "bodyPart", "bodySide"],
    default: "undefined",
  },
});

optionSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("Option", optionSchema);
