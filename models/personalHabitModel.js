const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const personalHabitInformationSchema = new Schema(
  {
    
    customerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref:"Customers",
      default: null,
    },
    smoke: {
      type: mongoose.Schema.Types.Boolean,
      default: null,
    },
    smokePerDay: {
      type: String,
      default: null,
    },
    drinkAlcohol: {
      type: mongoose.Schema.Types.Boolean,
      default: null,
    },
    drinkAlcoholPerDay: {
      type: String,
      default: null,
    },
    drinkCoffee: {
      type: mongoose.Schema.Types.Boolean,
      default: null,
    },
    drinkCoffeePerDay: {
      type: String,
      default: null,
    },
    drinkSoda: {
      type: mongoose.Schema.Types.Boolean,
      default: null,
    },
    drinkSodaPerDay: {
      type: String,
      default: null,
    },
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "PersonalHabit",
  personalHabitInformationSchema
);
