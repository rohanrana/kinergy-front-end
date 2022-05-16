const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const sectionSchema = new Schema(
  {
    title: {
      type: String,
      default: null,
    },
    description: {
      type: String,
      default: null,
    },
    form: 
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Form",
      },
    question: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Question",
      },
    ],
  }
);

module.exports = mongoose.model("Section", sectionSchema);
