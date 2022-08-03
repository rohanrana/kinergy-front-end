const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const customerQuestionAnswersSchema = new Schema({
  customerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Customers",
    default: null,
  },
  formId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Form",
    default: null,
  },
  question: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Question",
    default: null,
  },
  value: {
    type: String,
    default: null,
  },
});
module.exports = mongoose.model(
  "CustomerQuestionAnswers",
  customerQuestionAnswersSchema
);
