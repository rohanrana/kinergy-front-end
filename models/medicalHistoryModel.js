const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const medicalHistorySchema = new Schema(
  {
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customers",
      default: null,
    },

    asthmaOrWheezingWithExercise: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    pneumothorax: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    shortnessOfBreath: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    lungDisease: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    blockoutsOrFainting: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    kidneyDisease: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    epilepsySeizuresOrConvulsions: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    nerveMuscleDisease: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    muscularDystropy: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },

    rheumatoidArthritis: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    Arthritis: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    osteoporosisOrOtherBoneDisorder: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },

    multipleSclerosis: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },

    thyroidDisease: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    ulcers: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    cancerTumorGrowth: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    gout: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    clottingDisorders: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    cyst: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    migrainesOrRecurrentHeadaches: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    meningitis: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    infection: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    fibromyalgia: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    heartAttackOrAngina: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    strokeOrTIA: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    irregularHeartBeat: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    heartDisease: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    heartSurgery: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    heartMurmur: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    chestPainOrPressure: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    bloodVesselSurgery: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    highBloodPressure: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    paceMaker: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    highCholesterol: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    lowBloodPressure: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    bloodTransfusion: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    bleedingOrOtherBloodDisorder: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    hivOrAids: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },

    hepatitis: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    diabetes: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    sickleCellDisease: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    unexpectedWeightChange: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    heatStrokeExhaustion: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    hearingLoss: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    poorEyesight: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    depression: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    unusualFatigueAtRest: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    hernia: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    anyOtherIllnessessOrCondition: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    comment: {
      type: String,
      default: null,
    },
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("MedicalHistory", medicalHistorySchema);
