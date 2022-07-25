const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");
const Schema = mongoose.Schema;

const customersSchema = new Schema(
  {
    firstName: {
      type: String,
      default: null,
    },
    lastName: {
      type: String,
      default: null,
    },
    dob: {
      type: String,
      default: null,
    },
    gender: {
      type: String,
      enum: ["MALE", "FEMALE", "OTHERS"],
      default: null,
    },
    nickName: {
      type: String,
      default: null,
    },
    ssnNumber: {
      type: String,
      default: null,
    },

    //   Contact Info
    phone: {
      type: Number,
      default: null,
    },
    phone2: {
      type: Number,
      default: null,
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      default: null,
    },
    // Address
    address: {
      type: String,
      default: null,
    },
    city: {
      type: String,
      default: null,
    },
    state: {
      type: String,
      default: null,
    },
    pin: {
      type: String,
      default: null,
    },
    // Communication Preference
    automatedReminder: {
      type: String,
      default: null,
    },
    appointmentConfirmation: {
      type: String,
      default: null,
    },
    // Work Information Preference
    occupation: {
      type: String,
      default: null,
    },
    employmenStatus: {
      type: String,
      default: null,
    },
    emergencyContact: [
      {
        fullName: {
          type: String,
          default: null,
        },
        relationShip: {
          type: String,
          default: null,
        },
        language: {
          type: String,
          ref: "Language",
          default: null,
        },
        phone: [
          {
            phoneType: { type: String, default: null },
            phone: { type: String, default: null },
          },
        ],
        // phoneType: { type: String, default: null },
        // phone: { type: String, default: null },
        altPhone: { type: String, default: null },
      },
    ],
    // Contact Info
    contactInformation: [
      {
        phoneType: { type: String, default: null },
        phone: { type: String, default: null },
        primary: { type: mongoose.Schema.Types.Boolean, default: false },
      },
    ],
    primaryEmail: { type: String, default: null },
    secondaryEmail: { type: String, default: null },
    // Other
    profilePic: {
      type: String,
      default: null,
    },

    password: {
      type: String,
      default: null,
    },
    status: {
      type: String,
      enum: ["ACTIVE", "INACTIVE", "BLOCK", "LOCK"],
      default: "ACTIVE",
    },
    type: {
      type: String,
      default: "CUSTOMER",
    },
    jwtToken: {
      type: String,
      default: null,
    },
    roleId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Roles",
      default: null,
    },
    lastLoginIp: {
      type: String,
      default: null,
    },
    otp: {
      type: String,
      default: null,
    },

    customerType: {
      type: String,
      enum: ["GUEST", "REGISTERED"],
      default: "REGISTERED",
    },
    refCustomer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Customers",
      default: null,
    },
    relation: {
      type: String,
      default: null,
    },
    appointmentReminders: {
      type: String,
      default: null,
    },
    medicalProviderInformation: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "MedicalProviderInformation",
      default: null,
    },
    personalHabitInformation: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "PersonalHabit",
      default: null,
    },
    customerDetail: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "customerDetail",
      default: null,
    },
    medicalHistory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "MedicalHistory",
      default: null,
    },
    surgicalHistory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "MedicalHistory",
      default: null,
    },
    femalesOnly: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "FemalesOnly",
      default: null,
    },
    musculoskeletalHistory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "MusculoskeletalHistory",
      default: null,
    },
    
  },

  {
    timestamps: true,
  }
);

customersSchema.plugin(mongoosePaginate);
module.exports = mongoose.model("Customers", customersSchema);
