const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");
const Schema = mongoose.Schema;

const insuranceSchema = new Schema(
  {
    // Client Details
    clientId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customers",
      default: null,
    },
    clientFirstName: {
      type: String,
      default: null,
    },
    clientLastName: {
      type: String,
      default: null,
    },
    clientDob: {
      type: Date,
      default: null,
    },
    clientGender: {
      type: String,
      default: null,
    },
    clientPhone: {
      type: String,
      default: null,
    },
    clientEmail: {
      type: String,
      default: null,
    },

    // Insurance Provider
    providerName: {
      type: String,
      default: null,
    },
    providerPhone: {
      type: String,
      default: null,
    },
    providerEmail: {
      type: String,
      default: null,
    },
    providerAddress: {
      type: String,
      default: null,
    },
    providerState: {
      type: Number,
      ref: "State",
      default: null,
    },
    providerCountry: {
      type: Number,
      ref: "Country",
      default: null,
    },
    providerPinCode: {
      type: String,
      default: null,
    },

    // Insurance Details
    insuranceNumber: {
      type: String,
      default: null,
    },
    claimNumber: {
      type: String,
      default: null,
    },
    groupId: {
      type: String,
      default: null,
    },
    orderOfBenefits: {
      type: String,
      default: null,
    },
    effectiveFrom: {
      type: Date,
      default: null,
    },
    effectiveTill: {
      type: Date,
      default: null,
    },
    copayType: {
      type: String,
      //   enum: ["fixed", "percent"],
      default: "fixed",
    },
    copayValue: {
      type: String,
      default: "0",
    },
    ssn: {
      type: String,
      default: null,
    },
    insuredOrGuarantorName: {
      type: String,
      default: null,
    },
    insuredOrGuarantorDob: {
      type: String,
      default: null,
    },
    relationToInsured: {
      type: String,
      default: null,
    },
    note: {
      type: String,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

insuranceSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("Insurance", insuranceSchema);
