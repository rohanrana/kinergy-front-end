const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const medicalProviderInformationSchema = new Schema(
  {
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
