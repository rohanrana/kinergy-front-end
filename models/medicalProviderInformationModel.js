const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const medicalProviderInformationSchema = new Schema(
  {
    
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref:"Customers",
      default: null,
    },
    familyDocter: {
      fullName: {
        type: String,
        default: null,
      },
      phone: {
        type: String,
        default: null,
      },
    },
    referringDocter: {
      fullName: {
        type: String,
        default: null,
      },
      phone: {
        type: String,
        default: null,
      },
    },
    dateOfLastPhysicalExamination: {
      type: Date,
      default: null,
    },
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("MedicalProviderInformation", medicalProviderInformationSchema);
