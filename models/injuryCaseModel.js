const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");
const Schema = mongoose.Schema;

const caseRecordSchema = new Schema(
  {
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customers",
      default: null,
    },
    appointment: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Appointment",
      default: null,
    },
    dateOnSet: {
      type: Date,
      default: null,
    },
    bodyParts: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "bodyPart",
        default: null,
      },
    ],
    dateOfSurgery: {
      type: Date,
      default: null,
    },
    howInjuryConditionOccurred: {
      type: String,
      default: null,
    },
    painLevel: {
      type: Number,
      default: 0,
    },
    whatHasMadeConditionFeelBetter: {
      type: String,
      default: null,
    },
    whatHasMadeConditionFeelWorse: {
      type: String,
      default: null,
    },
    hasThisOrSimilarConditionOccuredBefore: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    hasThisOrSimilarConditionOccuredBeforeComment: {
      type: String,
      default: null,
    },
    haveYouSeenDoctorForThisCondition: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    hadAnyDiagnosticsForThisCondition: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    nameOfDoctor: {
      type: String,
      default: null,
    },
    doctorPhone: {
      type: String,
      default: null,
    },
    medicalDiagnosis: {
      type: String,
      default: null,
    },
    dateOfNextAppoitnment: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

caseRecordSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("CaseRecord", caseRecordSchema);
