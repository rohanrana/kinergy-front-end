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
    sort:{
      type:Number,
      default:0
    }
  }
);

module.exports = mongoose.model("Section", sectionSchema);
