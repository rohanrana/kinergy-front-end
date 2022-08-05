const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const languageSchema = new Schema({
  name: {
    type: String,
    default: null,
  },
  native: {
    type: String,
    default: null,
  },
  code: {
    type: String,
    default: null,
  },
});

module.exports = mongoose.model("Language", languageSchema);
