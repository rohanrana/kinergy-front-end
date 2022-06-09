const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Feature = require("../models/featureModel");
const Permission = require("../models/permissionModel");
const Group = require("../models/permissionGroupModel");

const permissionFeatureSchema = new Schema({
  name: {
    type: String,
    default: null,
  },
  featureSlug: {
    type: String,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
    default: null,
  },
  sort: {
    type: Number,
    default: 0,
  },
  // capabilities: {
  //   view: {
  //     type: mongoose.Schema.Types.Boolean,
  //     default: false,
  //   },
  //   edit: {
  //     type: mongoose.Schema.Types.Boolean,
  //     default: false,
  //   },
  // },

  group: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"Group",
    default: null,
  },
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

module.exports = mongoose.model("Feature", permissionFeatureSchema);
