const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Feature = require("../models/featureModel");
const Permission = require("../models/permissionModel");


const permissionGroupSchema = new Schema({
  name: {
    type: String,
    default: null,
  },
  groupSlug: {
    type: String,
    default: null,
  },
  sort: {
    type: Number,
    default: 0,
  },
  feature: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Feature",
      default: null,
    },
  ],
  permissions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Permission",
      default: null,
    },
  ],  
  status: {
    type: String,
    default: "ACTIVE",
  },
});

module.exports = mongoose.model("Group", permissionGroupSchema);
