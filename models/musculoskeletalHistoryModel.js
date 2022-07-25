const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const musculoskeletalHistorySchema = new Schema(
  {
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customers",
      default: null,
    },
    injuredYourHead: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    injuredYourHeadDescription: {
        type: String,
      default: null,
    },
    injuredYourFace: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    injuredYourFaceDescription: {
      type: String,
      default: null,
    },
    injuredYourNeck: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    injuredYourNeckDescription: {
      type: String,
      default: null,
    },
    injuredYourShoulder: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    injuredYourShoulderDescription: {
      type: String,
      default: null,
    },
    injuredAnUpperArm: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    injuredAnUpperArmDescription: {
      type: String,
      default: null,
    },
    injuredAnElbow: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    injuredAnElbowDescription: {
      type: String,
      default: null,
    },
    injuredAForearm: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    injuredAForearmDescription: {
      type: String,
      default: null,
    },
    injuredAWrist: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    injuredAWristDescription: {
      type: String,
      default: null,
    },
    injuredAHand: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    injuredAHandDescription: {
      type: String,
      default: null,
    },
    injuredAFinger: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    injuredAFingerDescription: {
      type: String,
      default: null,
    },
    injuredYourAbdomen: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    injuredYourAbdomenDescription: {
      type: String,
      default: null,
    },
    injuredYourChest: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    injuredYourChestDescription: {
      type: String,
      default: null,
    },
    injuredYourRibs: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    injuredYourRibsDescription: {
      type: String,
      default: null,
    },
    injuredYourBack: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    injuredYourBackDescription: {
      type: String,
      default: null,
    },
    injuredYourPelvis: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    injuredYourPelvisDescription: {
      type: String,
      default: null,
    },
    injuredYourHip: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    injuredYourHipDescription: {
      type: String,
      default: null,
    },
    injuredYourGroin: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    injuredYourGroinDescription: {
      type: String,
      default: null,
    },
    injuredYourThigh: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    injuredYourThighDescription: {
      type: String,
      default: false,
    },
    injuredYourHamstring: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    injuredYourHamStringDescription: {
      type: String,
      default: null,
    },
    injuredAKnee: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    injuredAKneeDescription: {
      type: String,
      default: null,
    },
    injuredALowerLeg: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    injuredALowerLegDescription: {
      type: String,
      default: null,
    },
    injuredAnAnkle: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    injuredAnAnkleDescription: {
      type: String,
      default: null,
    },
    injuredAFoot: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    injuredAFootDescription: {
      type: String,
      default: null,
    },
    injuredAToe: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    injuredAToeDescription: {
      type: String,
      default: null,
    },
    injuredAnotherPart: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    injuredAnotherPartDescription: {
      type: String,
      default: null,
    },
    hadSpecialTest: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    hadSpecialTestDescription: {
      type: String,
      default: null,
    },

    beenAdvisedToHaveSurgeryButNotYetBeenDone: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    beenAdvisedToHaveSurgeryButNotYetBeenDoneDescription: {
      type: String,
      default: null,
    },
    beenAdvisedToNotHaveSurgery: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    beenAdvisedToNotHaveSurgeryDescription: {
      type: String,
      default: null,
    },
    
    hadAnyPlatesScrewsOrPinInBody: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    hadAnyPlatesScrewsOrPinInBodyDescription: {
      type: String,
      default: null,
    },
    
    otherMusculoskeletalHistory: {
      type: mongoose.Schema.Types.Boolean,
      default: false,
    },
    otherMusculoskeletalHistoryDescription: {
      type: String,
      default: null,
    },
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("MusculoskeletalHistory", musculoskeletalHistorySchema);
